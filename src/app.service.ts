import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Empresa } from './interface/empresa';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  private readonly logger = new Logger(AppService.name)
  async criarEmpresa (empresa: Empresa): Promise<Empresa>{
    try{
      return null
    }catch(error){
      this.logger.error(`error: ${JSON.stringify(error.message)}`)
      throw new RpcException(error.message)
    }
  }
}
