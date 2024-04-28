import { Product } from 'src/common/product.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DigitalProduct implements Product {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salePrice: number;

  @Column()
  downloadLink: string;

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;
}
