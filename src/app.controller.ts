import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Empresa } from './interface/empresa';

@Controller()
export class AppController{
  constructor (private readonly appService: AppService){}
  logger = new Logger (AppController.name)

  @EventPattern('criar-empresa')
  async criarEmpresa(@Payload() empresa:Empresa){
    this.logger.log(`empresa: ${JSON.stringify(empresa)}`)
  }
}