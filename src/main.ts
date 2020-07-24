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

/*

O que é webpack?

    Webpack é um module bundler (empacotador de módulos) para JavaScript, em outras palavras, ele junta os arquivos JS
    (e também outros formatos) da sua aplicação (seja arquivos seus ou dependências externas) em um arquivo só
    (ou mais de um), de forma otimizada. Os arquivos são unificados na ordem certa e sem duplicação.

Como o webpack sabe quais arquivos incluir e em qual ordem?
    Ele monta um grafo de dependências.

    Partindo de um arquivo inicial (entrada), ele verifica quais outros arquivos são importados por este, e os
    adiciona ao grafo. Para cada um desses ele também verifica quais eles importam, assim sucessivamente até que
    o grafo contenha todos os arquivos (módulos) necessários para a aplicação.



chunks (pedaços) / bundles (pacotes)

    polyfills ->
        Integra todos os polyfills da aplicação
            Um polyfill é um pedaço de código (geralmente JavaScript na Web) usado para fornecer funcionalidades modernas
            em navegadores mais antigos que não o suportam nativamente
    main ->
        Integra todos os módulos e componentes da aplicação
    styles ->
        Integra todos os arquivos de estilo da aplicação
    vendor ->
        Integra todas as bibliotecas angular da aplicação
    inline ->
        Integra os utilitários do webpack necessários para realizar o bootstraping da aplicação

        Auxilia no carregamento dos demais scripts da aplicação.

*/
