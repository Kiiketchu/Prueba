import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Details } from 'src/entities/details.entity';

@Injectable()
export class DetailsService {
    constructor(
        @InjectRepository(Details) private detailsEntity: Repository<Details>
    ){

    }

   

    findAllDetails(){
        return this.detailsEntity.find({relations:['id_sales']})
    }
}