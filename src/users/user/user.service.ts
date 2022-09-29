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
    }


