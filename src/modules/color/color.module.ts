import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { ColorController } from './color.controller';
import { colorProvider } from './color.provider';
import { ColorService } from './color.service';

@Module({
  imports: [SharedModule],
  controllers: [ColorController],
  providers: [ColorService, ...colorProvider]
})
export class ColorModule {}
