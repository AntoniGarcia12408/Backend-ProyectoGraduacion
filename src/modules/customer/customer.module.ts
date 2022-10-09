import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { CustomerController } from './customer.controller';
import { CustomerProvider } from './customer.provider';
import { CustomerService } from './customer.service';

@Module({
  imports: [SharedModule],
  controllers: [CustomerController],
  providers: [CustomerService, ...CustomerProvider]
})
export class CustomerModule {}
