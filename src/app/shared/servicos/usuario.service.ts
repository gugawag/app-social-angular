import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../modelo/usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = 'http://localhost:8080/usuarios';

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.clienteHttp.get<Usuario[]>(this.URL_USUARIOS);
  }

  inserir(novoUsuario: Usuario): Observable<Usuario> {
    return this.clienteHttp.post<Usuario>(
      this.URL_USUARIOS, novoUsuario);
  }

  // DELETE /usuarios/3
  apagar(idParaRemocao: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_USUARIOS}/${idParaRemocao}`);
  }

  pesquisarPorId(id: string): Observable<Usuario> {
    return this.clienteHttp.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.clienteHttp
      .put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  }

}
