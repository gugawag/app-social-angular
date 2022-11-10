import { Injectable } from '@angular/core';
import {Usuario} from '../modelo/usuario';
import {from, map, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO = 'usuarios';

  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Usuario[]> {
    return this.colecaoUsuarios.valueChanges({idField: 'id'});
  }

  inserir(novoUsuario: Usuario): Observable<Usuario> {
    delete novoUsuario.id;
    return from(this.colecaoUsuarios.add({...novoUsuario}));
  }

  apagar(idParaRemocao?: string): Observable<void> {
    return from(this.colecaoUsuarios.doc(idParaRemocao).delete());
  }

  pesquisarPorId(id: string): Observable<Usuario> {
    return this.colecaoUsuarios.doc(id).get()
      .pipe(map(document => new Usuario(document.id, document.data())));

  }

  atualizar(usuario: Usuario): Observable<void> {
    const id = usuario.id;
    delete usuario.id;

    return from(this.colecaoUsuarios.doc(id)
      .update(Object.assign({}, usuario)));
  }

  listarMaioresDeIdade(): Observable<Usuario[]> {
    let usuariosMaioresDeIdade: AngularFirestoreCollection<Usuario>;
    usuariosMaioresDeIdade = this.afs.collection(this.NOME_COLECAO,
        ref => ref.where('idade', '>', '17'));
    return usuariosMaioresDeIdade.valueChanges();
  }

}

