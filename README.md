# Microserviço de Newsletter (Next.js API)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## 📌 Descrição

Este é um microsserviço desenvolvido com **Next.js** utilizando as **API Routes** para gerenciamento de assinantes e envio de newsletters. Ele é responsável por centralizar a lógica de assinaturas e segmentações de e-mails em uma arquitetura baseada em microsserviços.

**Funcionalidades Principais:**

- ✅ Gerenciamento de Assinantes: criação, atualização, remoção e listagem.
- ✅ Segmentação: agrupamento de assinantes em segmentos específicos.
- ✅ Importação em lote de assinantes.
- ✅ Integração simples via API REST (routes em `/api`).

---

## 🚀 Endpoints

### Gerenciamento de Assinantes

| Método   | Endpoint                                     | Descrição                                                              |
|----------|----------------------------------------------|------------------------------------------------------------------------|
| `POST`   | `/api/subscribers`                           | Cadastrar um novo assinante                                           |
| `GET`    | `/api/subscribers`                           | Listar todos os assinantes (com paginação e filtros opcionais)        |
| `GET`    | `/api/subscribers/:id`                       | Obter os dados de um assinante específico                             |
| `PUT`    | `/api/subscribers/:id`                       | Atualizar os dados de um assinante                                    |
| `DELETE` | `/api/subscribers/:id`                       | Remover um assinante                                                  |
| `POST`   | `/api/subscribers/batch`                     | Importar vários assinantes em lote                                    |
| `POST`   | `/api/subscribers/:id/segments`              | Adicionar assinante a segmentos                                       |
| `DELETE` | `/api/subscribers/:id/segments/:segmentId`   | Remover assinante de um segmento específico                           |

### Segmentos

| Método   | Endpoint                                     | Descrição                                                              |
|----------|----------------------------------------------|------------------------------------------------------------------------|
| `GET`    | `/api/segments`                              | Listar todos os segmentos                                              |
| `POST`   | `/api/segments`                              | Criar um novo segmento                                                 |
| `PUT`    | `/api/segments/:id`                          | Atualizar um segmento                                                  |
| `DELETE` | `/api/segments/:id`                          | Deletar um segmento                                                    |
| `GET`    | `/api/segments/:id/subscribers`              | Listar assinantes de um segmento específico                            |

---

## 🧪 Tecnologias Utilizadas
- **NodeJS v20.18.3**
- **Next.js (API Routes)**
- **TypeScript**
- **Prisma ORM**
- **SQLite** - Desenvolvimento
- **Postgres** - Produção
- **Zod**
- **Jest**
- **Docker**

---

## Começando

Instruções sobre como configurar e executar o projeto localmente.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina. Você pode verificar as versões com os seguintes comandos:

```bash
node -v
npm -v
# ou
yarn --version
```

Recomenda-se usar uma versão LTS (Long Term Support) do Node.js.

Instalação
Clone o repositório:

```Bash
git clone [https://github.com/dolthub/dolt](https://github.com/dolthub/dolt)
cd [nome do seu repositório]
```
Instale as dependências:

Usando npm:

```Bash
npm install
Ou usando yarn:
```

```Bash
yarn install
```
Executando o Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento localmente:

Usando npm:

```Bash
npm run dev
Ou usando yarn:
```

```Bash
yarn dev
```

Abra seu navegador e acesse http://localhost:3000 para ver o projeto em execução.

Construindo para Produção
Para construir o projeto para produção:

Usando npm:

```Bash
npm run build
```

Ou usando yarn:

```Bash
yarn build
```

Este comando irá gerar uma pasta .next com os arquivos otimizados para produção.

Executando em Produção
Para iniciar o servidor em modo de produção (após a construção):

Usando npm:

```Bash
npm run start
```

Ou usando yarn:

```Bash
yarn start
```

Tecnologias Utilizadas
Liste as principais tecnologias e bibliotecas utilizadas no seu projeto.

Exemplo:

Next.js
React
Styled Components (ou outra biblioteca de estilização)
TypeScript (se aplicável)
Prisma (se aplicável)
NextAuth.js (se aplicável)
Estrutura do Projeto
Explique brevemente a estrutura de pastas do seu projeto Next.js, destacando as mais importantes.

Exemplo:

```
nome-do-projeto-api/
├── pages/                  # Diretório principal do Next.js
│   └── api/                # Rotas da API  
│   │   └── v1/             # Versionamento
│   │       ├── user/       # Endpoint
│   │       │    └── route.ts    # Exemplo de rota dinâmica (ex: /api/products/[id].js)
            └── ...           # Outras rotas da API      
│   └── auth/         # Rotas relacionadas à autenticação
│       └── page.ts  # Rota para login de usuários
│           └── signup.js # Rota para cadastro de usuários
│       ├── users/        # Rotas relacionadas a usuários
│       │   └── index.js  # Rota para listar usuários (ex: GET /api/users)
│       │   └── [id].js   # Rota para um usuário específico (ex: GET /api/users/1)
│       └── ...           # Outras rotas da API
├── lib/                 # Código utilitário e funções reutilizáveis
│   ├── db.js            # Lógica de conexão com o banco de dados
│   ├── auth.js          # Funções relacionadas à autenticação (verificação de token, etc.)
│   ├── utils.js         # Funções utilitárias gerais (validações, formatações, etc.)
├── middlewares/         # Middlewares para as rotas da API
│   └── auth.js          # Middleware de autenticação para proteger rotas
│   └── validation.js    # Middleware para validar os dados de entrada das requisições
├── models/              # Definição dos modelos de dados (se usar um ORM/ODM como Prisma, Sequelize, Mongoose)
│   └── User.js          # Modelo para a entidade de Usuário
│   └── Product.js       # Modelo para a entidade de Produto
├── schemas/             # Schemas de validação de dados (usando bibliotecas como Joi, Zod)
│   └── user.js          # Schema para validar dados de usuário (criação, atualização)
│   └── product.js       # Schema para validar dados de produto
├── tests/               # Testes da API
│   └── api/             # Testes específicos para as rotas da API
│       ├── auth.test.js # Testes para as rotas de autenticação
│       ├── users.test.js# Testes para as rotas de usuários
├── .env.local           # Arquivo para variáveis de ambiente locais (não versionado)
├── .gitignore           # Especifica arquivos e diretórios que o Git deve ignorar
├── next.config.js       # Arquivo de configuração do Next.js
├── package.json         # Arquivo de manifesto do Node.js (dependências, scripts, etc.)
├── README.md            # Arquivo de documentação principal do projeto
└── tsconfig.json        # Arquivo de configuração do TypeScript (se o projeto usar TypeScript)
```

Deploy
Instruções sobre como fazer o deploy do seu projeto. Mencione as plataformas recomendadas ou as etapas gerais.

Exemplo:

Este projeto pode ser facilmente deployado em plataformas como:

Vercel (recomendado para Next.js)
Netlify
AWS Amplify
Render

Siga a documentação da plataforma escolhida para configurar o deploy.

---
