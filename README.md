# 🌐 Projeto de Desenvolvimento Web 2 - C3

Este projeto faz parte da matéria de Desenvolvimento Web 2 e consiste na implementação de uma API utilizando Node.js, TypeScript, Prisma e SQLite, seguindo o padrão MVC e com autenticação via JWT.

## ✨ Funcionalidades

- 📝 Registro de usuários
- 🔑 Login de usuários com emissão de token JWT
- 🔒 Autenticação de requisições protegidas
- 📰 CRUD de posts
- 💬 CRUD de comentários
- 🔗 Relacionamento entre usuários, posts e comentários

## 🛠️ Tecnologias Utilizadas

- 🟩 Node.js
- 🟦 TypeScript
- 🚀 Express
- 🌐 Prisma ORM
- 🗄️ SQLite
- 🔐 JWT

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- 📦 Node.js e npm instalados

### Passos para Rodar o Projeto

1. **Clone o repositório e navegue até a pasta:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:**
    ```env
    DATABASE_URL="file:./dev.db"
    JWT_SECRET="sua_chave_secreta"
    PORT=3000
    ```

4. **Execute as migrações do banco de dados:**
    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    ```

5. **Inicie o servidor:**
    ```bash
    npx ts-node-dev src/server.ts
    ```

   O servidor estará rodando na porta 3000, a menos que você tenha configurado uma porta diferente no arquivo `.env`.
