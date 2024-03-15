const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'; // Your MongoDB connection string
const dbName = 'CUED_Nodejs'; // Your MongoDB database name
const collectionName = 'curd'; // Your MongoDB collection name

mongoose.connect(`${url}/${dbName}`)

const itemSchema = new mongoose.Schema({
    id:{type: String, require: true}
})

const itemModal = mongoose.model(collectionName,itemSchema)

module.exports = itemModal


// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017'; // Your MongoDB connection string
// const dbName = 'CUED_Nodejs'; // Your MongoDB database name
// const collectionName = 'curd'; // Your MongoDB collection name
// const client = new MongoClient(url)

// async function getData() {
//     let result = await client.connect()
//     let db = result.db(dbName)
//     return db.collection(collectionName)
// }

// module.exports = getData