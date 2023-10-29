# Adrasteia API

Desafio desenvolvido como parte das etapas de seleção a vaga de Desenvolvedor Fullstack Jr na da [Senior](https://www.senior.com.br/).
O desafio se baseia em uma **Aplicação de fluxo de aprovação para compra de material de escritótio**. O projeto possui três cenarios: Solicitante, Almoxarife e Administrativo.
O Solicitante é responsável por criar as solicitações de compras de materia, informando obrigatoriamente seu nome, descrição do material e valor. Com a solicitação gerada, o Almoxarife é responsável por analisar a solicitação aberta e decidir se aprova ou reprova. E por fim, o Administrativo é um usuário do setor que pode consultar o fluxo de todas as solicitações realizadas.

> Projeto batisado com o nomen do menor dos satélites de Júpiter do Grupo Amalteia.

> Adrasteia, na mitologia grega, é uma figura da mitologia grega, conhecida como a deusa da justiça e da vingança divina.

## Requisitos

- NodeJS v16+
- Banco de dados Microsoft SQL Server
- _Yarn (opcional)_

### Tecnologias utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Typescript](https://www.typescriptlang.org/)

## Preparando o ambiente

Com o projeto na sua máquina, crie um arquivo _.env_ e copie o conteúdo do arquivo _.env.example_ para o arquivo criado alterando de acordo com seu usuário e senha.

Com essa primeira configuração, execute o comando abaixo para instalar as dependências:

```sh
npm install
```

ou se utiliza yarn

```sh
yarn
```

Com as dependências instaladas, o comando de criação do banco de dados (certifique-se que o banco de dados esteja em execução, caso contrário o comando falhará):

```sh
npm run db:generate
```

ou se utiliza yarn

```sh
yarn db:generate
```

Este comando vai pedir para da nome a _migrate_ (opcional).
Após isso, a aplicação já estará pronta para uso. Execute o seguinte comando para inicalizar a aplicação:

```sh
npm run start:dev
```

ou se utiliza yarn

```sh
yarn start:dev
```

A api será inicializada na porta 3000.

## Instrução de uso

A api pode ser testata utilizando uma aplicação de teste de api como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

### Testando as rotas

#### Cenário do Solicitante

Para testar o cenário do solicitante que cria uma solicitação, envie uma requisição do tipo POST para o endereço `http://localhost:3000/solicitacao` utilizando o modelo:

```json
{
  "solicitante": "nome do solicitante",
  "descricao": "Descrição do material",
  "preco": "R$ 12,34"
}
```

> OBS1: Todos esses campos estão sendo validados, são todos obrigatórios para criar uma solicitação.

> OBS2: Os campos `solicitante` e `descrica` necessita de no mínimo 3 caracteres para validar.

> OBS3: O campo preco deve respesitar o formato `R$ xxxx,xx` ou `R$ x` ou `R$ x.xxx,xx`, caso contrário a validação não vai permitir gerar a solicitação.

#### Cenário do Almoxarife

Para este cenário, faça uma requisição do tipo PATCH na URL `http://localhost:3000/solicitacao/:id` substituindo `:d` pelo id da solicitação pendende. É possivel verificar todas as solicitação pendentes fazendo uma requisição GET na URL `http://localhost:3000/solicitacao/almoxarife`. para aprovar ou reprovar a solicitação, utilize o seguinte modelo:

```json
{
  "aprocacao": "aprovado",
  "observacao": ""
}
```

> OBS1: O campo `aprovacao` está validado apenas para aceitar os valor "aprovado" ou "reprovado". Este campo é obrigatorio para que a requisição seja efetuada.

> OBS2: o campo `observacao` não é necessário se a solicitção for "aprovado", mas se `aprovacao` for "reprovado", a validação do campo `observacao` está configurado para ser obrigatório e é necessário ter no mínimo 10 caracteres.

#### Cenário Administrativo

Este cenário pode ser testado passando uma requisição GET para a rota `http://localhost:3000/solicitacao` onde será listado todas as solicitações.

## Autor

Criado por José Pereira Macedo, vulgo "ArseniumGX".

## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE).
