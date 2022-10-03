import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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
    getUser(@Param('email') param): usermodel | string{
        const user = this.userService.getByEmail(param)
        return user ?? "El usuario no exsite"
    }

    @Put('/update/:id')
    updateUser (@Body() user:usermodel, @Param('id') id){
        return this.userService.updateUserbyID(Number(id),user)
    }
}
