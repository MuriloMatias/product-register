import { InjectRepository } from '@nestjs/typeorm';
import { ConfigurableProduct } from '../entities/configurable-product.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurableProductRepository {
  constructor(
    @InjectRepository(ConfigurableProduct)
    private readonly configurableProductRepository: Repository<ConfigurableProduct>,
  ) {}

  async create(
    configurableProduct: ConfigurableProduct,
  ): Promise<ConfigurableProduct> {
    console.log(configurableProduct);
    const result = this.configurableProductRepository.save(configurableProduct);
    return result;
  }

  async getById(id: string): Promise<ConfigurableProduct> {
    const result = await this.configurableProductRepository.findOne({
      where: { id },
    });
    return result;
  }

  async getAll(): Promise<ConfigurableProduct[]> {
    const result = await this.configurableProductRepository.find();
    return result;
  }
}
