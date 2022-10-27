import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {IMensagem} from './IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemService extends IMensagem {

  constructor(private snackBar: MatSnackBar) {
    super();
  }

  info(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['info'])
  }

  erro(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['error'])
  }

  aviso(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['warning'])
  }

  sucesso(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['success'])
  }

  private abrirSnackBar(mensagem: string, extraClasses: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = extraClasses;
    this.snackBar.open(mensagem, 'X', config);
  }
}
