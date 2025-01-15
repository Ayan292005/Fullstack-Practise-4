import { Schema,model } from "mongoose";

let Model1= new Schema({
    image:String,
    name:String,
    description:String
})

export let ProductModel= model("people",Model1)