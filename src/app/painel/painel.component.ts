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
  public resposta: string;
  public i: number = 0;
  public frase: Frase;

  public atualizarResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(): void{

    if(this.resposta == this.frase.frasePtBr){
      //Troca a frase

      this.i++;

      this.frase = this.frases[this.i];

    }else{
      alert('A tradução está errada');
    }

  }


  constructor() {
    this.frase = this.frases[this.i];
  }

}


