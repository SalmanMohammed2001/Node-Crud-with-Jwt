
import mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    fullName:string,
    email:string,
    password:string,
    activeState:boolean
}