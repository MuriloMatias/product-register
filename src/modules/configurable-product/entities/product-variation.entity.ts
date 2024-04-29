import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ConfigurableProduct } from './configurable-product.entity';

@Entity()
export class ProductVariation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  attribute: string;

  @Column()
  value: string;

  @ManyToOne(() => ConfigurableProduct, (product) => product.variations)
  configurableProduct: ConfigurableProduct;
}
