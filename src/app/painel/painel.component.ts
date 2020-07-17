import { Component} from '@angular/core';

import { Frase} from "../frase/frase.component";
import { FRASES } from "../frase/frase.component.mock"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent {

  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase: ";

  constructor() {


  }

}
