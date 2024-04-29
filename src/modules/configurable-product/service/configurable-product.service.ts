import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigurableProductRepository } from '../repository/configurable-product.repository';
import { CreateConfigurableProductDto } from '../dtos/create-configurable-product.dto';
import { ConfigurableProduct } from '../entities/configurable-product.entity';
import { ProductVariation } from '../entities/product-variation.entity';
@Injectable()
export class ConfigurableProductService {
  constructor(
    private readonly configurableProductRepository: ConfigurableProductRepository,
  ) {}

  async create(createConfigurableProductDto: CreateConfigurableProductDto) {
    if (createConfigurableProductDto.variant.length < 2) {
      throw new BadRequestException(
        'A configurable product must have at least 2 characteristics.',
      );
    }

    //TODO: tentar implementar com o plainToInstance dps
    const configurableProduct = new ConfigurableProduct();
    configurableProduct.name = createConfigurableProductDto.name;
    configurableProduct.description = createConfigurableProductDto.description;
    configurableProduct.salePrice = createConfigurableProductDto.salePrice;

    const variants = createConfigurableProductDto.variant.map(
      (variationDto) => {
        const variant = new ProductVariation();
        variant.attribute = variationDto.attribute;
        variant.value = variationDto.value;
        return variant;
      },
    );
    configurableProduct.variations = variants;

    const result =
      await this.configurableProductRepository.create(configurableProduct);

    return result;
  }

  async getById(id: string) {
    console.log(id);
    const result = await this.configurableProductRepository.getById(id);
    return result;
  }

  async getAll() {
    const result = await this.configurableProductRepository.getAll();
    return result;
  }
}
