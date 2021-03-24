import* as DELETEUsers from '../requests/DELETEUsers.request'
import* as GETUsers from '../requests/GETUsers.request'
import* as POSTUsers from '../requests/POSTUsers.request'

describe('Delete user', ()=>{
    
    it('Deletar usuário',()=>{
       
        //DELETEUsers.deleteUsers(123).should((response)=>{
            //GETUsers.allUsers().then((respAllUsers)=>{
                //DELETEUsers.deleteUsers(respAllUsers.body.data[0].id).should((resDeleteUser)=>{  
                DELETEUsers.deleteUsers(123).should((resDeleteUser)=>{
                    expect(resDeleteUser.status).to.eq(200);
                    expect(resDeleteUser.statusText).to.eq('OK');
            //})
        })

    });

    it('Criar e excluir usuário', ()=>{
        POSTUsers.addUser().then((respUsers)=>{
            DELETEUsers.deleteUsers(respUsers.body.data.id).should((resDeleteUser)=>{
                expect(resDeleteUser.status).to.eq(200);
                expect(resDeleteUser.statusText).to.eq('OK');
            })
        })
    });

});