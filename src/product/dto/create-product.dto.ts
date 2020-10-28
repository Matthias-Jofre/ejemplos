import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @MinLength(3, {
    message: 'El campo "name" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "name" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "name" no debe estar vacío.' })
  readonly name: string;

  @MinLength(3, {
    message: 'El campo "description" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "description" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "description" no debe estar vacío.' })
  readonly description: string;

  @MinLength(3, {
    message: 'El campo "imageUrl" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "imageUrl" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "imageUrl" no debe estar vacío.' })
  readonly imageURL: string;

  @IsNumber({}, { message: 'El campo "price" debe ser número.' })
  @IsNotEmpty({ message: 'El campo "price" no debe estar vacío.' })
  readonly price: number;

  @IsDateString({ message: 'El campo "createAt" debe ser una fecha válida.' })
  @IsNotEmpty({ message: 'El campo "createAt" no debe estar vacío.' })
  @IsOptional()
  readonly createAt?: Date;
}
