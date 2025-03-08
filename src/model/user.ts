/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document { //custom datatype
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export interface User extends Document { //custom datatype
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isUserVerified:boolean,
    isAcceptingMessage: boolean;
    messages: Message[];
}
const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        require: [true, "Username is require"],
        unique: true,

    },
    email: {
        type: String,
        require: [true, "Email is require"],
        unique: true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,""]
    },
    password: {
        type: String,
        require: [true, "Password is require"],
    },
    verifyCode: {
        type: String,
        require: [true, "Verify code is require"],
    },
    verifyCodeExpiry: {
        type: Date,
        require: [true, "Verify code Expiry is require"],
    },
    isUserVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    messages: {
        type: [MessageSchema],
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (
    mongoose.model<User>('User', UserSchema)
)
export default UserModel;