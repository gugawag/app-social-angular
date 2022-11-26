import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/modelo/usuario';
import {ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../shared/servicos/usuario.service';
import {MensagemService} from '../../shared/servicos/mensagem.service';
import {IMensagem} from '../../shared/servicos/IMensagem';
import {UsuarioFirestoreService} from '../../shared/servicos/usuario-firestore.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuarioAtual: Usuario;

  inserindo = true;
  nomeBotao = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private usuarioService: UsuarioService,
              private mensagemService: IMensagem) {
    this.usuarioAtual = new Usuario('');
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const usuarioEncontrado = this.usuarioService.pesquisarPorId(idParaEdicao).subscribe(
          usuarioEncontrado => this.usuarioAtual = usuarioEncontrado
        );
      }
    }
  }

  ngOnInit() {
  }

  inserirOuAtualizarUsuario() {
    if (this.inserindo) {
      this.usuarioService.inserir(this.usuarioAtual).subscribe(
        usuarioInserido => this.mensagemService.info('Usuário cadastrado com sucesso!')
      );
      this.usuarioAtual = new Usuario('');
    } else {
      this.usuarioService.atualizar(this.usuarioAtual).subscribe(
        usuarioAtualizado => this.mensagemService.erro('Usuário atualizado com sucesso!')
      )
    }
  }

  atualizaNome(novoNome: string) {
    this.usuarioAtual.nome = novoNome;
  }
}
