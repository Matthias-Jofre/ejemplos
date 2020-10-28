import { Product, ProductSchema } from './schema/product.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
