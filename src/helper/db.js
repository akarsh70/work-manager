import mongoose from "mongoose"
import { User } from "../models/user"
export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'work_manager'
        })
        console.log("db connented...")
    } catch (error) {
        console.log("failed to connect with database");
        console.log(error);
    }
}