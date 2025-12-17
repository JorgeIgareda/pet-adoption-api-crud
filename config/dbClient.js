import 'dotenv/config';
import { MongoClient } from "mongodb";

class dbClient {
  constructor() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?appName=adoption`;
    this.client = new MongoClient(queryString);
    this.connect();
  }

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db('adoption');
      console.log("Connected to database");
    } catch (error) {
      console.log("Error connecting to database:", error);
    }
  }
}

export default new dbClient;