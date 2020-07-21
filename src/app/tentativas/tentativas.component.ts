import { Component, Input , OnChanges } from '@angular/core';
import { CORACOES } from "../shared/coracao.model.mock";
import { Coracao } from "../shared/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent implements OnChanges{
  public coracoes: Coracao[] = CORACOES;

  //O decorator input é executado após o construtor, portanto, o atributo tentativas não é
  //acessível dentro do construtor

  @Input() public tentativas: number;

  ngOnChanges() {

    if(this.coracoes.length !== this.tentativas){

      // this.coracoes.length - this.tentativas

      // 3 - 0 = 3
      // 3 - 1 = 2
      // 3 - 2 = 1

      //Determina o índice do coração que será eliminado

      let i = this.coracoes.length - this.tentativas;

      //i - 1

      // 1 - 1 = 0 -> false
      // 2 - 1 = 1 -> false
      // 3 - 1 = 2 -> false

      //Elimina um coração

      this.coracoes[i - 1].cheio = false;

    }

  }



}
