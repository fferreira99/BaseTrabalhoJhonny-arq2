export interface Empresa {
    id: number;
    nome: string;
    disciplinas: Array<Disciplina>;
}
interface Disciplina {
    nome: string;
    operacao: string;
}
export {};
