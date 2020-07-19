import { Component} from '@angular/core';

import { Frase } from "../frase/frase.component";
import { FRASES } from "../frase/frase.component.mock"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent {

  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase: ";
  public resposta: string = '';
  public i: number = 0;
  public frase: Frase;

  public progresso: number = 0;

  public atualizarResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(): void{

    if(this.resposta.trim() == this.frase.frasePtBr){

      //Troca a frase

      this.i++;

      this.atualizarFrase();

      //Troca o progresso

      this.progresso+=(100/this.frases.length);

    }else{
      alert('A tradução está errada');
    }

  }

  public atualizarFrase():void {
    this.frase = this.frases[this.i];

    //Limpar a resposta

    this.resposta = '';
  }


  constructor() {
    this.atualizarFrase();
  }

}


