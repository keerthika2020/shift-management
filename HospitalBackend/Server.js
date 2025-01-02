const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const router = express.Router();
var fileUpload = require("express-fileupload");
//const { User } = require('../models/User');  // Assuming you have a User model
const session = require('express-session');
const rateLimit = require("express-rate-limit");
const speakeasy = require("speakeasy");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

dotenv.config();
const app = express();
const PORT = 8082;
app.use(cors({
  origin: "*", // Multiple allowed origins // Allow requests from the production React app URL
  methods: "GET,POST,PUT,DELETE", // Specify allowed methods
  credentials: true,              // Allow credentials (if needed)
}));







// MongoDB Configuration
const MONGO_URI =  process.env.MONGO_URI || "mongodb+srv://hasikababu01:sEMM55iJgxYQXNoJ@cluster0.1qkd7.mongodb.net/";
const client = new MongoClient(MONGO_URI);

// Middleware
app.use(bodyParser.json());

// Middleware to verify JWT tokens
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(403).json({ error: "Token required" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token is not valid" });
    }
    req.user = user; // Attach user info to request object
    next();
  });
};

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG and PNG files are allowed"), false);
    }
  },
});

// Function to connect to MongoDB
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit if connection fails
  }
}
connectToDatabase();

// Function to send email
const sendRegistrationEmail = async (userEmail, userName) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASSWORD, // Your Gmail app password
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address
    to: userEmail, // Recipient's email address
    subject: 'Welcome to Vitality Healthcare', // Subject line
    html: `
      <h1>Welcome to Vitality Healthcare, ${userName}!</h1>
      <p>Thank you for registering at Vitality Healthcare. We are excited to have you on board.</p>
      <p><strong>Your details have been successfully registered in our system.</strong></p>
      <p>If you have any questions, feel free to contact us.</p>
      <br>
      <p>Best regards,</p>
      <p>The Vitality Healthcare Team</p>
    `, // HTML body for better presentation
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Registration email sent successfully!');
  } catch (error) {
    console.error('Error sending registration email:', error);
  }
};

// API endpoint to add a new user with file uploads
app.post("/api/register", upload.fields([{ name: "profilePicture" }, { name: "idProof" }]), async (req, res) => {
  try {
    const userDetails = req.body; // Expecting data to come in the request body
    const files = req.files;

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "dateOfBirth",
      "gender",
      "phoneNumber",
      "email",
      "staffId",
      "designation",
      "department",
      "roleOfAccess",
      "dateOfJoining",
      "username",
      "password",
      "permanentAddress",
      "temporaryAddress",
      "emergencyContactName",
      "emergencyRelationship",
      "emergencyContactPhone",
      "bankName",
      "accountNumber",
      "ifscCode",
      "medicalConditions",
    ];

    for (const field of requiredFields) {
      if (!userDetails[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
      }
    }

    // Ensure files are uploaded
    if (!files.profilePicture || !files.idProof) {
      return res.status(400).json({ error: "Both profilePicture and idProof are required." });
    }

    const dbName = "hospital";
    const db = client.db(dbName);
    const collection = db.collection("staffdetail");

    // Check if the username already exists
    const existingUser = await collection.findOne({ username: userDetails.username });
    if (existingUser) {
      return res.status(400).json({ error: `Username '${userDetails.username}' already exists.` });
    }

    // Check if the email already exists
    const existingEmail = await collection.findOne({ email: userDetails.email });
    if (existingEmail) {
      return res.status(400).json({ error: `Email '${userDetails.email}' already exists.` });
    }

    // Hash the password before saving it
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userDetails.password, saltRounds);

    // Add hashed password to user details
    userDetails.password = hashedPassword;

    // Add file paths to the user details
    userDetails.profilePicturePath = files.profilePicture[0].path;
    userDetails.idProofPath = files.idProof[0].path;

    // Insert user details into the collection
    const result = await collection.insertOne(userDetails);
      // Send registration email
    await sendRegistrationEmail(userDetails.email, userDetails.firstName);

    res.status(201).json({ message: "User added successfully", userId: result.insertedId });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Login API
app.post("/api/login", async (req, res) => {
  try {
    const { email, role, password } = req.body;

    if (!email || !role || !password) {
      return res.status(400).json({ error: "Email, role, and password are required." });
    }

    const dbName = "hospital";
    const db = client.db(dbName);
    const collection = db.collection("staffdetail");

    // Find user by email and role
    const user = await collection.findOne({ email: email, roleOfAccess: role });

    if (!user) {
      return res.status(404).json({ error: "Invalid email or role." });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password." });
    }
    const username1 = email.split("@")[0];  
  // Generate JWT token
  const token = jwt.sign(
    { id: user._id, username: user.username, role: user.roleOfAccess },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
    // Login successful
    res.status(200).json({
      message: "Login successful",
      token: token, // Send token to the client
      role: user.roleOfAccess,
      username: user.username,
      username1,
      profilePicture: user.profilePicturePath || "/assets/med2.png",
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Failed to login." });
  }
});

// Protect routes using JWT middleware
app.get("/api/protected", authenticateJWT, (req, res) => {
  res.status(200).json({ message: "This is a protected route.", user: req.user });
});



//app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
      if (err) {
          return res.status(500).json({ message: 'Error logging out' });
      }

      return res.json({ message: 'Logged out successfully' });
  });
});

// Route to send reset password link
app.post("/api/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: "Email is required" });

  const dbName = "hospital";
  const db = client.db(dbName);
  const collection = db.collection("staffdetail");

  try {
    const user = await collection.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Generate reset token and expiration
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour

    await collection.updateOne(
      { email },
      { $set: { resetToken, resetTokenExpiry } }
    );

    // Send email with reset link
    const resetLink = `https://bejewelled-tiramisu-949b9c.netlify.app/reset-password/${resetToken}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `You requested a password reset. Click the link below to reset your password:\n${resetLink}\nIf you didn't request this, please ignore this email.`,
  html: `
    <p style="font-size: 16px; color: #333;">You requested a password reset. Click the link below to reset your password:</p>
    <a href="${resetLink}" style="display: inline-block; background-color: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Reset Password</a>
    <p style="font-size: 14px; color: #555;">If you didn't request this, please ignore this email.</p>
  `,
    
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Password reset link sent to email" });
  } catch (error) {
    console.error("Error sending reset email:", error);
    res.status(500).json({ error: "Failed to send reset email" });
  }
});

