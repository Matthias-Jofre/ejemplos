import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@modules/user/user.module';
import { CostumerModule } from './customer/customer.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AddressModule } from './address/address.module';
import { ServiceOrderModule } from './service-order/service-order.module';
import { StatusRecordModule } from './status-record/status-record.module';
import { TechnicalEvaluationModule } from './technical-evaluation/technical-evaluation.module';
import typeormConfig from '@config/orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UserModule, CostumerModule, VehicleModule, AddressModule, ServiceOrderModule, StatusRecordModule, TechnicalEvaluationModule],
})
export class AppModule {}
