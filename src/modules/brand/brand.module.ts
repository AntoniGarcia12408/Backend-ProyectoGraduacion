import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { SharedModule } from 'src/shared/shared.module';
import { brandProvider } from './brand.provider';

@Module({
  imports: [SharedModule],
  controllers: [BrandController],
  providers: [BrandService, ...brandProvider]
})
export class BrandModule {}
