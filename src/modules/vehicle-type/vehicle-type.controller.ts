import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
} from '@nestjs/common';
import { IVehicleType } from 'src/documents/vehicle-type.document';
import { VehicleTypeService } from './vehicle-type.service';

@Controller('vehicle-type')
export class VehicleTypeController {
    constructor(private vehicleTypeService: VehicleTypeService) { }

    @Get()
    async findAll(): Promise<IVehicleType[]> {
        return this.vehicleTypeService.findAll();
    }

    @Post()
    async create(@Body() vehicleType: IVehicleType): Promise<IVehicleType> {
        return this.vehicleTypeService.create(vehicleType);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() vehicleType: IVehicleType): Promise<IVehicleType> {
        return this.vehicleTypeService.update(id, vehicleType);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        this.vehicleTypeService.delete(id);
    }
}
