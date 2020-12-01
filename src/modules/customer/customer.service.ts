import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { Customer } from './entity/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async getAllCustomers(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }

  async getOneCustomerById(id: number): Promise<Customer> {
    if (id !== undefined)
      return await this.customerRepository.findOne({ rut: id });

    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid id!',
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  async createCustomer(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    if (
      (await this.customerRepository.findOne(createCustomerDto.rut)) ===
      undefined
    ) {
      const customer = this.customerRepository.create(createCustomerDto);
      return this.customerRepository.save(customer);
    }
    throw new HttpException(
      {
        status: HttpStatus.CONFLICT,
        error: 'Customer already exists!',
      },
      HttpStatus.CONFLICT,
    );
  }

  async updateCustomer(
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    if (!updateCustomerDto.rut)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Rut attribute is required!',
        },
        HttpStatus.BAD_REQUEST,
      );

    const updated = await this.customerRepository.update(
      updateCustomerDto.rut,
      updateCustomerDto,
    );

    if (updated.affected > 0)
      return await this.customerRepository.findOne(updateCustomerDto.rut);

    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Customer not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }

  async deleteCustomerById(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne(id);
    if (customer !== undefined) {
      const deleted = await this.customerRepository.delete(id);

      if (deleted.affected > 0) return customer;
    }
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Customer not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }zzz
}
