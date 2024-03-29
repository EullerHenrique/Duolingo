# Duolingo

<p align="center">
 
 <img alt="Framework" src="https://img.shields.io/static/v1?label=Angular&message=framework&color=blue&style=plastic&logo=ANGULAR">
 
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EullerHenrique/Duolingo">
  
 <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EullerHenrique/Duolingo">
  
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/EullerHenrique/Duolingo">

  <a href="https://github.com/EullerHenrique/Duolingo/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EullerHenrique/Duolingo">
  </a>
  
<img alt="GitHub" src="https://img.shields.io/github/license/EullerHenrique/Duolingo">

<img src="http://img.shields.io/static/v1?label=status&message=concluded&color=GREEN&style=plastic"/>
 
</p>

## Sumário 

- [Página Online](#página-online)

- [Projeto Base](#projeto-base)

- [Projeto Proveniente Do Curso](#projeto-proveniente-do-curso)

- [Aprendizados](#aprendizados)

- [Tecnologias Utilizadas](#tecnologias-utilizadas)

- [Layout](#layout)

- [Pré-Requisitos](#pré-requisitos)

- [Instalação e inserção do repositório em um projeto angular](#instalação-e-inserção-do-repositório-em-um-projeto-angular)

- [Build e Deploy via Angular Cli](#build-e-deploy-via-angular-cli)

- [Build via Angular Cli](#build-via-angular-cli)
  
  - [Deploy via servidor HTTP](#deploy-via-servidor-http)  
  
  - [Deploy via HTTP-server](#deploy-via-http-server)
   
- [Licença](#licença)
  
  


## Página Online
    
> https://eullerhenrique.github.io/Duolingo/

## Projeto Base

    Projeto Aprendendo Inglês 

- Obs: Em comparação ao projeto base, diversas alterações foram realizadas.


## Projeto Proveniente Do Curso

- [Curso de Desenvolvimento WEB com ES6, TypeScript e Angular](https://www.udemy.com/course/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/)
  - Professor: [Jorge Sant Ana](https://www.udemy.com/user/jorgetadeusantanasilva/)
  - Seção: Introdução ao angular 4 
 
  



## Aprendizados 

 - Como iniciar projetos Angular 4 via Angular-CLI
 - Como a SPA é iniciada no browser
 - Como criar componentes
 - Como integrar o Bootstrap 4 ao projeto (para criar aplicações responsivas)
 - Databinding (string interpolation, property binding e event binding)
 - LifeCicly Hooks (ngOnInit, ngOnChanges, ngOnDestroy)
 - Diretivas (ngFor e ngIf)
 - @Input e @Output


## Tecnologias Utilizadas

 - HTML 5
 - CSS
 - JAVASCRIPT MODERNO ES6 (ECMAScript 2016)
 - BOOTSTRAP 4
 - NODE JS
 - TYPESCRIPT
 - ANGULAR 4


## Layout

### Tradução

![eullerhenrique github io_Project_Duolingo_ (4)](https://user-images.githubusercontent.com/48317736/88221001-31915900-cc3a-11ea-9451-98f1bd3bad54.png)

---

### Sucesso

![eullerhenrique github io_Project_Duolingo_ (7)](https://user-images.githubusercontent.com/48317736/88221211-82a14d00-cc3a-11ea-94c8-44fb1ef1e68b.png)

---

### Fracasso

![eullerhenrique github io_Project_Duolingo_ (5)](https://user-images.githubusercontent.com/48317736/88221050-453cbf80-cc3a-11ea-81e5-93eab7dd18a8.png)

---

 
# Pré-Requisitos 

  **1.** Instale o Node.js    
  
    sudo apt-get install nodejs    

  **2.** Instale o npm    
    
    sudo apt-get install npm     
  
  **3.** Instale o Angular Cli 1.1.0 (Contém o Angular 4)
    
    sudo npm install @angular/cli@1.1.0 
    
    
# Instalação e inserção do repositório em um projeto angular

  **1.** Clone o repositório    
  
    git clone https://github.com/EullerHenrique/Duolingo.git
        
  **2.** Crie um projeto angular
  
    ng new nome-do-projeto     

  **3.** Exclua a pasta src presente no diretório nome-do-projeto
          
    cd nome-projeto
    rm -rf nome-projeto
  
  **4.** Insira a pasta src presente no diretório Duolingo no diretório nome-do-projeto  
      
    cd ..
    cd Duolingo
    mv src ../nome-projeto
              
              
 # Build e Deploy via Angular Cli   
 
  **1.** Entre na pasta nome-do-projeto, gere um build e um servidor local remoto 
   
    cd nome-do-projeto
    
    ng serve

  **2.** Acesse em seu navegador o servidor gerado  
  
    localhost:4200 || 127.0.0.1:4200 (Somente o dispositivo atual pode acessar esse servidor) 
  
  
  # Build via Angular Cli

  Gere um build de produção  
      
    ng build --prod --aot=false --base-href pasta-raiz   
      
    ex: ng build --prod --aot=false --base-href dist
    
    
 # Deploy   
    

  ## Deploy via servidor HTTP
  
   **1.** Entre na pasta dist 
         
    cd dist
  
   **2.** Abra o arquivo main
   
   **3.** Atualize os caminhos para as imagens

    Como a pasta raiz foi trocada, os caminhos para as imagens devem ser atualizados  
    
    Nos caminhos que começam com "/assets...", retire a barra

   **4.** Insira a pasta dist na pasta pública (ex: public_html) do servidor HTTP (ex: Apache)  
  
   **5.** Acesse em seu navegador o servidor gerado (ex: localhost/~euller) pelo servidor http (ex:apache) e navegue até o diretório dist
                  
  ## Deploy via HTTP-server
  
   **1.** Instale o HTTP-server
   
    sudo npm install http-server
    
   **2.** Entre na pasta dist e gere um servidor   
   
    cd dist
    
    http-server
 
   **3.** Acesse em seu navegador o servidor gerado  
 
    localhost:8080 || 127.0.0.1:8080 (Somente o dispositivo atual pode acessar esse servidor)  

    ou  

    ip_do_roteador:8080 (Qualquer dispositivo pode acessar esse servidor)    
        
   
## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2020 - Duolingo

                       
            
  


