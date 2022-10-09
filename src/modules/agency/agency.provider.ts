import { Connection } from 'mongoose';
import { AgencySchema } from 'src/schemas/agency.schema';

export const agencyProvider = [
  {
    provide: 'AGENCY_PROVIDER',
    useFactory: (connection: Connection) =>
      connection.model('Agency', AgencySchema, 'agencies'),
    inject: ['DATABASE_CONNECTION'],
  },
];
