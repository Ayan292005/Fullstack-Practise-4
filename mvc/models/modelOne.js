import { Schema,model } from "mongoose";

let Model1= new Schema({
    name:String,
    description:String
})

export let ProductModel= model("people",Model1)