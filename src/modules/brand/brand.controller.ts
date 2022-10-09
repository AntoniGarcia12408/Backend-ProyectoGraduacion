import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
  } from '@nestjs/common';
import { IBrand } from 'src/documents/brand.document';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
    constructor(private brandService: BrandService) {}

    @Get()
    async findAll(): Promise<IBrand[]> {
      return this.brandService.findAll();
    }
  
    @Post()
    async create(@Body() brand: IBrand): Promise<IBrand> {
      return this.brandService.create(brand);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() brand: IBrand): Promise<IBrand> {
      return this.brandService.update(id, brand);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
      this.brandService.delete(id);
    }
}
