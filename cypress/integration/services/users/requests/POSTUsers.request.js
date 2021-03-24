///<reference types="cypress"/>

const payloadAddUser = require('../payloads/add-user.json')

function addUser(){
    return cy.request({
        method: 'POST',
        url: 'users',
        failOnStatusCode: false,
        body: payloadAddUser
    })
}
export{addUser};