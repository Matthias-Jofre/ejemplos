import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto';

@Controller('product')
export class ProductController {
  constructor(private readonly _product: ProductService) {}

  @Get()
  async getAllProducts(@Res() response: Response) {
    try {
      const products = await this._product.getAllProducts();
      if (!products) throw new BadRequestException();
      return response.status(HttpStatus.OK).json({ ok: true, products });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @Get(':id')
  async getOneProduct(@Res() response: Response, @Param('id') id: string) {
    try {
      const product = await this._product.getOneProduct(id);
      if (!product) throw new BadRequestException();
      return response.status(HttpStatus.OK).json({ ok: true, product });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @Post()
  async createOneProduct(
    @Res() response: Response,
    @Body() createProductDto: CreateProductDto,
  ) {
    try {
      const product = await this._product.createOneProduct(createProductDto);
      if (!product) throw new BadRequestException();
      return response.status(HttpStatus.OK).json({ ok: true, product });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @Put(':id')
  async updateProduct(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const product = await this._product.updateProduct(id, updateProductDto);
      if (!product) throw new BadRequestException();
      return response.status(HttpStatus.OK).json({ ok: true, product });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @Delete(':id')
  async deleteProduct(@Res() response: Response, @Param('id') id: string) {
    try {
      const product = await this._product.deleteProduct(id);
      if (!product) throw new BadRequestException();
      return response.status(HttpStatus.OK).json({ ok: true, product });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }
}
