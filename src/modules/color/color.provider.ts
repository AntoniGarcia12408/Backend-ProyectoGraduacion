import { Connection } from 'mongoose';
import { ColorSchema } from 'src/schemas/color.schema';

export const colorProvider = [
  {
    provide: 'COLOR_PROVIDER',
    useFactory: (connection: Connection) =>
      connection.model('Color', ColorSchema, 'colors'),
    inject: ['DATABASE_CONNECTION'],
  },
];
