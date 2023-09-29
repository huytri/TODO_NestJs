import { Controller, Get } from '@nestjs/common';
import { SmartsheetService } from './smartSheet.service';

@Controller()
export class AppController {
  constructor(private smartSheetService: SmartsheetService) { }

  @Get()
  getHello(): string {
    return this.smartSheetService.getHello();
  }
}
