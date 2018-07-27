import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
  styleUrls: ['./modal-pessoa.component.css']
})
export class ModalPessoaComponent implements OnInit {

    nome: any;

    constructor() { }

    @Input() nomes: any;
    @Input() titulo: any;

    @Output() nomeOut = new EventEmitter();

    ngOnInit() {
        console.log(this.nomes);
    }

    enviar(){
        console.log("Envia o nome", this.nome);
        this.nomeOut.emit(this.nome);
    }

}
