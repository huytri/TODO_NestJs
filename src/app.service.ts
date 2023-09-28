import { Injectable } from '@nestjs/common';
import * as SmartSheetClient from 'smartsheet';

@Injectable()
export class AppService {
  private client: any;
  constructor() {
    this.client = SmartSheetClient.createClient({
      accessToken: '4MJxn6AAl1r9wXbvlMZb7g7CF4sD7OAeTEp5b', // Replace <access_token> with your API token
      logLevel: 'info',
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  getSmartSheet(): void {
    // Initialize the client
    // The `smartsheet` variable now contains access to all of the APIs

    // Set queryParameters for `include` and pagination
    const options = {
      queryParameters: {
        include: 'attachments',
        includeAll: true,
      },
    };

    let arrIds = [];
    // List all sheets
    this.client.sheets
      .listSheets(options)
      .then(function (result) {
        arrIds = result.data.map((x) => x.id);
        console.log(arrIds);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
