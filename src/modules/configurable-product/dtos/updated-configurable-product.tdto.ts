import { PartialType } from '@nestjs/swagger';
import { CreateConfigurableProductDto } from './create-configurable-product.dto';

export class UpdatedConfigurableProductDto extends PartialType(
  CreateConfigurableProductDto,
) {}
