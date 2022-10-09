import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IAgency } from 'src/documents/agency.document';

@Injectable()
export class AgencyService {
    constructor(
        @Inject('AGENCY_PROVIDER')
        private agencyModel: Model<IAgency>,
    ) { }

    async findAll(): Promise<IAgency[]> {
        return this.agencyModel.find();
    }

    async create(agency: IAgency): Promise<IAgency> {
        return this.agencyModel.create(agency);
    }

    async update(id: string, agency: IAgency): Promise<IAgency> {
        return this.agencyModel.findByIdAndUpdate(id, agency);
    }

    async delete(id: string): Promise<void> {
        await this.agencyModel.findByIdAndDelete(id);
    }
}
