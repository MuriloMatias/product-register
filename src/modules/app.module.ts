import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SimpleProductModule } from './simple-product/simple-product.module';
import { TypeormModule } from 'src/infra/database/typeorm.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeormModule, SimpleProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
