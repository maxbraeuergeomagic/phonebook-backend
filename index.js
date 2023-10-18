require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const mongo = require("./db/mongo");
const persons = require("./db/persons");
const info = require("./db/info");
const cors = require("cors");

app.use(cors());
app.use(express.json());
morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use(express.static("build"));

app.use("/persons", persons);
app.use("/info", info);

const boot = async () => {
  await mongo.main();
  const PORT = process.env.BACKEND_PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

boot();
