import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ModalPessoaComponent } from './components/modal-pessoa/modal-pessoa.component';
import { ModalExibirComponent } from './components/modal-exibir/modal-exibir.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalPessoaComponent,
    ModalExibirComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
