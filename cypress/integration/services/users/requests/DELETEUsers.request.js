///<reference types="cypress"/>

function deleteUsers(idUser){
    return cy.request({
        method: 'DELETE',
        url:'users/${idUser}',
        failOnStatusCode: false
    })
}

export {deleteUsers};