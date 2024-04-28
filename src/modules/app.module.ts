import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SimpleProductModule } from './simple-product/simple-product.module';
import { TypeormModule } from 'src/infra/database/typeorm.module';
import { DataSource } from 'typeorm';
import { DigitalProductModule } from './digital-product/digital-product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeormModule,
    SimpleProductModule,
    DigitalProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
