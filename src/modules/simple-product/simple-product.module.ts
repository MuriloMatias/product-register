import { SimpleProductController } from './controllers/simple-product.controller';
import { SimpleProductRepository } from './repository/simple-product.repository';
import { SimpleProductService } from './service/simple-product.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimpleProduct } from './entities/simple-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SimpleProduct])],
  controllers: [SimpleProductController],
  providers: [SimpleProductService, SimpleProductRepository],
})
export class SimpleProductModule {}
