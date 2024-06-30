import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const { message, data } = this.appService.getHello();

    return {
      message,
      data: {
        serverPort: data.serverPort,
        jwtSecret: data.jwtSecret,
      },
    };
  }
}
