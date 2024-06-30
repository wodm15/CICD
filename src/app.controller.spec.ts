import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

const mockAppService = {
  getHello: jest.fn(),
};

describe('AppController', () => {
  let appController: AppController;
  let serverPort: number;
  let jwtSecret: string;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: mockAppService }],
    }).compile();

    appController = app.get<AppController>(AppController);
    const configService = app.get<ConfigService>(ConfigService);
    serverPort = configService.get<number>('SERVER_PORT');
    jwtSecret = configService.get<string>('JWT_SECRET');
  });

  describe('root', () => {
    it('should return "Hello Sparta!"', () => {
      // GIVEN
      const mockReturn = {
        message: 'Hello Sparta!',
        data: { serverPort, jwtSecret },
      };
      mockAppService.getHello.mockReturnValue(mockReturn);

      // WHEN
      const actualResult = appController.getHello();

      // THEN
      expect(actualResult).toEqual(mockReturn);
    });
  });
});
