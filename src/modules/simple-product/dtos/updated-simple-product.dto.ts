import { PartialType } from '@nestjs/swagger';
import { CreateSimpleProductDto } from './create-simple-product.dto';

export class UpdatedSimpleProductDto extends PartialType(
  CreateSimpleProductDto,
) {}
