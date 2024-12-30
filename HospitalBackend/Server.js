const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 8081;

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
      return res.status(400).json({ error: `Username '${userDetails.username}' already exists. `});
    }

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

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});