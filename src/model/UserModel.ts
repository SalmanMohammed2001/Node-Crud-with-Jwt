import mongoose, {Document,Schema,model} from "mongoose";
import *  as SchemaType from "../types/SchemaTypes";


const UserModel=new mongoose.Schema<SchemaType.IUser>({
    fullName:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    activeState:{type:Boolean,require:true}
})

const UserMode=mongoose.model('user',UserModel);
export default UserModel;