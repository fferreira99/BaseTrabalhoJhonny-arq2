import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Empresa } from './interface/empresa';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    logger: Logger;
    criarEmpresa(empresa: Empresa): Promise<void>;
}
