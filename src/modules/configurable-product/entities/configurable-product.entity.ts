import { Product } from 'src/common/product.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductVariations } from './product-variations.entity';

@Entity()
export class ConfigurableProduct implements Product {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salePrice: number;

  @OneToMany(() => ProductVariations, (variations) => variations.product)
  variations: ProductVariations[];

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;
}
