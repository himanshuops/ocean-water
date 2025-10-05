import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import contectRouter from '../backend/routes/contect.route.js'
const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI

try{
    mongoose.connect(DB_URI)
    console.log("connect to mongodb")
}catch(error){
    console.log(error)
}

// routes
app.use('/', contectRouter)

app.listen(PORT, () => {
    console.log(`Server listen port ${PORT}`)
})
