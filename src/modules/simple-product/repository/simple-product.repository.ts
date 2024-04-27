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
}
