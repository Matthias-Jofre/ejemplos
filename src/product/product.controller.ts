import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { createReadStream } from 'fs';

import { CreateProductDTO } from "./dto/product.dto";

import { ProductService } from "./product.service";

@ApiTags('Product')
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}


    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
        //console.log(createProductDTO);
        
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Producto creado',
            product
        })
    }

    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products
        })
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException("error");
        return res.status(HttpStatus.OK).json(product);
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') ProductID){
        const productDeleted = await this.productService.deleteProduct(ProductID);
        if (!productDeleted) throw new NotFoundException('Producto no existe');
        return res.status(HttpStatus.OK).json({
            message: 'producto eliminado',
            productDeleted
        });
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID){
        const updateProduct = await this.productService.updateProduct(productID, createProductDTO);
        if (!updateProduct) throw new NotFoundException('Producto no existe');
        return res.status(HttpStatus.OK).json({
            message: 'actualizado correctamente',
            updateProduct
        });
    }
}
