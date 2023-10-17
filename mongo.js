const { MongoClient } = require("mongodb");
require("dotenv").config();

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function printData(client) {
  search = await client.find();

  console.log(search);
}

async function main() {
  const PORT = process.env.PORT;
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();

    // List all databases
    // await listDatabases(client);

    // Access database
    await printData(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
