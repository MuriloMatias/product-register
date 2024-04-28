import { PartialType } from '@nestjs/swagger';
import { CreateDigitalProductDto } from './create-digital-product.dto';

export class UpdatedDigitalProductDto extends PartialType(
  CreateDigitalProductDto,
) {}
