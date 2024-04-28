import { Body, Controller, Post } from '@nestjs/common';
import { DigitalProductService } from '../service/digital-product.service';
import { CreateDigitalProductDto } from '../dtos/create-digital-product.dto';
import { DigitalProduct } from '../entities/digital-product.entity';

@Controller('digital-product')
export class DigitalProductController {
  constructor(private readonly digitalProductService: DigitalProductService) {}

  @Post()
  async create(@Body() createDigitalProductDto: CreateDigitalProductDto) {
    const digitalProduct: DigitalProduct = { ...createDigitalProductDto };
    const result = await this.digitalProductService.create(digitalProduct);
    return result;
  }
}
