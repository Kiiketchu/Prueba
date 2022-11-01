import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sales } from '../../entities/sales.entity';
import { SalesController } from './sales.controller';
import { SalesServiceService } from './../../services/sales-service/sales-service.service'
import { Details } from 'src/entities/details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sales, Details])],
  providers: [SalesServiceService],
  controllers: [SalesController],
  exports: [TypeOrmModule]
})
export class SalesModule {}