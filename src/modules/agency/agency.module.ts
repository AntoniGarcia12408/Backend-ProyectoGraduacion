import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { AgencyController } from './agency.controller';
import { agencyProvider } from './agency.provider';
import { AgencyService } from './agency.service';

@Module({
  imports: [SharedModule],
  controllers: [AgencyController],
  providers: [AgencyService, ...agencyProvider]
})
export class AgencyModule {}
