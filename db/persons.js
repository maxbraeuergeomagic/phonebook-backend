const express = require("express");
const mongo = require("./mongo");
const router = express.Router();
const currentCollection = "phonebook";

router.get("/", async (request, response) => {
  const collection = mongo.db.collection(currentCollection);

  let results = await collection.find({}, { projection: { _id: 0 } }).toArray();

  response.send(results).status(200);
});

module.exports = router;

// let persons = [
//   {
//     id: 1,
//     name: "Arto Hellas",
//     number: "040-123456",
//   },
//   {
//     id: 2,
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//   },
//   {
//     id: 3,
//     name: "Dan Abramov",
//     number: "12-43-234345",
//   },
//   {
//     id: 4,
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//   },
// ];
// app.get("/", (request, response) => {
//   response.send("<h1>Hello World!</h1>");
// });

// app.get("/api/persons", (request, response) => {
//   response.json(persons);
// });
// app.get("/info", (request, response) => {
//   response.send(
//     `<br>
//        <p>Phonebook has info for ${persons.length} people</p>
//        <p> ${Date()}
//     </br>`
//   );
// });
// app.get("/api/persons/:id", (request, response) => {
//   const id = Number(request.params.id);
//   const person = persons.find((note) => note.id === id);
//   if (person) {
//     response.json(person);
//   } else {
//     response.status(404).end();
//   }
// });
// // //Not working correctly
// // app.put("/api/persons/:id", (request, response) => {
// //   const id = Number(request.params.id);

// //   const updatedPerson = {
// //     name: request.body.name,
// //     number: request.body.number,
// //     id: id,
// //   };
// //   console.log(updatedPerson);
// //   persons[id] = updatedPerson;
// //   response.json(updatedPerson);
// //   //  response.status(204).end();
// // });
// app.delete("/api/persons/:id", (request, response) => {
//   const id = Number(request.params.id);
//   persons = persons.filter((person) => person.id !== id);
//   response.status(204).end();
// });
// app.post("/api/persons", (request, response) => {
//   const person = request.body;
//   if (!person.name || !person.number) {
//     return response.status(400).json({ error: "content missing" });
//   }
//   if (persons.findIndex((entry) => entry.name == person.name) !== -1) {
//     return response.status(400).json({ error: "contact already existing" });
//   }
//   person.id = Math.floor(Math.random() * 1000);
//   persons = persons.concat(person);
//   response.json(person);
// });
