import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormField} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';
import {UsuarioModule} from './usuario/usuario.module';
import {LayoutModule} from './layout/layout.module';
import { environment } from '../environments/environment';
import { CpfPipe } from './shared/pipes/cpf.pipe';
import {PipesModule} from './shared/pipes/pipes.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {IMensagem} from './shared/servicos/IMensagem';
import {MensagemSweetService} from './shared/servicos/mensagem-sweet.service';
import {MensagemService} from './shared/servicos/mensagem.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatSnackBarModule,
    PipesModule,
    UsuarioModule,
    LayoutModule,
  ],
  providers: [{
    provide: IMensagem,
    useClass: MensagemService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
