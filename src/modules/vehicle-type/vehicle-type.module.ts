import { Module } from '@nestjs/common';
import { VehicleTypeService } from './vehicle-type.service';
import { VehicleTypeController } from './vehicle-type.controller';
import { SharedModule } from 'src/shared/shared.module';
import { vehicleTypeProvider } from './vehicle-type.provider';

@Module({
  imports: [SharedModule],
  controllers: [VehicleTypeController],
  providers: [VehicleTypeService, ...vehicleTypeProvider]
})
export class VehicleTypeModule {}
