require("dotenv").config();
const { MongoClient } = require("mongodb");
const mongodbConfig = require("./settings.json").mongodbConfig;

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  throw new Error("❌ MongoDB URI is missing. Set it in your .env file.");
}

let _connection;
let _db;

const createConnection = async () => {
  try {
    if (!_connection) {
      _connection = await MongoClient.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      _db = _connection.db(mongodbConfig.database);
      console.log("✅ MongoDB Atlas Connected Successfully!");
    }
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    throw err;
  }
  return _db;
};

const closeConnection = async () => {
  if (_connection) {
    try {
      await _connection.close();
      _connection = null;
      _db = null;
      console.log("✅ MongoDB Connection Closed.");
    } catch (err) {
      console.error("❌ Error Closing MongoDB Connection:", err);
      throw err;
    }
  }
};

const getDB = async () => {
  if (!_db) _db = await createConnection();
  return _db;
};

module.exports = {
  createConnection,
  closeConnection,
  getDB,
};
