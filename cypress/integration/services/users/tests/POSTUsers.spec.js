import* as POSTUsers from '../requests/POSTUsers.request'

describe('POST Users', () =>{
    it('Adicionar novo usuário', ()=>{
        POSTUsers.addUser().should((response)=>{
            expect(response.status).to.eq(200);
            expect(response.statusText).to.eq('OK');
        });
    });

});