import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DigitalProduct } from './entities/digital-product.entity';
import { DigitalProductController } from './controllers/digital-product.controller';
import { DigitalProductService } from './service/digital-product.service';
import { DigitalProductRepository } from './repository/digital-product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DigitalProduct])],
  controllers: [DigitalProductController],
  providers: [DigitalProductService, DigitalProductRepository],
})
export class DigitalProductModule {}
