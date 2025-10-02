## API DevBurger
Este projeto é uma API completa para o gerenciamento de um sistema de pedidos de uma Hamburgueria. Foram implementados os principais métodos de **CRUD** e funcionalidades extras como **autenticação de usuários**, **upload de imagens** e **rotas privadas**.

## ✨ Recursos

- **Node.js** (Ambiente de execução)
- **Express** (Framework para criação das rotas)
- **Sequelize** (ORM para comunicação com o banco de dados)
- **PostgreSQL / MySQL / SQLite** (Banco de dados relacional – configurável)
- **Multer** (Upload de imagens para produtos e categorias)
- **JWT** (Autenticação via token)
- **Bcrypt** (Criptografia de senhas)
- **Cors** (Permite integração com o frontend)
- **HTTpie** (Testes de rotas)

## 🧩 Funcionalidades

- **Autenticação de Usuários**  
  - Cadastro e login com criptografia de senha  
  - Geração de token JWT para acesso às rotas privadas

- **CRUD de Produtos e Categorias**  
  - Criar, listar, atualizar e excluir categorias  
  - Criar, listar, atualizar e excluir produtos (com upload de imagem)

- **CRUD de Pedidos**
  - Criar novos pedidos com base nos produtos  
  - Listar todos os pedidos  
  - Atualizar status de pedidos (pendente, em preparo, entregue)

- **Upload de Imagens**
  - Rota para upload de imagens usando `multer`
  - Salvamento em diretório público `/uploads`

- **Middleware de Autenticação**
  - Protege rotas privadas exigindo token JWT válido

## 🛠️ Execução 

Clone este repositório:

```bash
git clone https://github.com/seu-usuario/devburger-api.git
```
Instale as dependências:
```bash
npm install
```
Configure o acesso ao banco de dados no arquivo database.js, por exemplo:
```bash
DB_DIALECT=postgres
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=devburger
JWT_SECRET=sua_chave_secreta
```
Execute as migrações do banco de dados:
```bash
npx sequelize db:migrate
```
Inicie o servidor:
```bash
npm run dev
```
Teste as rotas utilizando Insomnia, Postman ou qualquer cliente HTTP.

 ## 📌 Observações
 
 Este backend foi criado como exercício de prática e servirá de base para projetos mais completos, com integração de frontend e novas funcionalidades.

## 📬 Contato
- [GitHub Profile](https://github.com/VictorBonifac10)
- [LinkedIn](https://www.linkedin.com/in/victor-alves-bonifacio/)
