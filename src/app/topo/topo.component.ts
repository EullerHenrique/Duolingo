import {Component} from "@angular/core";

@Component({
  selector: 'app-topo',//Tag: app-topo, Atributo: [app-topo], Classe: .app-topo
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']

  /*

  Template inline
  template: `
    <p>
      Esse é o componente Topo
    </p>
  `,

   */



  /*

  Style inline

  styles:
    [`
        .exemplo {
          color:red
        }
    `]

  */


})



export  class TopoComponent {
  public duolingo_logo: string = "/assets/duo_logo.png";


}
