import { IsNotEmpty, IsString } from 'class-validator';

export class ProductVariationDto {
  @IsString()
  id?: string;

  @IsString()
  @IsNotEmpty()
  attribute: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
