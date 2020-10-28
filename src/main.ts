import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ProductModule } from './product/product.module';

(async function bootstrap() {
  const app = await NestFactory.create(ProductModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
})();
