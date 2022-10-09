import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
  } from '@nestjs/common';
import { IAgency } from 'src/documents/agency.document';
import { AgencyService } from './agency.service';

@Controller('agency')
export class AgencyController {
    constructor(private agencyService: AgencyService) {}

    @Get()
    async findAll(): Promise<IAgency[]> {
      return this.agencyService.findAll();
    }
  
    @Post()
    async create(@Body() agency: IAgency): Promise<IAgency> {
      return this.agencyService.create(agency);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() agency: IAgency): Promise<IAgency> {
      return this.agencyService.update(id, agency);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
      this.agencyService.delete(id);
    }
}
