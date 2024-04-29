import { InjectRepository } from '@nestjs/typeorm';
import { SimpleProduct } from '../entities/simple-product.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SimpleProductRepository {
  constructor(
    @InjectRepository(SimpleProduct)
    private readonly simpleProductRepository: Repository<SimpleProduct>,
  ) {}

  async create(simpleProduct: SimpleProduct): Promise<SimpleProduct> {
    const result = await this.simpleProductRepository.save(simpleProduct);
    return result;
  }

  async getById(id: string): Promise<SimpleProduct> {
    const result = await this.simpleProductRepository.findOne({
      where: { id: id },
    });
    return result;
  }

  async getAll(): Promise<SimpleProduct[]> {
    const result = await this.simpleProductRepository.find();
    return result;
  }

  async getByName(name: string): Promise<SimpleProduct> {
    const result = await this.simpleProductRepository.findOne({
      where: { name: name },
    });
    return result;
  }

  async update(simpleProduct: SimpleProduct): Promise<SimpleProduct> {
    const result = await this.simpleProductRepository.save(simpleProduct);
    return result;
  }
}
