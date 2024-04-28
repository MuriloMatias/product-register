import { Injectable } from '@nestjs/common';
import { DigitalProductRepository } from '../repository/digital-product.repository';
import { DigitalProduct } from '../entities/digital-product.entity';

@Injectable()
export class DigitalProductService {
  constructor(private digitalProductRepository: DigitalProductRepository) {}

  async create(digitalProduct: DigitalProduct) {
    const result = await this.digitalProductRepository.create(digitalProduct);
    return result;
  }
}
