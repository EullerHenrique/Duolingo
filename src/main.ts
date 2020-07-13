import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)


/*


  BootstrapStraping é um termo usado para o processo de build de um framework:

  "A técnica de se carregar um programa em um computador através de poucas instruções iniciais que permite a introdução
  do resto do programa a partir de um dispositivo de entrada"

  Basicamente é o que faz ser possivel você escrever um único comando e o projeto inteiro ser gerado diante dos seus olhos.



  O bootstrap é uma indicação de qual modulo/component da aplicação deve passar pelo processo de Bootstraping, ou seja,
  indica qual modulo/component deve ser injetado na aplicação.

  Dessa maneira, quando o ng serve for executado o webpack saberá quais componentes e recursos adicionar no chunk
  main.bundle.js

  O bootstrap do main.ts indica que o primeiro modulo que deve passar pelo processo de Bootstraping é o app.module
  O bootstrap do app.module indica que o primeiro componente que deve passar pelo processo de Bootsraping é o app.component.ts


  Obs: Módulo (agrupamento de componentes)
 */
