import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
  @Max(99999999, { message: 'El campo "rut" debe ser de máximo 8 caracteres.' })
  @Min(1000000, {
    message: 'El campo "rut" debe ser de al menos 7 caracteres.',
  })
  @IsNumber({}, { message: 'El campo "rut" debe ser número.' })
  @IsNotEmpty({ message: 'El campo "rut" no debe estar vacío.' })
  rut!: number;

  @MinLength(3, {
    message: 'El campo "firstname" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "firstname" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "firstname" no debe estar vacío.' })
  firstname!: string;

  @MinLength(3, {
    message: 'El campo "lastname" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "lastname" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "lastname" no debe estar vacío.' })
  lastname!: string;

  @IsEmail({}, { message: 'El campo "email" debe ser un email.' })
  @IsString({ message: 'El campo "email" debe ser un string.' })
  @IsNotEmpty({ message: 'El campo "email" no debe estar vacío.' })
  email!: string;

  @Max(99999999, {
    message: 'El campo "phonenumber" debe ser de máximo 8 caracteres.',
  })
  @Min(10000000, {
    message: 'El campo "phonenumber" debe ser de al menos 8 caracteres.',
  })
  @IsNumber({}, { message: 'El campo "phonenumber" debe ser número.' })
  @IsNotEmpty({ message: 'El campo "phonenumber" no debe estar vacío.' })
  @IsOptional()
  phonenumber?: number;
}
