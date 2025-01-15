import express from "express"
const app=express()

import cors from "cors"

import { config } from "dotenv"

import { route } from "./routers/routerOne.js"

app.use(express.json())
app.use(cors())
config()
import "./config/config.js"
app.use("/people",route)
app.listen(3030,()=>{
    console.log("bu app 3030 portunda dinlenilir")
})