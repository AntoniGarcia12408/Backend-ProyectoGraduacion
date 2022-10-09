import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
  } from '@nestjs/common';
import { ICustomer } from 'src/documents/customer.document';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {}

    @Get()
    async findAll(): Promise<ICustomer[]> {
      return this.customerService.findAll();
    }
  
    @Post()
    async create(@Body() customer: ICustomer): Promise<ICustomer> {
      return this.customerService.create(customer);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() customer: ICustomer): Promise<ICustomer> {
      return this.customerService.update(id, customer);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
      this.customerService.delete(id);
    }
}
