# < Div >as Bank

O objetivo do projeto é um simulador bancário onde o usuário realiza o login. Na tela inicial, o usuário pode realizar uma transferência (para conta no mesmo banco) e visualizar o extrato atualizado.

Histórias de Usuário Implementadas

  * Elaboração do layout de todas as telas; 
  * Criar a interface e consumir API de login;
  * Criar a interface e consumir API do extrato;
  * Criar a interface e consumir API de transferência;
  * Criação de rotas complementares.

## Instalação:

É necessário que o computador tenha o [Node.js](https://nodejs.org/) instalado. Após fazer o clone do projeto, é necessário executar "npm install" na linha de comando. Após, executar "ng serve" para compilação. Para ver o projeto rodando no navegador, acesse "localhost:4200".

## Teste

Para simular o login na aplicação, você pode usar os dados:
agência 1001 / conta 45678 / senha 8957

Para simular transferência, você pode usar os dados como conta destino:
agência 1001 / conta 12345

## Características Técnicas

A estrutura do projeto foi elaborada com base em microsserviços, onde cada funcionalidade  de back-end foi construída em servidores individuais na Azure, com bancos de dados Sql separados.

Para conexão com banco de dados e retorno de informações, criamos e utilizamos as seguintes APIs:

   * https://internet-banking-apitransferencia.azurewebsites.net/api/transf/extrato
   * https://apiextrato20200428095025.azurewebsites.net/api/extrato/incluir
   * https://internet-baking-apilogin20200426164725.azurewebsites.net/api/clientes/conta/
   
Repositórios das API:

  * https://dev.azure.com/vivianhcaldas/_git/internet-banking
  * https://dev.azure.com/vivianhcaldas/internet-banking/_git/apiExtrato
  * https://dev.azure.com/vivianhcaldas/internet-banking/_git/internet-banking-apiTransferencia

## Ferramentas e métodos utilizados

O projeto foi desenvolvido com Angular 9 em Typescript, C# e .Net (aplicativo web), utilizando as seguintes ferramentas:

 ## Ferramentas Utilizadas

* ASP .NET (.NET Framework) Web API
* Entity Framework
* Azure DevOps
* Git / Github - GitFlow
* Azure Services: SQL Databases e App Services
* Visual Studio
* Visual Studio Code
* Postman
* Figma

O CSS foi desenvolvido com bootstrap, sendo responsivo para todos os tamanhos de telas.

## Tempo do Projeto

O projeto foi desenvolvido em 4 (quatro) dias.

## Futuras Implementações

   * Login validado por token de segurança;
   * Aperfeiçoar rotas de home, extrato e transferências como rotas filhas;
   * Aperfeiçoar e criar módulo para componentes;
   * Emissão de comprovante com opção de download;
   * Carregar dados do destinatário antes da confirmação de transferência;
   * Adicionar filtro por período e paginação no extrato;
   * Permitir transferência para outros bancos;
   * Ordenar as operações no extrato de forma decrescente;
   * Implementação de teste automatizados;
