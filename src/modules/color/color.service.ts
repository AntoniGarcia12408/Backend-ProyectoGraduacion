import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IColor } from 'src/documents/color.document';

@Injectable()
export class ColorService {
    constructor(
        @Inject('COLOR_PROVIDER')
        private colorModel: Model<IColor>,
    ) { }

    async findAll(): Promise<IColor[]> {
        return this.colorModel.find();
    }

    async create(color: IColor): Promise<IColor> {
        return this.colorModel.create(color);
    }

    async update(id: string, color: IColor): Promise<IColor> {
        return this.colorModel.findByIdAndUpdate(id, color);
    }

    async delete(id: string): Promise<void> {
        await this.colorModel.findByIdAndDelete(id);
    }
}
