import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AddressService } from './address.service';
import { Response } from 'express';
import { CreateAddressDto, UpdateAddressDto } from './dto';

@ApiTags('Dirección')
@Controller('address')
export class AddressController {
  constructor(private readonly _address: AddressService) {}

  @ApiOperation({
    summary: 'Se trae todos las direcciones de la base de datos.',
  })
  @ApiOkResponse({ description: 'Salió todo correcto.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Get()
  async getAllAddresses(@Res() response: Response) {
    try {
      const addresses = await this._address.getAllAddresses();

      return response.status(HttpStatus.OK).json({ ok: true, addresses });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @ApiOperation({
    summary: 'Se trae una dirección de la base de datos a través del id.',
  })
  @ApiQuery({
    name: 'id',
    example: 1,
    required: true,
    type: 'number',
    description: 'Id de la dirección.',
  })
  @ApiOkResponse({ description: 'Salió todo correcto.' })
  @ApiNotFoundResponse({ description: 'No se encontró la dirección.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Get('one')
  async getOneAddressById(
    @Res() response: Response,
    @Query('id', new ParseIntPipe()) id: number,
  ) {
    try {
      const address = await this._address.getOneAddressById(id);
      if (address) {
        return response.status(HttpStatus.OK).json({ ok: true, address });
      } else {
        return response
          .status(HttpStatus.NOT_FOUND)
          .json({ ok: false, error: 'Address not found!' });
      }
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @ApiOperation({ summary: 'Crea una dirección en la base de datos.' })
  @ApiCreatedResponse({ description: 'Se creó correctamente.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Post()
  async createAddress(
    @Res() response: Response,
    @Body() createAddressDto: CreateAddressDto,
  ) {
    // try {
    //   const address = await this._address.createAddress(createAddressDto);

    //   return response.status(HttpStatus.CREATED).json({ ok: true, address });
    // } catch (error) {
    //   return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    // }
  }

  @ApiOperation({ summary: 'Actualiza una dirección en la base de datos.' })
  @ApiAcceptedResponse({ description: 'Se actualizó correctamente.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Put()
  async updateAddress(
    @Res() response: Response,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    try {
      const address = await this._address.updateAddress(updateAddressDto);

      return response.status(HttpStatus.ACCEPTED).json({ ok: true, address });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @ApiOperation({
    summary: 'Elimina una dirección en la base de datos a través del id.',
  })
  @ApiQuery({
    name: 'id',
    example: 1,
    required: true,
    type: 'number',
    description: 'Id de la dirección.',
  })
  @ApiOkResponse({ description: 'Salió todo correcto.' })
  @ApiNotFoundResponse({ description: 'No se encontró el usuario.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Delete()
  async deleteAddressById(
    @Res() response: Response,
    @Query('id', new ParseIntPipe()) id: number,
  ) {
    try {
      const address = await this._address.deleteAddressById(id);

      return response.status(HttpStatus.OK).json({ ok: true, address });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }
}
