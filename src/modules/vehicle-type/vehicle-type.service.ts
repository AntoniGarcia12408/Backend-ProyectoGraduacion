import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IVehicleType } from 'src/documents/vehicle-type.document';

@Injectable()
export class VehicleTypeService {
    constructor(
        @Inject('VEHICLE_TYPE_PROVIDER')
        private vehicleTypeModel: Model<IVehicleType>,
    ) { }

    async findAll(): Promise<IVehicleType[]> {
        return this.vehicleTypeModel.find();
    }

    async create(vehicleType: IVehicleType): Promise<IVehicleType> {
        return this.vehicleTypeModel.create(vehicleType);
    }

    async update(id: string, vehicleType: IVehicleType): Promise<IVehicleType> {
        return this.vehicleTypeModel.findByIdAndUpdate(id, vehicleType);
    }

    async delete(id: string): Promise<void> {
        await this.vehicleTypeModel.findByIdAndDelete(id);
    }
}
