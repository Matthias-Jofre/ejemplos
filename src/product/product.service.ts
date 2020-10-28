import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schema';
import { CreateProductDto, UpdateProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async getOneProduct(id: string): Promise<Product> {
    return await this.productModel.findById(id);
  }

  async createOneProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return await newProduct.save();
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    });
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
