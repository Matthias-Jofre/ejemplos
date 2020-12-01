import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../customer/dto';
import { Customer } from '../customer/entity/customer.entity';
import { CreateAddressDto, UpdateAddressDto } from './dto';
import { Address } from './entity/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>, 
  ) {}

  async getAllAddresses(): Promise<Address[]> {
    return await this.addressRepository.find();
  }

  async getOneAddressById(id: number): Promise<Address> {
    if (id !== undefined) return await this.addressRepository.findOne({ id });

    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid id!',
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  async createAddress(createAddressDto: CreateAddressDto, customer: Customer): Promise<Address> {
    const address = this.addressRepository.create({...createAddressDto, customer});
    return this.addressRepository.save(address);
  }

  async updateAddress(updateAddressDto: UpdateAddressDto): Promise<Address> {
    if (!updateAddressDto.id)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'ID attribute is required!',
        },
        HttpStatus.BAD_REQUEST,
      );

    const updated = await this.addressRepository.update(
      updateAddressDto.id,
      updateAddressDto,
    );

    if (updated.affected > 0)
      return await this.addressRepository.findOne(updateAddressDto.id);

    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Address not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }

  async deleteAddressById(id: number): Promise<Address> {
    const address = await this.addressRepository.findOne(id);
    if (address !== undefined) {
      const deleted = await this.addressRepository.delete(id);

      if (deleted.affected > 0) return address;
    }
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Address not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
