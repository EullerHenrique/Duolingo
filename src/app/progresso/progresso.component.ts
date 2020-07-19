import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent {
  //Se o atributo presente no property binding fosse xyz o decorator input iria decorar
  //o atributo progresso com o valor do atributo xyz

  //@Input('xyz') public progresso: number = 25;


  //O decorator input decora o atributo progresso com o atributo progresso presente no property binding
  @Input() public progresso: number = 0;



}


