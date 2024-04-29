import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SimpleProductRepository } from '../repository/simple-product.repository';
import { SimpleProduct } from '../entities/simple-product.entity';

@Injectable()
export class SimpleProductService {
  constructor(private simpleProductRepository: SimpleProductRepository) {}

  async create(simpleProduct: SimpleProduct) {
    const simpleProductSearched = await this.simpleProductRepository.getByName(
      simpleProduct.name,
    );
    if (simpleProductSearched) {
      throw new BadRequestException(
        'A entry with the same name already exists',
      );
    }
    const result = await this.simpleProductRepository.create(simpleProduct);
    return result;
  }

  async getById(id: string) {
    const result = await this.simpleProductRepository.getById(id);
    return result;
  }

  async getAll() {
    const result = await this.simpleProductRepository.getAll();
    return result;
  }

  async update(
    id: string,
    simpleProduct: SimpleProduct,
  ): Promise<SimpleProduct> {
    const simpleProductSearched =
      await this.simpleProductRepository.getById(id);
    if (!simpleProductSearched) {
      throw new NotFoundException('Simple product not found');
    }

    const sameName = await this.simpleProductRepository.getByName(
      simpleProduct.name,
    );
    if (sameName && sameName.id != simpleProductSearched.id) {
      throw new BadRequestException(
        'A entry with the same name already exists',
      );
    }

    const updatedSimpleProduct: SimpleProduct = {
      id: id,
      name: simpleProduct.name,
      description: simpleProduct.description,
      salePrice: simpleProduct.salePrice,
      createdAt: simpleProduct.createdAt,
      updatedAt: new Date(),
    };

    const result =
      await this.simpleProductRepository.update(updatedSimpleProduct);
    return result;
  }
}
