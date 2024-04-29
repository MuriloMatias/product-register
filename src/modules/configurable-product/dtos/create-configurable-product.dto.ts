import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Product } from 'src/common/product.interface';
import { ProductVariationDto } from './product-variation.dto';
import { Type } from 'class-transformer';

export class CreateConfigurableProductDto implements Product {
  @ApiProperty()
  @IsNotEmpty({ message: "Name couldn't be empty" })
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  salePrice: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductVariationDto)
  @MinLength(2)
  variations?: ProductVariationDto[];
}
