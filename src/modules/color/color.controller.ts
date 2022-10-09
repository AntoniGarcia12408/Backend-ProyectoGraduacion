import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
  } from '@nestjs/common';
import { IColor } from 'src/documents/color.document';
import { ColorService } from './color.service';

@Controller('color')
export class ColorController {
    constructor(private colorService: ColorService) {}

    @Get()
    async findAll(): Promise<IColor[]> {
      return this.colorService.findAll();
    }
  
    @Post()
    async create(@Body() color: IColor): Promise<IColor> {
      return this.colorService.create(color);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() color: IColor): Promise<IColor> {
      return this.colorService.update(id, color);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
      this.colorService.delete(id);
    }
}
