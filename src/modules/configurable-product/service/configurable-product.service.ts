import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigurableProductRepository } from '../repository/configurable-product.repository';
import { CreateConfigurableProductDto } from '../dtos/create-configurable-product.dto';
import { plainToInstance } from 'class-transformer';
import { ConfigurableProduct } from '../entities/configurable-product.entity';

@Injectable()
export class ConfigurableProductService {
  constructor(
    private readonly configurableProductRepository: ConfigurableProductRepository,
  ) {}

  async create(createConfigurableProductDTO: CreateConfigurableProductDto) {
    const configurableProduct = plainToInstance(
      ConfigurableProduct,
      createConfigurableProductDTO,
    );

    if (createConfigurableProductDTO.variant.length < 2) {
      throw new BadRequestException(
        'A product configurable must have at least 2 characteristics.',
      );
    }

    const result =
      await this.configurableProductRepository.create(configurableProduct);
    return result;
  }
}
