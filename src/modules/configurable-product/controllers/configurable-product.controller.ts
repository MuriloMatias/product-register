import { Body, Controller, Post } from '@nestjs/common';
import { ConfigurableProductService } from '../service/configurable-product.service';
import { CreateConfigurableProductDto } from '../dtos/create-configurable-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Configurable Products')
@Controller('configurable-product')
export class ConfigurableProductController {
  constructor(
    private readonly configurableProductService: ConfigurableProductService,
  ) {}

  @Post()
  async create(
    @Body() createConfigurableProductDTO: CreateConfigurableProductDto,
  ) {
    const result = this.configurableProductService.create(
      createConfigurableProductDTO,
    );
    return result;
  }
}
