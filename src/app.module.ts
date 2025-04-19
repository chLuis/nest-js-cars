import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [], //Escuchan una solicitud y emiten respuesta -> CRUD
  providers: [],
  exports: [],
})
export class AppModule {}
