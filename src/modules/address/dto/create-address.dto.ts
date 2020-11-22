import { MinLength, IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateAddressDto {
  @MinLength(3, {
    message: 'El campo "firstname" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "firstname" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "firstname" no debe estar vacío.' })
  commune!: string;

  @MinLength(3, {
    message: 'El campo "firstname" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "firstname" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "firstname" no debe estar vacío.' })
  street!: string;

  @IsInt({ message: 'El campo "year" ser un número.' })
  @IsNotEmpty({ message: 'El campo "year" no debe estar vacío.' })
  street_number!: number;
}
