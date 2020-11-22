import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getOneUserById(id: number): Promise<User> {
    if (id !== undefined) return await this.userRepository.findOne(id);

    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid id!',
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    if ((await this.userRepository.findOne(createUserDto.rut)) === undefined) {
      const user = this.userRepository.create(createUserDto);
      return this.userRepository.save(user);
    }
    throw new HttpException(
      {
        status: HttpStatus.CONFLICT,
        error: 'User already exists!',
      },
      HttpStatus.CONFLICT,
    );
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    if (!updateUserDto.rut)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Rut attribute is required!',
        },
        HttpStatus.BAD_REQUEST,
      );

    const updated = await this.userRepository.update(
      updateUserDto.rut,
      updateUserDto,
    );

    if (updated.affected > 0)
      return await this.userRepository.findOne(updateUserDto.rut);

    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'User not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }

  async deleteUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (user !== undefined) {
      const deleted = await this.userRepository.delete(id);

      if (deleted.affected > 0) return user;
    }
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'User not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
