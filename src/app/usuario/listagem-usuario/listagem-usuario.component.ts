import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/modelo/usuario';
import {Router} from '@angular/router';
import {UsuarioService} from '../../shared/servicos/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private roteador: Router, private usuarioService: UsuarioService) {
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuariosRetornados => this.usuarios = usuariosRetornados
    );
  }

  removerUsuario(usuarioARemover: Usuario): void {
    this.usuarioService.apagar(usuarioARemover.id).subscribe(
      removido => {
        console.log(removido);
        const indxUsuario = this.usuarios.findIndex(u => u.id === usuarioARemover.id);

        if (indxUsuario > -1) {
          this.usuarios.splice(indxUsuario, 1);
        }

      }
    );
  }

}
