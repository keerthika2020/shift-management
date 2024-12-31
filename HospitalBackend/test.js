const { MongoClient } = require('mongodb');

// Replace <username>, <password>, <clustername>, and <dbname>
const uri = "mongodb+srv://hasikababu01:sEMM55iJgxYQXNoJ@cluster0.1qkd7.mongodb.net/hospital?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function testConnection() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
    } finally {
        await client.close();
    }
}

testConnection();
