import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IBrand } from 'src/documents/brand.document';

@Injectable()
export class BrandService {
    constructor(
        @Inject('BRAND_PROVIDER')
        private brandModel: Model<IBrand>,
    ) { }

    async findAll(): Promise<IBrand[]> {
        return this.brandModel.find();
    }

    async create(brand: IBrand): Promise<IBrand> {
        return this.brandModel.create(brand);
    }

    async update(id: string, brand: IBrand): Promise<IBrand> {
        return this.brandModel.findByIdAndUpdate(id, brand);
    }

    async delete(id: string): Promise<void> {
        await this.brandModel.findByIdAndDelete(id);
    }
}
