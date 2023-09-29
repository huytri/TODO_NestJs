import { Injectable } from '@nestjs/common';
import { SmartsheetService } from './smartSheet.service';

@Injectable()
export class AppService {
  constructor(private smartSheetService: SmartsheetService) {
  }

  getHello(): string {
    return this.smartSheetService.getHello();
  }

}
