// mongodbConnect.js
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // Your MongoDB connection string

let client; // Singleton variable to store the MongoDB client

async function connectDB() {
  if (!client) {
    client = new MongoClient(url);
    await client.connect();
  }
  return client;
}

async function getData(collectionName) {
  const dbClient = await connectDB();
  const db = dbClient.db("CUED_Nodejs");
  return db.collection(collectionName);
}

module.exports = getData;
