import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICustomer } from 'src/documents/customer.document';

@Injectable()
export class CustomerService {
    constructor(
        @Inject('CUSTOMER_PROVIDER')
        private customerModel: Model<ICustomer>,
    ) { }

    async findAll(): Promise<ICustomer[]> {
        return this.customerModel.find();
    }

    async create(customer: ICustomer): Promise<ICustomer> {
        return this.customerModel.create(customer);
    }

    async update(id: string, customer: ICustomer): Promise<ICustomer> {
        return this.customerModel.findByIdAndUpdate(id, customer);
    }

    async delete(id: string): Promise<void> {
        await this.customerModel.findByIdAndDelete(id);
    }
}
