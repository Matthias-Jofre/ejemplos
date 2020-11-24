import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto, UpdateUserDto } from './dto';
import { Method } from './enum/index';

@Controller('user')
export class UserController {
  constructor(private readonly _user: UserService) {}

  @Get()
  async getAllUsers(@Res() response: Response) {
    try {
      const users = await this._user.getAllUsers();
        return response.status(HttpStatus.OK).json({ ok: true, users });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @Get('one')
  async getOneUserById(@Res() response: Response, @Query('id') id: number,) {
    try {
      const user = await this._user.getOneUserById(id);
      if (user) {
          return response.status(HttpStatus.OK).json({ ok: true, user });
      } else {
        return response
          .status(HttpStatus.NOT_FOUND)
          .json({ ok: false, error: 'User not found!' });
      }
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @Post()
  async createUser(
    @Res() response: Response,
    @Body() createUserDto: CreateUserDto,
    @Query('view') view: string,
  ) {
    try {
      const user = await this._user.createUser(createUserDto);
      if (view === 'on') {
        return response
          .status(HttpStatus.OK)
          .render('get-one-user', { ok: true, user, operation: Method.CREATE });
      } else {
        return response.status(HttpStatus.OK).json({ ok: true, user });
      }
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @Put()
  async updateUser(
    @Res() response: Response,
    @Body() updateUserDto: UpdateUserDto,
    @Query('view') view: string,
  ) {
    try {
      const user = await this._user.updateUser(updateUserDto);
      if (view === 'on') {
        return response
          .status(HttpStatus.OK)
          .render('get-one-user', { ok: true, user, operation: Method.UPDATE });
      } else {
        return response.status(HttpStatus.OK).json({ ok: true, user });
      }
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @Delete()
  async deleteUserById(
    @Res() response: Response,
    @Query() queries: { id: number; view?: string },
  ) {
    try {
      const user = await this._user.deleteUserById(queries.id);
      if (queries.view === 'on') {
        return response
          .status(HttpStatus.OK)
          .render('get-one-user', { ok: true, user, operation: Method.DELETE });
      } else {
        return response.status(HttpStatus.OK).json({ ok: true, user });
      }
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }
  
}
