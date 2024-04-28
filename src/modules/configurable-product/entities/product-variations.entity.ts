import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ConfigurableProduct } from './configurable-product.entity';

@Entity()
export class ProductVariations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  attribute: string;

  @Column()
  value: string;

  @ManyToOne(() => ConfigurableProduct, (product) => product.variations)
  product: ConfigurableProduct;
}
