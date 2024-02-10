import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MongoURI = process.env.MONGO_URI;

const connectToMongoose = async () => {
    try {
        await mongoose.connect(MongoURI, {
            dbName: 'MedX',
        });
        console.log("Mongodb Connected Successfully!");
    } catch (error) {
        console.error(error);
    }
};

export default connectToMongoose;
