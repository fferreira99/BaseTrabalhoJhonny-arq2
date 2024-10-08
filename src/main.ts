import { Transport } from '@nestjs/microservices'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('Main')
async function bootstrap(){
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.RMQ,
  options: {
  urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'],
  queue: 'admin-backend'
  },
});

await app.listen();

}
bootstrap();