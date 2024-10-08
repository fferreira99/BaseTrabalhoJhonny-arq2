import { Empresa } from './interface/empresa';
export declare class AppService {
    getHello(): string;
    private readonly logger;
    criarEmpresa(empresa: Empresa): Promise<Empresa>;
}
