import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IVehicle } from 'src/documents/vehicle.document';

@Injectable()
export class VehicleService {
    constructor(
        @Inject('VEHICLE_PROVIDER')
        private vehicleModel: Model<IVehicle>,
    ) { }

    async findAll(): Promise<IVehicle[]> {
        return this.vehicleModel.find();
    }

    async create(vehicle: IVehicle): Promise<IVehicle> {
        return this.vehicleModel.create(vehicle);
    }

    async update(id: string, vehicle: IVehicle): Promise<IVehicle> {
        return this.vehicleModel.findByIdAndUpdate(id, vehicle);
    }

    async delete(id: string): Promise<void> {
        await this.vehicleModel.findByIdAndDelete(id);
    }
}
