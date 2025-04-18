import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [], //Escuchan una solicitud y emiten respuesta -> CRUD
  providers: [],
  exports: [],
})
export class AppModule {}
