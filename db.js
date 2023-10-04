const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config()

const mongoURI =
  `mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@ac-2wghbzi-shard-00-00.zhdptzp.mongodb.net:27017,ac-2wghbzi-shard-00-01.zhdptzp.mongodb.net:27017,ac-2wghbzi-shard-00-02.zhdptzp.mongodb.net:27017/resmenu?ssl=true&replicaSet=atlas-mibdlr-shard-0&authSource=admin&retryWrites=true&w=majority`;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    // Specify the database name and collection name
    const db = mongoose.connection.db;
    const collection = db.collection("menus");

    // Retrieve data from the "appetizer" collection
    const data = await collection.find({}).toArray();
    global.menu = data;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongoDB;