// Route to reset the password
app.post("/api/reset-password", async (req, res) => {
  const { resetToken, email, newPassword } = req.body;

  if (!resetToken || !email || !newPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const dbName = "hospital";
  const db = client.db(dbName);
  const collection = db.collection("staffdetail");

  try {
    const user = await collection.findOne({
      email,
      resetToken,
      resetTokenExpiry: { $gt: Date.now() }, // Check if token is still valid
    });

    if (!user) return res.status(400).json({ error: "Invalid or expired token" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await collection.updateOne(
      { email },
      { $set: { password: hashedPassword, resetToken: null, resetTokenExpiry: null } }
    );

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ error: "Failed to reset password" });
  }
});

// to display the staff details in the doctors list based on their years of experience

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/doctors/:department', async (req, res) => {
  const { department } = req.params;

  try {
    const db = client.db('hospital');
    const collection = db.collection('staffdetail');

    const doctors = await collection
      .find({ department: { $regex: new RegExp(`^${department}$`, 'i') } })
      .toArray();

    const currentDate = new Date();

    const experiencedDoctors = doctors.filter(doctor => {
      const joiningDate = new Date(doctor.dateOfJoining);
      const yearsOfExperience = (currentDate - joiningDate) / (1000 * 3600 * 24 * 365);
      return yearsOfExperience > 5;
    });

    const filteredDoctors = experiencedDoctors.map(doctor => {
      const profilePicturePath = doctor.profilePicturePath || '';
      let profilePicture = '/uploads/default.png'; // Default image fallback

      if (profilePicturePath) {
        // Normalize path to ensure forward slashes and remove duplicate 'uploads'
        profilePicture = `/uploads/${profilePicturePath.replace(/\\/g, '/').replace(/^uploads[\/\\]/, '')}`;
      }

      return {
        firstName: doctor.firstName,
        lastName: doctor.lastName,
        designation: doctor.designation,
        department: doctor.department.toLowerCase(),
        profilePicture, // Corrected and sanitized profile picture path
        yearsOfExperience: Math.floor((currentDate - new Date(doctor.dateOfJoining)) / (1000 * 3600 * 24 * 365)),
      };
    });

    res.json(filteredDoctors);
  } catch (error) {
    console.error('Error fetching doctor data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
