<h1 align="center"><img src="./public/icon.svg" width="22" /> Ignite Call </h1>

<p align="center"><i>Agendamentos descomplicados com integração ao Google Calendar. Conecte seu calendário, defina sua disponibilidade e agende com facilidade.</i>
  <br/><br/>
  <img src="https://img.shields.io/github/last-commit/joschonarth/ignite-call?style=for-the-badge&color=1F8459&labelColor=1C1E26" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/joschonarth/ignite-call?style=for-the-badge&color=1F8459&labelColor=1C1E26" alt="top-language">
  <img src="https://img.shields.io/github/languages/count/joschonarth/ignite-call?style=for-the-badge&color=1F8459&labelColor=1C1E26" alt="languages-count">
</p>

<img width="1365" height="767" alt="home" src="https://github.com/user-attachments/assets/10062adf-32e7-4fb4-952c-05a7328b1e48" />

## 📖 Visão Geral

**Ignite Call** é uma aplicação web desenvolvida com **Next.js** para facilitar o agendamento de compromissos. Os usuários podem conectar seu **Google Calendar**, definir horários disponíveis e permitir que outras pessoas reservem horários de forma automática e organizada.

## 🛠️ Tecnologias Utilizadas

- ⚙️ **Next.js** – Framework React com suporte a SSR e SSG.
- 🟦 **TypeScript** – Superset do JavaScript com tipagem estática.
- 🔐 **NextAuth** – Autenticação via Google OAuth.
- 🗓️ **Google APIs** – Integração com o Google Calendar.
- 🧬 **Prisma** – ORM moderno e flexível com suporte a banco de dados SQL.
- 🐘 **PostgreSQL** - Banco de dados relacional.
- 💎 **Zod** - Biblioteca de validação de dados.
- 💡 **React Hook Form** – Formulários com validação robusta.
- 🌐 **React Query** – Gerenciamento eficiente de estado assíncrono.
- 🗓️ **Day.js** – Manipulação de datas com timezone e formato.
- 💅 **@ignite-ui/react** – Design System com componentes estilizados.
- 🧠 **Next SEO** – SEO otimizado com metadados dinâmicos.
- 🧹 **ESLint** – Linter para manter a qualidade e consistência do código.

## ⚙️ Funcionalidades

- 🔐 **Login com Google**: autenticação segura com OAuth 2.0.
- 🗓️ **Definição de disponibilidade**: configure dias e horários livres.
- 📅 **Integração com Google Calendar**: eventos criados diretamente no seu calendário.

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos

- 🟩 [Node.js 20+](https://nodejs.org/)
- 📦 [npm 10+](https://www.npmjs.com/)
- 🐳 [Docker + Docker Compose](https://www.docker.com/)

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/ignite-call.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd ignite-call
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente:

    ```bash
    cp .env.example .env  
    ```

### ▶️ Execução

1. Inicie o banco de dados PostgreSQL utilizando o Docker:

    ```bash
    docker-compose up -d
    ```

2. Execute as migrações do banco de dados:

    ```bash
    npx prisma migrate dev
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

## 🔐 Como obter as credenciais do Google OAuth

Para que o login e a integração com o Google Calendar funcionem corretamente, você precisará criar um projeto no Google Cloud Console e configurar as credenciais OAuth 2.0.

### 📌 Passos para configurar

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um existente.
3. No menu lateral, vá até **APIs e serviços > Tela de consentimento OAuth**:
   - Escolha o tipo **Externo**.
   - Preencha as informações básicas da tela de consentimento (nome do app, email de suporte, etc).
   - Adicione os escopos:
     - `.../auth/calendar`
     - `.../auth/calendar.events`
     - `.../auth/userinfo.email`
     - `.../auth/userinfo.profile`

4. Vá para **APIs e serviços > Credenciais** e clique em **Criar credencial > ID do cliente OAuth**.
5. Escolha **Aplicativo da Web** e configure os dados:
   - **URIs autorizados de redirecionamento**:
     - Em ambiente local: `http://localhost:3000/api/auth/callback/google`

6. Após a criação, copie os valores gerados e insira no seu `.env.local`:

```env
GOOGLE_CLIENT_ID=seu_client_id
GOOGLE_CLIENT_SECRET=sua_client_secret
```

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias ou correções. 💡

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub!

## 📞 Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joschonarth/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)
