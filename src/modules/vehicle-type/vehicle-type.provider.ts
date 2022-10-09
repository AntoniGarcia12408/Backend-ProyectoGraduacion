import { Connection } from 'mongoose';
import { VehicleTypeSchema } from 'src/schemas/vehicle-type.schema';

export const vehicleTypeProvider = [
  {
    provide: 'VEHICLE_TYPE_PROVIDER',
    useFactory: (connection: Connection) =>
      connection.model('VehicleType', VehicleTypeSchema, 'vehicle-types'),
    inject: ['DATABASE_CONNECTION'],
  },
];
