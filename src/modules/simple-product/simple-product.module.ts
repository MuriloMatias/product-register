import { SimpleProductController } from './controllers/simple-product.controller';
import { SimpleProductRepository } from './repository/simple-product.repository';
import { SimpleProductService } from './service/simple-product.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [SimpleProductController],
  providers: [SimpleProductService, SimpleProductRepository],
})
export class SimpleProductModule {}
