import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DigitalProduct } from '../entities/digital-product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DigitalProductRepository {
  constructor(
    @InjectRepository(DigitalProduct)
    private readonly digitalProductRepository: Repository<DigitalProduct>,
  ) {}

  async create(digitalProduct: DigitalProduct): Promise<DigitalProduct> {
    const result = await this.digitalProductRepository.save(digitalProduct);
    return result;
  }
}
