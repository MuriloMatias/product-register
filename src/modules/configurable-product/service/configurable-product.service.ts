import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigurableProductRepository } from '../repository/configurable-product.repository';
import { CreateConfigurableProductDto } from '../dtos/create-configurable-product.dto';
import { ConfigurableProduct } from '../entities/configurable-product.entity';
import { ProductVariation } from '../entities/product-variation.entity';
import { UpdatedConfigurableProductDto } from '../dtos/updated-configurable-product.tdto';
import { ProductVariationRepository } from '../repository/product-variation.repository';

@Injectable()
export class ConfigurableProductService {
  constructor(
    private readonly configurableProductRepository: ConfigurableProductRepository,
    private readonly productVariationRepository: ProductVariationRepository,
  ) {}

  async create(createConfigurableProductDto: CreateConfigurableProductDto) {
    if (createConfigurableProductDto.variations.length < 2) {
      throw new BadRequestException(
        'A configurable product must have at least 2 characteristics.',
      );
    }

    //TODO: tentar implementar com o plainToInstance dps
    const configurableProduct = new ConfigurableProduct();
    configurableProduct.name = createConfigurableProductDto.name;
    configurableProduct.description = createConfigurableProductDto.description;
    configurableProduct.salePrice = createConfigurableProductDto.salePrice;

    const variants = createConfigurableProductDto.variations.map(
      (productVariation) => {
        const variant = new ProductVariation();
        variant.attribute = productVariation.attribute;
        variant.value = productVariation.value;
        return variant;
      },
    );
    configurableProduct.variations = variants;

    const result =
      await this.configurableProductRepository.create(configurableProduct);

    return result;
  }

  async getById(id: string) {
    const result = await this.configurableProductRepository.getById(id);
    return result;
  }

  async getAll() {
    const result = await this.configurableProductRepository.getAll();
    return result;
  }

  async update(
    id: string,
    updatedConfigurableProductDto: UpdatedConfigurableProductDto,
  ) {
    const existingProduct =
      await this.configurableProductRepository.getById(id);
    if (!existingProduct) {
      throw new NotFoundException('Configurable product not found');
    }
    const existingProductVariation =
      await this.productVariationRepository.getByConfigurableProductId(id);

    const variationMap = new Map<string, ProductVariation>();
    existingProductVariation.forEach((variation) => {
      variationMap.set(variation.attribute, variation);
    });

    for (const updatedProductVariation of updatedConfigurableProductDto.variations) {
      const existingVariation = variationMap.get(
        updatedProductVariation.attribute,
      );

      if (existingVariation) {
        existingVariation.value = updatedProductVariation.value;
      } else {
        const newVariation = new ProductVariation();
        newVariation.attribute = updatedProductVariation.attribute;
        newVariation.value = updatedProductVariation.value;
        newVariation.configurableProduct = { id } as any;
        existingProductVariation.push(newVariation);
      }
    }

    const configurableProduct: ConfigurableProduct = {
      id: id,
      name: updatedConfigurableProductDto.name,
      description: updatedConfigurableProductDto.description,
      salePrice: updatedConfigurableProductDto.salePrice,
      variations: existingProductVariation,
      createdAt: existingProduct.createdAt,
      updatedAt: new Date(),
    };
    const result =
      this.configurableProductRepository.update(configurableProduct);
    return result;
  }
}
