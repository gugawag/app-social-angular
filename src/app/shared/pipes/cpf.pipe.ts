import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(valor: string): string {
    if (valor && valor.length === 11) {
      return `${valor.substr(0, 3)}.${valor.substr(3, 3)}.${valor.substr(6, 3)}-${valor.substr(9, 2)}`;
    }
    return valor;
  }

}
