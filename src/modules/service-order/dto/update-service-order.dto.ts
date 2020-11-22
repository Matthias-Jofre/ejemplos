import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceOrderDto } from './create-service-order.dto';

export class UpdateOrderServiceDto extends PartialType(CreateServiceOrderDto) {}