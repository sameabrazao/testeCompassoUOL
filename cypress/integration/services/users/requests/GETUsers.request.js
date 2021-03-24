//verbo/metodo - endpoint .motivo (request) . extensao
///<reference types='cypress'/>

function allUsers(){
    return cy.request({
        method: 'GET',
        url: 'users',
        failOnStatusCode: false
    })
}
export {allUsers}

function onlyUser(id){
    return cy.request({
        method: 'GET',
        url: 'users/${id}',
        failOnStatusCode: false

    })
}
export {onlyUser}