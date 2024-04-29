import { IsNotEmpty, IsString } from 'class-validator';

export class ProductVariation {
  @IsString()
  @IsNotEmpty()
  attribute: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
