import* as GETUsers from '../requests/GETUsers.request';
describe('GET users', ()=>{
    it('Listar todos os usuários',()=>{
        GETUsers.allUsers().should((response)=>{
            /*cy.log(response.status)
            cy.log(response.statusText)
            */cy.log(response.body)
            expect(response.status).eq(200);
            expect(response.body).to.be.not.null;
        })
    });
});

describe('GET only user', ()=>{
    it('Listar o primeiro usuário',()=>{
        GETUsers.allUsers().then((respAllUsers)=>{
            cy.log(respAllUsers.body.data[0].id)
            expect(respAllUsers.statusText).to.eq('OK');
        })
    });

    it('Listar o usuário 123', ()=>{
        GETUsers.onlyUser(123).should((response)=>{
            cy.log(response.body.data.name)
            expect(response.body.data.name).to.be.not.null;
        })
    })
});