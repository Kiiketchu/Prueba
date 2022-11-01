import { Module } from '@nestjs/common';
import {Connection} from './configs/DBConnection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule} from './api/sales/sales.module';
import { UsersModule } from './users/user/user.module';
import { DetailsModule } from './api/details/details.module';

@Module({
  imports: [Connection, UsersModule, SalesModule, DetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
