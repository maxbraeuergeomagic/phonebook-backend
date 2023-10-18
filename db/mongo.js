const { MongoClient } = require("mongodb");
class Mongo {
  constructor() {
    this.client = new MongoClient(process.env.MONGODB_URL);
  }

  async main() {
    await this.client.connect();
    console.log("Connected to MongoDB");
    this.db = this.client.db(process.env.DB_NAME);
  }
}

module.exports = new Mongo();
