require("dotenv").config();
const mongo = require("./db/mongo");
const currentCollection = "phonebook";
const express = require("express");

const app = express();
const boot = async () => {
  await mongo.main();
  const collection = mongo.db.collection(currentCollection);
  // get all results
  const results = await collection
    .find({}, { projection: { _id: 0 } })
    .toArray();
  console.log(results);
  // Add a Student
  collection.insertOne({ name: "Test", number: "0800", id: 10 });
  app.listen(process.env.BACKEND_PORT);
};

boot();
// let result = collection.find({}, { projection: { _id: 0 } }).toArray();

// console.log(result);
