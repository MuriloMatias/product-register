import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurableProduct } from './entities/configurable-product.entity';
import { ConfigurableProductController } from './controllers/configurable-product.controller';
import { ConfigurableProductService } from './service/configurable-product.service';
import { ConfigurableProductRepository } from './repository/configurable-product.repository';
import { ProductVariationRepository } from './repository/product-variation.repository';
import { ProductVariation } from './entities/product-variation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigurableProduct, ProductVariation])],
  controllers: [ConfigurableProductController],
  providers: [
    ConfigurableProductService,
    ConfigurableProductRepository,
    ProductVariationRepository,
  ],
})
export class ConfigurableProductModule {}
