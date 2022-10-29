/**
 * To configure our entire application
 * index.js -> Router file -> 
 */


const express = require("express")
const mongoose = require("mongoose")

const router = require("./route")

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true }));

console.clear()
const dbURI = "mongodb+srv://<username>:<password>@cluster0.ot7lvvw.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI).then(() => {
    console.log("Database is connected!")
}).catch(error => console.error(error))


// Router file
app.use(router)

app.listen(5005)
