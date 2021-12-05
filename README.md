<h1 align="center">
  <img src="public/img/logo.png" alt="logo" height="64px" width="auto">
</h1>

<p align="center"> :two_hearts: A sua doação importa!</p>

<p align="center">
  <img src="https://img.shields.io/badge/made%20by-Geovane%20Borba-ff4f4f?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/geovaneborba/maratona-dev-3.0?color=ff4f4f&style=flat-square">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/geovaneborba/maratona-dev-3.0?color=ff4f4f&style=flat-square">
  <a href="https://github.com/geovaneborba/maratona-dev-3.0/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/geovaneborba/maratona-dev-3.0?color=ff4f4f&style=flat-square">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-ff4f4f?style=flat-square">
  </a>
</p>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;
</p>

<h1 align="center">
    <img alt="Doe" src="https://user-images.githubusercontent.com/33469722/144740144-7c5f02dd-3088-4650-a560-98471131f584.gif" />
</h1>

## :page_with_curl: Sobre
O Doe é uma aplicação web para cadastrar doações de sangue, desenvolvido durante a MaratonaDev 3.0 da [Rocketseat](https://rocketseat.com.br/).

## :rocket: Tecnologias
- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [Javascript](https://devdocs.io/javascript/)
- [Node.JS](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Docker**](https://www.docker.com/) rodando um container PostgreSQL.

## :rocket: Começando
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/geovaneborba/maratona-dev-3.0.git

  # Entrar no diretório:
  $ cd maratona-dev-3.0
```

## :gear: Configurando o Banco de Dados
```powershell
  # Para utilizar o container do Postgres
  docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

  # Iniciar o Postgres
  docker start postgres
```
<p>Utilize o Postbird ou um Postgres Client de sua preferência para criar o banco e a tabela de doadores: </p>

```sql
  # Criando o banco
  CREATE DATABASE doe;

  # Criando a tabela de doadores
  CREATE TABLE donors(
    id_donor SERIAL, 
    name varchar(50) not null, 
    email varchar(50) not null, 
    blood varchar(5) not null,
    constraint pk_donors primary key(id_donor)
  );
```

```powershell
  # Entrar no diretório:
  $ cd src/config

  # Altere o arquivo db.js
  $ code db.js

```

```js
  //Conexão banco de dados
  const pool = new Client({
	host: 'localhost',
	database: 'doe', // Nome do banco
	user: 'postgres', // Usuário
	password: 'docker', // Senha
	port: 5432, // Porta
})
```

## :gear: Iniciando back-end
```bash
  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn dev 
```
Acesse: http://localhost:3001 com o seu navegador preferido!

Feito com ❤️ por Geovane Borba 👋🏻 [Get in touch!](https://github.com/geovaneborba)
