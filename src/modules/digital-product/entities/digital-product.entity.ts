import { Product } from 'src/common/product.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DigitalProduct implements Product {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  salePrice: number;

  @Column()
  downloadLink: string;

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;
}
