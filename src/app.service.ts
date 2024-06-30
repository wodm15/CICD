import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello() {
    return {
      message: 'Hello Sparta!',
      data: {
        serverPort: this.configService.get<number>('SERVER_PORT'),
        jwtSecret: this.configService.get<number>('JWT_SECRET'),
      },
    };
  }
}
