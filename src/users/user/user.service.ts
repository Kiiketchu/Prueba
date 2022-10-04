import { Injectable } from '@nestjs/common';
import { usermodel } from './Models/user.model';

@Injectable()
export class UserService {
    private readonly Users: usermodel[] = []

    create(user:usermodel){
        this.Users.push(user)
    }

    getAll(): usermodel[]{
        return this.Users;
    }

    getByEmail(email: string): usermodel{
        return this.Users.find( (user) => user.email === email )
    }
    updateUserbyID( id:number, user:usermodel ):boolean{
        let user_index = this.Users.findIndex( (user) => user.id === id)
        const olduser = this.Users[user_index]

        if(user_index !== -1){
            //Mantener los datos que no se van a actualizar
           const new_user =  Object.assign(this.Users[user_index], user)
           this.Users[user_index] = new_user
            return true
        }
        return false
    }
        //Código anterior para asignación de variables
        
        //checkOldUser(olduser:usermodel,user_index:number){
        //  if (this.Users[user_index].id === undefined) {
        //    this.Users[user_index].id = olduser.id}
        //   if (this.Users[user_index].name === undefined) {
        //  this.Users[user_index].name = olduser.name}
        
        //  if (this.Users[user_index].email === undefined) {
        //    this.Users[user_index].email = olduser.email}
        
        // if (this.Users[user_index].cel === undefined) {
        // this.Users[user_index].cel = olduser.cel}

}
