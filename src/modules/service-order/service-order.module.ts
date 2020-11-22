import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { ServiceOrder } from './entity/service-order.entity';
import { ServiceOrderController } from './service-order.controller';
import { ServiceOrderService } from './service-order.service';


@Module({
  controllers: [ServiceOrderController],
  providers: [ServiceOrderService],
  imports: [TypeOrmModule.forFeature([ServiceOrder])]
})
export class ServiceOrderModule {}
