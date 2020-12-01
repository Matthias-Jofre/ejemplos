import { ApiProperty } from '@nestjs/swagger';
import {
  MinLength,
  IsString,
  IsNotEmpty,
  IsInt,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'El campo "rut" debe ser número.' })
  @IsNotEmpty({ message: 'El campo "rut" no debe estar vacío.' })
  @IsOptional()
  id?: number;

  @ApiProperty({ example: 'Santiago Centro' })
  @MinLength(3, {
    message: 'El campo "commune" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "commune" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "commune" no debe estar vacío.' })
  commune!: string;

  @ApiProperty({ example: 'Moneda' })
  @MinLength(3, {
    message: 'El campo "street" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "street" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "street" no debe estar vacío.' })
  street!: string;

  @ApiProperty({ example: 1234 })
  @IsInt({ message: 'El campo "streetNumber" ser un número.' })
  @IsNotEmpty({ message: 'El campo "streetNumber" no debe estar vacío.' })
  street_number!: number;
}
