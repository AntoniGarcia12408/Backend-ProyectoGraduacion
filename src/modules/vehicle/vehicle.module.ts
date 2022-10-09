import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { VehicleController } from './vehicle.controller';
import { vehicleProvider } from './vehicle.provider';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [SharedModule],
  controllers: [VehicleController],
  providers: [VehicleService, ...vehicleProvider]
})
export class VehicleModule {}
