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
    console.log(this.tentativas);
  }

}
