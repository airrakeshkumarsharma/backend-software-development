const { contactModel } = require("./model")

/**
 * To handle our logic
 */

/** CRUD
 * create -> add data into the collection
 * find -> Get all the data
 * findOne -> Get only one data
 */

/**
 * await is giving error
 * sync and async
 * 
 */

const addContact = async (request, response) => {
    const contactBody = request.body;
    console.log(contactBody)

    const toAddContact = contactBody.toAddContact

    // This is code of data related -> So, here can implement our database code
    // contactsList.push(toAddContact)
    const dbContactResp = await contactModel.create(toAddContact)

    response.send(dbContactResp)
}

const getContacts = async (request, response) => {
    const dbContactResp = await contactModel.find()
    // To access query params
    response.send(dbContactResp)
}

const getContact = async (request, response) => {
    // To access query path params
    const param = request.params

    // Javascript. Find the data from a array
    // const foundContactDetails = contactsList.find(contact => contact.name === param.contactName)
    // console.log(foundContactDetails)
    const dbContactResp  = await contactModel.findOne({name: param.contactName})

    response.send(dbContactResp)
}

module.exports = {
    addContact,
    getContacts,
    getContact
}