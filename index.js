
const express = require("express")

const app = express()


// Global middleware
// To parse body data which comes from client
// Middleware ->It try to change the request
            // -> some data try to change before send to (response) client 
app.use(express.json());
app.use(express.urlencoded({extended: true }));

// Request -> What client is trying to send
// Response -> What server is trying to send to client
// GET, POST, PUT, PATCH, DELETE
// app.get("/path", (request, response) => {
//     response.send("Hello")
// })

// app.get("/path3", (request, response) => {
//     response.send("Hello2")
// })

// app.get("/path4", (request, response) => {
//     response.send("Hello4")
// })

const contactsList = [
    { name: "contact1", mobile: "1234" },
    { name: "contact2", mobile: "234567" }
]

// TO List down all the contacts
// headers -> holds the information of client or server
// body -> Holds the data of client or server
// All list are reflected
app.get("/contact-list", (request, response) => {
    // To access query params
    const query = request.query
    console.log(query)

    response.send(contactsList)
})

// Example of query path param
// Get one one contact list
app.get("/contact-list/:contactName", (request, response) => {
    // To access query path params
    const param = request.params
    console.log(param.contactName)

    // Javascript. Find the data from a array
    const foundContactDetails = contactsList.find(contact => contact.name === param.contactName)
    console.log(foundContactDetails)

    response.send(foundContactDetails)
})

// Trying to get data from clint
app.post("/add-contact", (request, response) => {
    const contactBody = request.body;

    const toAddContact = contactBody.toAddContact

    // 
    contactsList.push(toAddContact)

    response.send(contactsList)
})

app.listen(5005)
