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

  async getByName(name: string): Promise<ConfigurableProduct> {
    const result = await this.configurableProductRepository.findOne({
      where: { name: name },
    });
    return result;
  }

  async update(
    configurableProduct: ConfigurableProduct,
  ): Promise<ConfigurableProduct> {
    const result =
      await this.configurableProductRepository.save(configurableProduct);
    return result;
  }
}
