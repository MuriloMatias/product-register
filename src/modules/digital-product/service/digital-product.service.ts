import { Injectable, NotFoundException } from '@nestjs/common';
import { DigitalProductRepository } from '../repository/digital-product.repository';
import { DigitalProduct } from '../entities/digital-product.entity';

@Injectable()
export class DigitalProductService {
  constructor(private digitalProductRepository: DigitalProductRepository) {}

  async create(digitalProduct: DigitalProduct) {
    const result = await this.digitalProductRepository.create(digitalProduct);
    return result;
  }

  async getById(id: string) {
    const result = await this.digitalProductRepository.getById(id);
    return result;
  }

  async getAll() {
    const result = await this.digitalProductRepository.getAll();
    return result;
  }

  async update(
    id: string,
    digitalProduct: DigitalProduct,
  ): Promise<DigitalProduct> {
    const digitalProductSearched =
      await this.digitalProductRepository.getById(id);
    if (!digitalProductSearched) {
      throw new NotFoundException('Digital product not found');
    }
    const updatedDigitalProduct: DigitalProduct = {
      id: digitalProduct.id,
      name: digitalProduct.name,
      description: digitalProduct.description,
      salePrice: digitalProduct.salePrice,
      downloadLink: digitalProduct.downloadLink,
      createdAt: digitalProduct.createdAt,
      updatedAt: new Date(),
    };
    const result = await this.digitalProductRepository.update(
      updatedDigitalProduct,
    );
    return result;
  }
}
