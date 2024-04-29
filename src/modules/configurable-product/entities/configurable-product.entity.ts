import { Product } from 'src/common/product.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductVariation } from './product-variation.entity';

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

  @OneToMany(
    () => ProductVariation,
    (variations) => variations.configurableProduct,
    {
      cascade: true,
      eager: true,
    },
  )
  variations?: ProductVariation[];

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;
}
