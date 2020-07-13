import { Component } from '@angular/core';

/*
  Os componentes são classes escritas em TypeScript que recebem o decorator @Component.

  Quando analisamos a estrutura de um componente, podemos dividi-lo nas seguintes partes:

  Metadata: são definições que iremos informar ao Angular que a nossa classe é um Component,
  por meio de decorators , nesse caso @Component (Essa função decora o componente AppComponent
  com metadados, ou seja, com dados relativos ao próprio componente)

  Classe: assim como em qualquer linguagem de programação que utiliza o paradigma da orientação a objeto, possui
  suas propriedades e métodos


  ****************************************************************************************************************

    Decorator
    Em algumas situações é necessário adicionar responsabilidades à objetos  específicos, e não a toda a classe.

    Solução:
      O padrão de projeto Decorator resolve o problema, permitindo que tais responsabilidades sejam adicionadas
      individualmente, em tempo de execução.

      Ao contrário da herança que aplica funcionalidades a todos os objetos da classe, o padrão decorator permite
      aplicar funcionalidades apenas a um objeto específico.

      O padrão Decorator permite estender as funcionalidades de um objeto em tempo de execução

    ****************************************************************************************************************


  Um Component é um tipo de classe existente em uma aplicação Angular, eles são identificados com o decorator @Component.
  Neste decorator existem algumas propriedades mais utilizadas como: selector, templateUrl e style. Vamos especificá-las:

  selector: é como identificamos o nosso componente.
  Para todo o componente existe um elemento único associado que permite que ele seja adicionado em um documento HTML.
  Nesse caso, o nome do elemento desse componente é cadastro e deve ser escrito como <cadastro></cadastro>

  TemplateUrl: é o nome do documento HTML que será a parte visual do componente. Nele podemos ter código em HTML
  juntamente com todos os bindings e diretivas necessários para a exibição do componente no navegador

  Template: também usado para descrever a parte visual do componente, porém nesse caso podemos fornecer código HTML
  "hard coded", como texto

  styleUrl: é onde informamos quais folhas de estilo contêm o código CSS que será aplicado ao template do componente.

  Com isso podemos concluir que a estrutura de um componente Angular deve ser formada por esses três elementos,
  template (HTML), estilo (CSS) e classe (TypeScript).
  Essas partes são organizadas em arquivos separados e unidas nos metadados do componente através do decorator @Component

 */


@Component({
  selector: 'app-root', //Tag html em que o componente será injetado
  templateUrl: './app.component.html', //Html do componente
  styleUrls: ['./app.component.css']//Css do componente
})


export class AppComponent {
  title = 'app'; //Titulo do componente
}
