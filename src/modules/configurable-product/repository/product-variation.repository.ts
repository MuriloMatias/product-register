import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ProductVariation } from '../entities/product-variation.entity';

@Injectable()
export class ProductVariationRepository {
  constructor(
    @InjectRepository(ProductVariation)
    private readonly productVariationRepository: Repository<ProductVariation>,
  ) {}

  async create(productVariation: ProductVariation): Promise<ProductVariation> {
    const result = this.productVariationRepository.save(productVariation);
    return result;
  }

  async getByConfigurableProductId(id: string): Promise<ProductVariation[]> {
    const result = this.productVariationRepository.find({
      where: { configurableProduct: { id: id } },
    });
    return result;
  }
}
