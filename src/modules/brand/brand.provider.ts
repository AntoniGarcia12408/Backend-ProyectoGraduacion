import { Connection } from 'mongoose';
import { BrandSchema } from 'src/schemas/brand.schema';

export const brandProvider = [
  {
    provide: 'BRAND_PROVIDER',
    useFactory: (connection: Connection) =>
      connection.model('Brand', BrandSchema, 'brands'),
    inject: ['DATABASE_CONNECTION'],
  },
];
