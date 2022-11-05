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

const deleteContact =  async (request, response) => {
    const param = request.params

    const dbResponse = await contactModel.deleteOne({name: param.contactName})

    console.log(dbResponse)

    response.send({message: "data Deleted"})
}

const updateContact = async (request, response) => {
    // Whose contactName is Contact1 update his mobile
    // name & new Mobile number

    const param = request.params
    const body = request.body

    const condition  = { name: param.contactName}
    const payload = body


    const dbResponse = await contactModel.updateOne(condition, payload)

    response.send({message: "data is updated!"})
}

module.exports = {
    addContact,
    getContacts,
    getContact,
    deleteContact,
    updateContact
}