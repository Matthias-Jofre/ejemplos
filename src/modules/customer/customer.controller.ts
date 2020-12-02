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
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiQuery,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiAcceptedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { Response } from 'express';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { AddressService } from '../address/address.service';
import { CreateAddressDto } from '../address/dto';

@ApiTags('Cliente')
@Controller('costumer')
export class CustomerController {
  constructor(private readonly _customer: CustomerService, private readonly _address: AddressService) {}

  @ApiOperation({ summary: 'Se trae todos los clientes de la base de datos.' })
  @ApiOkResponse({ description: 'Salió todo correcto.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Get()
  async getAllCustomers(@Res() response: Response) {
    try {
      const customers = await this._customer.getAllCustomers();

      return response.status(HttpStatus.OK).json({ ok: true, customers });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @ApiOperation({
    summary: 'Se trae un cliente de la base de datos a través del id o rut.',
  })
  @ApiQuery({
    name: 'id',
    example: 12345678,
    required: true,
    type: 'number',
    description: 'Rut del cliente sin putos ni guión ni dígito verificador.',
  })
  @ApiOkResponse({ description: 'Salió todo correcto.' })
  @ApiNotFoundResponse({ description: 'No se encontró el cliente.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Get('one')
  async getOneCustomerById(
    @Res() response: Response,
    @Query('id', new ParseIntPipe()) id: number,
  ) {
    try {
      const customer = await this._customer.getOneCustomerById(id);
      if (customer) {
        return response.status(HttpStatus.OK).json({ ok: true, customer });
      } else {
        return response
          .status(HttpStatus.NOT_FOUND)
          .json({ ok: false, error: 'Customer not found!' });
      }
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @ApiOperation({ summary: 'Crea un cliente en la base de datos.' })
  @ApiCreatedResponse({ description: 'Se creó correctamente.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Post()
  async createCustomer(
    @Res() response: Response,
    @Body() createDto: {customer: CreateCustomerDto, address: CreateAddressDto} 
  ) {
    try {
      const customer = await this._customer.createCustomer(createDto.customer);
      const address = await this._address.createAddress(createDto.address, customer);
      return response.status(HttpStatus.CREATED).json({ ok: true, customer, address});
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @ApiOperation({ summary: 'Actualiza un cliente en la base de datos.' })
  @ApiAcceptedResponse({ description: 'Se actualizó correctamente.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Put()
  async updateCustomer(
    @Res() response: Response,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    try {
      const customer = await this._customer.updateCustomer(updateCustomerDto);

      return response.status(HttpStatus.ACCEPTED).json({ ok: true, customer });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @ApiOperation({
    summary: 'Elimina un cliente en la base de datos a través del id o rut.',
  })
  @ApiQuery({
    name: 'id',
    example: 12345678,
    required: true,
    type: 'number',
    description: 'Rut del cliente sin putos ni guión ni dígito verificador.',
  })
  @ApiOkResponse({ description: 'Salió todo correcto.' })
  @ApiNotFoundResponse({ description: 'No se encontró el cliente.' })
  @ApiBadRequestResponse({ description: 'Ocurrió un error inesperado.' })
  @Delete()
  async deleteCustomerById(
    @Res() response: Response,
    @Query('id', new ParseIntPipe()) id: number,
  ) {
    try {
      const customer = await this._customer.deleteCustomerById(id);

      return response.status(HttpStatus.OK).json({ ok: true, customer });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }
}
