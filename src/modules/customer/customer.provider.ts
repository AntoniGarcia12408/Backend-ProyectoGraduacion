import { Connection } from 'mongoose';
import { CustomerSchema } from 'src/schemas/customer.schema';

export const CustomerProvider = [
  {
    provide: 'CUSTOMER_PROVIDER',
    useFactory: (connection: Connection) =>
      connection.model('Customer', CustomerSchema, 'customers'),
    inject: ['DATABASE_CONNECTION'],
  },
];
