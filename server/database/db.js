import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://sahilmansuri9993:7dh6VgG4U7ODKU02@ac-mdsiwte-shard-00-00.7nzxxaq.mongodb.net:27017,ac-mdsiwte-shard-00-01.7nzxxaq.mongodb.net:27017,ac-mdsiwte-shard-00-02.7nzxxaq.mongodb.net:27017/?ssl=true&replicaSet=atlas-8qnkw4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
