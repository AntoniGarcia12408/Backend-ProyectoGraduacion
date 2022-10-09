import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
  } from '@nestjs/common';
import { IVehicle } from 'src/documents/vehicle.document';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
    constructor(private vehicleService: VehicleService) {}

    @Get()
    async findAll(): Promise<IVehicle[]> {
      return this.vehicleService.findAll();
    }
  
    @Post()
    async create(@Body() vehicle: IVehicle): Promise<IVehicle> {
      return this.vehicleService.create(vehicle);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() vehicle: IVehicle): Promise<IVehicle> {
      return this.vehicleService.update(id, vehicle);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
      this.vehicleService.delete(id);
    }
}
