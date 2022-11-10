export class Usuario {
  id?: string;
  idade?: number;
  nome?: string;
  cpf?: string;

  constructor(id?: string, usuario: Usuario = {}) {
    this.id = id;
    this.idade = usuario.idade;
    this.nome = usuario.nome;
    this.cpf = usuario.cpf;
  }


}
