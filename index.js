/**
 * To configure our entire application
 * index.js -> Router file -> 
 */


const express = require("express")
const router = require("./route")

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true }));


// Router file
app.use(router)

app.listen(5005)
