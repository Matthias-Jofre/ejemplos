import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { RoleType } from '../enum/index';
import { EnumToString } from '@helpers/enumToString.helper';

export class CreateUserDto {
  @Max(99999999, { message: 'El campo "rut" debe ser de máximo 8 caracteres.' })
  @Min(1000000, {
    message: 'El campo "rut" debe ser de al menos 7 caracteres.',
  })
  @IsNumber({}, { message: 'El campo "rut" debe ser número.' })
  @IsNotEmpty({ message: 'El campo "rut" no debe estar vacío.' })
  rut: number;

  @MinLength(3, {
    message: 'El campo "firstname" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "firstname" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "firstname" no debe estar vacío.' })
  firstname: string;

  @MinLength(3, {
    message: 'El campo "lastname" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "lastname" debe ser string.' })
  @IsNotEmpty({ message: 'El campo "lastname" no debe estar vacío.' })
  lastname: string;

  @IsEnum(RoleType, {
    message: `El campo "role" debe ser de tipo: [${EnumToString(RoleType)}].`,
  })
  @IsString({ message: 'El campo "role" debe ser un string.' })
  @IsNotEmpty({ message: 'El campo "role" no debe estar vacío.' })
  @IsOptional()
  role?: string;
}
