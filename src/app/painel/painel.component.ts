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
  public rodada: number = 0;
  public rodadaFrase: Frase;

  public atualizaResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value);
    console.log(this.resposta);
  }

  public verificarResposta(): void{
    console.log("Verificar resposta: ",this.resposta);
  }


  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase);
  }
}


