import { Connection } from 'mongoose';
import { VehicleSchema } from 'src/schemas/vehicle.schema';

export const vehicleProvider = [
  {
    provide: 'VEHICLE_PROVIDER',
    useFactory: (connection: Connection) =>
      connection.model('Vehicle', VehicleSchema, 'vehicles'),
    inject: ['DATABASE_CONNECTION'],
  },
];
