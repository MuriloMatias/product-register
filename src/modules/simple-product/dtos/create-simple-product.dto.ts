import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Product } from 'src/common/product.interface';

export class CreateSimpleProductDto implements Product {
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
}
