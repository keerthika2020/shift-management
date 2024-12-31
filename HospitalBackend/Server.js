const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const port = 8081;
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: "GET,POST,PUT,DELETE", // Specify allowed methods
  credentials: true,              // Allow credentials (if needed)
}));

// MongoDB Configuration
const mongoUri = "mongodb+srv://hasikababu01:sEMM55iJgxYQXNoJ@cluster0.1qkd7.mongodb.net/";
const client = new MongoClient(mongoUri);

// Middleware
app.use(bodyParser.json());

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

    // Login successful
    res.status(200).json({
      message: "Login successful",
      role: user.roleOfAccess,
      username: user.username,
      profilePicturePath: user.profilePicturePath,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Failed to login." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
