import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurableProduct } from './entities/configurable-product.entity';
import { ProductVariation } from './dtos/product-variation.dto';
import { ConfigurableProductController } from './controllers/configurable-product.controller';
import { ConfigurableProductService } from './service/configurable-product.service';
import { ConfigurableProductRepository } from './repository/configurable-product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigurableProduct, ProductVariation])],
  controllers: [ConfigurableProductController],
  providers: [ConfigurableProductService, ConfigurableProductRepository],
})
export class ConfigurableProductModule {}
