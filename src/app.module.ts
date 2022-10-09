import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgencyModule } from './modules/agency/agency.module';
import { BrandModule } from './modules/brand/brand.module';
import { ColorModule } from './modules/color/color.module';
import { CustomerModule } from './modules/customer/customer.module';
import { VehicleTypeModule } from './modules/vehicle-type/vehicle-type.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';

@Module({
  imports: [ConfigModule.forRoot(), VehicleModule, CustomerModule, AgencyModule, BrandModule, ColorModule, VehicleTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
