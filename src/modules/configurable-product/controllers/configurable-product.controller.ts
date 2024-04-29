import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ConfigurableProductService } from '../service/configurable-product.service';
import { CreateConfigurableProductDto } from '../dtos/create-configurable-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdatedConfigurableProductDto } from '../dtos/updated-configurable-product.tdto';

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

  @Get(':id')
  async getById(@Param('id') id: string) {
    const result = this.configurableProductService.getById(id);
    return result;
  }

  @Get()
  async getAll() {
    const result = this.configurableProductService.getAll();
    return result;
  }

  @Patch(':id')
  async update(
    @Param('id') idConfigurableProduct: string,
    @Body() updatedConfigurableProductDto: UpdatedConfigurableProductDto,
  ) {
    const result = this.configurableProductService.update(
      idConfigurableProduct,
      updatedConfigurableProductDto,
    );
    return result;
  }
}
