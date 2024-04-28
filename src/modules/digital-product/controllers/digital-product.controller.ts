import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DigitalProductService } from '../service/digital-product.service';
import { CreateDigitalProductDto } from '../dtos/create-digital-product.dto';
import { DigitalProduct } from '../entities/digital-product.entity';
import { UpdatedDigitalProductDto } from '../dtos/updated-digital-product.dto';
import { plainToInstance } from 'class-transformer';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Digital Products')
@Controller('digital-product')
export class DigitalProductController {
  constructor(private readonly digitalProductService: DigitalProductService) {}

  @Post()
  async create(@Body() createDigitalProductDto: CreateDigitalProductDto) {
    const digitalProduct: DigitalProduct = { ...createDigitalProductDto };
    const result = await this.digitalProductService.create(digitalProduct);
    return result;
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const result = await this.digitalProductService.getById(id);
    return result;
  }

  @Get()
  async getAll() {
    const result = await this.digitalProductService.getAll();
    return result;
  }

  @Patch(':id')
  async update(
    @Param('id') idDigitalProduct: string,
    @Body() updatedDigitalDto: UpdatedDigitalProductDto,
  ) {
    const digitalProduct = plainToInstance(DigitalProduct, updatedDigitalDto);
    const result = await this.digitalProductService.update(
      idDigitalProduct,
      digitalProduct,
    );
    return result;
  }
}
