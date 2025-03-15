/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}
const connection: ConnectionObject = {
}

export async function dbConnect(): Promise<void>{
    if (connection.isConnected) {
        console.log("Already connected to the database");
        return; // Exit if already connected
    }

    try {
        const db = await mongoose.connect(process.env.MONGODBURI || " ");
        console.log("Connected to database", db);
        // console.log("Connection URI:", process.env.MONGODBURI); // Log the connection URI
        connection.isConnected = db.connections[0].readyState;
        // console.log("Connection state:", connection.isConnected); // Log the connection state
    } catch (error) {
        console.error("Database Connection Failed", error); // Log the error
    }
}
