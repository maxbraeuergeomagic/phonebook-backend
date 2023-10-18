const express = require("express");
const mongo = require("./mongo");
const router = express.Router();
const currentCollection = "phonebook";

router.get("/", async (request, response) => {
  const collection = await mongo.db.collection(currentCollection);
  let numberOfEntries = await collection.countDocuments({});
  response
    .send(
      `<br>
            <p>Phonebook has info for ${numberOfEntries} people</p>
            <p> ${Date()}
        </br>`
    )
    .status(200);
});

module.exports = router;
