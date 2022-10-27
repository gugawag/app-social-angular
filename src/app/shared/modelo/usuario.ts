export class Usuario {
  id: string;
  idade: number;
  nome: string;
  cpf: string;

  constructor(id: string, idade: number, nome: string, cpf: string) {
    this.id = id;
    this.idade = idade;
    this.nome = nome;
    this.cpf = cpf;
  }

}
