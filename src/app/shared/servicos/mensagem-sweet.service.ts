import { Injectable } from '@angular/core';
import {IMensagem} from './IMensagem';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensagemSweetService extends IMensagem {

  constructor() {
    super();
  }

  aviso(mensagem: string): void {
  }

  erro(mensagem: string): void {
    Swal.fire(
      {
        title: 'Erro',
        timer: 5000,
        text: mensagem,
        icon: 'error',
        confirmButtonText: 'Ok'
      }
    );

  }

  info(mensagem: string): void {
    Swal.fire(
      {
        title: 'Info',
        timer: 5000,
        text: mensagem,
        icon: 'info',
        confirmButtonText: 'Ok'
      }
    );
  }

  sucesso(mensagem: string): void {
  }
}
