
---

# Cadastro de Produtos

Este projeto é uma API para cadastro de produtos de diferentes tipos, incluindo produtos simples, digitais, configuráveis e agrupados. Siga as instruções abaixo para configurar e executar o projeto.

## Requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) para gerenciamento de contêineres
- [npm](https://www.npmjs.com/) para gerenciamento de dependências

## Passo a Passo

1. **Clone o Repositório**:

    Clone o repositório do projeto para o seu computador:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd <NOME_DO_DIRETORIO>
    ```

2. **Configure as Variáveis de Ambiente**:

    Faça uma cópia do arquivo `.env.example` e renomeie para `.env`:

    ```bash
    cp .env.example .env
    ```

    Edite o arquivo `.env` conforme necessário para configurar as variáveis de ambiente do projeto, como as configurações de banco de dados.

3. **Instale as Dependências**:

    Instale as dependências do projeto usando `npm`:

    ```bash
    npm install
    ```

4. **Inicie o Docker Compose**:

    Inicie os serviços definidos no arquivo `docker-compose.yml` usando Docker Compose:

    ```bash
    docker compose up
    ```

    Os serviços, incluindo o banco de dados, serão iniciados em contêineres.

5. **Inicie a Aplicação**:

    Inicie a aplicação usando o comando `npm`:

    ```bash
    npm run start
    ```

    A aplicação será iniciada e estará disponível em `http://localhost:3000`.

6. **Execute as Migrações**:

    Execute as migrações do banco de dados para criar as tabelas necessárias:

    ```bash
    npm run migration:run
    ```

7. **Testar a API**:

    Agora você pode acessar a API no navegador ou em uma ferramenta de API (como Postman ou cURL):

    ```bash
    http://localhost:3000/api
    ```

    Sinta-se à vontade para testar os endpoints da API, conforme documentado.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a licença [MIT](LICENSE).

---
