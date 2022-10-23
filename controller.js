/**
 * To handle our logic
 */

const contactsList = [
    { name: "contact1", mobile: "1234" },
    { name: "contact2", mobile: "234567" }
]

const addContact = (request, response) => {
    const contactBody = request.body;
    console.log(contactBody)

    const toAddContact = contactBody.toAddContact

    contactsList.push(toAddContact)

    response.send(contactsList)
}

const getContacts = (request, response) => {
    // To access query params
    response.send(contactsList)
}

const getContact = (request, response) => {
    // To access query path params
    const param = request.params
    console.log(param.contactName)

    // Javascript. Find the data from a array
    const foundContactDetails = contactsList.find(contact => contact.name === param.contactName)
    console.log(foundContactDetails)

    response.send(foundContactDetails)
}

module.exports = {
    addContact,
    getContacts,
    getContact
}