import { Injectable } from '@nestjs/common';
import { SimpleProductRepository } from '../repository/simple-product.repository';
import { SimpleProduct } from '../entities/simple-product.entity';

@Injectable()
export class SimpleProductService {
  constructor(
    private readonly simpleProductRepository: SimpleProductRepository,
  ) {}

  async create(simpleProduct: SimpleProduct) {
    const result = await this.simpleProductRepository.create(simpleProduct);
    return result;
  }
}
