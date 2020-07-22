# Site Online:
###### https://eullerhenrique.github.io/Project_Duolingo/


# Projeto Duolingo: 

##### Esse projeto foi desenvolvido com base no projeto  do curso [ES6, TYPSCRIPT E ANGULAR 4](https://www.udemy.com/course/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/). 

##### O foco desse projeto foi aplicar conhecimentos relacionados a HTML, CSS, BOOTSTRAP 4, JAVASCRIPT MODENO ES6 (ECMAScript 2016), TYPESCRIPT E ANGULAR 4

## Tradução

![eullerhenrique github io_Project_Duolingo_ (4)](https://user-images.githubusercontent.com/48317736/88221001-31915900-cc3a-11ea-9451-98f1bd3bad54.png)

## Vitória

![eullerhenrique github io_Project_Duolingo_ (7)](https://user-images.githubusercontent.com/48317736/88221211-82a14d00-cc3a-11ea-94c8-44fb1ef1e68b.png)

## Derrota

![eullerhenrique github io_Project_Duolingo_ (5)](https://user-images.githubusercontent.com/48317736/88221050-453cbf80-cc3a-11ea-81e5-93eab7dd18a8.png)




**Passo 1:** Instale o Node.js:       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**sudo apt-get install nodejs**    

**Passo 2:** Instale o npm:           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**sudo apt-get install npm**  

**Passo 3:** Instale o Angular Cli 1.1.0 (Contém o Angular 4)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**sudo npm install -g @angular/cli@1.1.0**      

**Passo 4:** Instale o Bootstrap 4:   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**sudo npm install bootstrap**    

**Passo 5:** Crie um novo pojeto:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**ng new nome-do-projeto**      

**Passo 6:** Exclua a pasta src

**Passo 7:** Baixe o projeto duolingo e insira a pasta src no diretório nome-do-projeto
            
            
# Build e Deploy

   ## Build e Deploy via angular cli 
    
   **Passo 1:** Gere um build e um servidor local remoto:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**ng serve**

   **Passo 2:** Acesse o servidor gerado (porta padrão = localhost:4200) em seu navegador                 

  ## Build via Angular cli e Deploy via servidor HTTP
  
   **Passo 1:**: Gere uma build de produção                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ng build --prod --aot=false --base-href pasta-raiz  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ex: ng build --prod --aot=false --base-href dist

   **Passo 2:**: Atualize os caminhos das imagens      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Como a pasta raiz foi trocada, os caminho para as imagens devem ser atualizados  
   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nos caminhos que comemçam com "/assets...", retire a barra

   **Passo 3:**: Insira a pasta dist na pasta pública (ex: public_html) do servidor HTTP (ex: Apache)  
   
   **Passo 4:** Acesse o servidor gerado (porta padrão = localhost:8080) em seu navegador    
   
 
  ## Deploy local via pacote HTTP-server
       
           Rode o comando http-server dentro da pasta dist
           
           
  ## Deploy via Angular cli gh-pages        

  


