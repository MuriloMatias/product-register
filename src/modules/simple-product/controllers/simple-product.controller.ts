import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SimpleProductService } from '../service/simple-product.service';
import { CreateSimpleProductDto } from '../dtos/create-simple-product.dto';
import { SimpleProduct } from '../entities/simple-product.entity';
import { UpdatedSimpleProductDto } from '../dtos/updated-simple-product.dto';
import { plainToInstance } from 'class-transformer';

@Controller('simple-product')
export class SimpleProductController {
  constructor(private readonly simpleProductService: SimpleProductService) {}

  @Post()
  async create(@Body() createSimpleProductDto: CreateSimpleProductDto) {
    const simpleProduct: SimpleProduct = { ...createSimpleProductDto };
    const result = await this.simpleProductService.create(simpleProduct);
    return result;
  }

  @Get()
  async getAll() {
    const result = await this.simpleProductService.getAll();
    return result;
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const result = await this.simpleProductService.getById(id);
    return result;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedSimpleDto: UpdatedSimpleProductDto,
  ) {
    const simpleProduct = plainToInstance(SimpleProduct, updatedSimpleDto);
    const result = this.simpleProductService.update(id, simpleProduct);
    return result;
  }
}
