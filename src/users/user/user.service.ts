import { Inject, Injectable } from '@nestjs/common';
import {User as userEntity} from '../../entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { usermodel } from './Models/user.model';

@Injectable()
export class UserService {
    constructor(        
        @InjectRepository(userEntity)
        private userEntity : Repository<userEntity>){

    }
    private readonly Users: usermodel[] = []

    async create(user:usermodel){
        //this.Users.push(user)
        return await this.userEntity.insert(user);
    }

    getAll(): usermodel[]{
        return this.Users;
    }

    getByEmail(email: string): usermodel{
        return this.Users.find( (user) => user.email === email )
    }

    updateUserbyID( id:number, user:usermodel ):boolean{
        let user_index = this.Users.findIndex( (user) => user.id === id)
        if(this.userExists(id)){
            //Mantener los datos que no se van a actualizar
           const new_user =  Object.assign(this.Users[user_index], user)
           this.Users[user_index] = new_user
            return true
        }
        return false
    }

    //Esta función verifica si un usuario existe o no.
    //@param id del usuario que queremos verificar si existe
    //@returns true si el usuario existe o false si no existe

    userExists(id : number) : boolean{
        const index = this.Users.findIndex(usuario => usuario.id === id)
        return index !== -1
    }
       
}
