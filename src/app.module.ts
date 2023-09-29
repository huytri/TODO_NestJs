import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmartsheetService } from './smartSheet.service';
// import * as SmartSheetClient from 'smartsheet';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SmartsheetService],
})
export class AppModule { }
