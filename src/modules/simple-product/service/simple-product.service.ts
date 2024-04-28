import { Injectable } from '@nestjs/common';
import { SimpleProductRepository } from '../repository/simple-product.repository';
import { SimpleProduct } from '../entities/simple-product.entity';

@Injectable()
export class SimpleProductService {
  constructor(private simpleProductRepository: SimpleProductRepository) {}

  async create(simpleProduct: SimpleProduct) {
    const result = await this.simpleProductRepository.create(simpleProduct);
    return result;
  }

  async getAll() {
    const result = await this.simpleProductRepository.getAll();
    return result;
  }

  async getById(id: string) {
    const result = await this.simpleProductRepository.getById(id);
    return result;
  }
  // async update(simpleProduct: SimpleProduct): Promise<SimpleProduct>{

  // }
}
