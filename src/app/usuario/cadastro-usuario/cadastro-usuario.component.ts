import { Component, OnInit } from '@angular/core';
import {USUARIOS} from '../../shared/modelo/USUARIOS';
import {Usuario} from '../../shared/modelo/usuario';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuarios = USUARIOS;
  usuarioAtual: Usuario;

  constructor(private rotaAtual: ActivatedRoute) {
    this.usuarioAtual = new Usuario('', 0, '');
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
      const usuarioEncontrado = this.usuarios.find(usuario => usuario.id === idParaEdicao);
      if (usuarioEncontrado) {
        this.usuarioAtual = usuarioEncontrado;
      }
    }

  }

  ngOnInit() {
  }

  inserirUsuario() {
    this.usuarios.push(this.usuarioAtual);
    this.usuarioAtual = new Usuario('', 0, '');
  }

}
