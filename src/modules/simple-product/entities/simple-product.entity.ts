import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SimpleProduct {
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
