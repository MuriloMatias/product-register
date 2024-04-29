import { IsNotEmpty, IsString } from 'class-validator';

export class ProductVariationDto {
  @IsString()
  @IsNotEmpty()
  attribute: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
