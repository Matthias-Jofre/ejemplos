import {
  MinLength,
  IsString,
  IsNotEmpty,
  Length,
  IsNumber,
  Min,
  Max,
  IsInt,
} from 'class-validator';

export class CreateVehicleDto {
  @Length(6, 6, {
    message: 'El campo "patent" debe contener 6 caracteres.',
  })
  @IsString({ message: 'El campo "patent" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "patent" no debe estar vacío.' })
  patent!: string;

  @MinLength(3, {
    message: 'El campo "brand" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "brand" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "brand" no debe estar vacío.' })
  brand!: string;

  @MinLength(3, {
    message: 'El campo "model" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "model" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "model" no debe estar vacío.' })
  model!: string;

  @Max(new Date().getFullYear(), {
    message: `El campo "year" debe ser máximo del año ${new Date().getFullYear()}.`,
  })
  @Min(1800, {
    message: 'El campo "year" debe ser ser máximo del año 1800.',
  })
  @IsInt({ message: 'El campo "year" ser un número.' })
  @IsNotEmpty({ message: 'El campo "year" no debe estar vacío.' })
  year!: number;

  @MinLength(3, {
    message: 'El campo "vin" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "vin" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "vin" no debe estar vacío.' })
  vin!: string;

  @IsInt({ message: 'El campo "mileage" ser un número.' })
  @IsNotEmpty({ message: 'El campo "mileage" no debe estar vacío.' })
  mileage!: number;
}
