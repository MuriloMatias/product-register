import { Body, Controller, Post } from '@nestjs/common';
import { SimpleProductService } from '../service/simple-product.service';
import { CreateSimpleProductDto } from '../dtos/simple-product.dto';
import { SimpleProduct } from '../entities/simple-product.entity';

@Controller('simple-product')
export class SimpleProductController {
  constructor(private readonly simpleProductService: SimpleProductService) {}

  @Post()
  async create(@Body() createSimpleProductDto: CreateSimpleProductDto) {
    const simpleProduct: SimpleProduct = { ...createSimpleProductDto };
    const result = await this.simpleProductService.create(simpleProduct);
    return result;
  }
}
