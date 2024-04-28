import { Product } from 'src/common/product.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SimpleProduct implements Product {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  salePrice: number;

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;
}
