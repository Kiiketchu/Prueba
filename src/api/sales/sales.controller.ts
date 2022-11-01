import { Controller, Post, Body } from '@nestjs/common';
import { SalesServiceService } from 'src/services/sales-service/sales-service.service';
import { ISales } from 'src/users/user/Models/Sales';

@Controller('sales')
export class SalesController {
    constructor(private salesService : SalesServiceService){}

    @Post()
    create(@Body()params: ISales){
        try {
            this.salesService.create(params)
        } catch (error) {
            console.log(error)
        }
    }

}
