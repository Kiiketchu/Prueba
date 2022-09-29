import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { usermodel } from './Models/user.model';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @Post()
    Create(@Body() params: usermodel):void{
        this.userService.create(params)
        
    }
    @Get('/all')
    getUsers(): usermodel[]{
        return this.userService.getAll()
    }

    @Get('/:email')
    getUser(@Param('email') param): usermodel{
        return this.validateQuest(this.userService.getByEmail(param))
    }

    validateQuest(request: usermodel){
        if (request != undefined) {
            return request;
        } else {
            console.error('El Usuario insertado no existe');
            
        } 
    }
}
