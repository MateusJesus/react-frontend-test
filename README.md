# iPremios (react/front-end) Test

## Objetivo

Desenvolver um front-end React/PWA para listar os itens de uma API REST e exibir detalhes do item selecionado permitindo busca por nome.

## Descrição

### Tela inicial
![tela_incial](./screens/products.png)

### Tela detalhe de produto
![tela_detalhe_produto](./screens/product-detail.png)


### Stack
- React
- React Hooks
- React Router
- CSS Grid
- CSS Flexbox
  - Deve ser responsivo. Usar a criatividade para a exibição no celular, podendo manter o card de produto na vertical ou adaptar na horizontal.
- Service Worker
  - App deve funcionar off-line (páginas que foram visitadas).

### Escopo da aplicação
- Carregar a tela inicial com todos os produtos e permitir a busca pelo nome do produto.
- Mostrar um indicador de carregamento (loading) enquanto a request estiver em andamento.
- Dividir a lista retornada da API em duas sessões conforme o modelo da tela inicial diferenciando os elementos pela propriedade "type".
- Ao clicar no botão "VEJA MAIS", navegar para a tela de detalhamento do produto selecionado exibindo os dados enviados por parâmetro de navegação.
- Caso o produto selecionado possua a propriedade "voltages", mostrar os botões com as voltagens disponíveis.
- Se o item selecionado possuir a propriedade "disabled" igual a true, mostrar um botão com a frase "PRODUTO INDISPONÍVEL". Senão, mostrar a frase "ADICIONAR AO CARRINHO" no mesmo botão.
- As imagens e fontes necesárias para o projeto estão localizadas no diretório "/assets". 


### Detalhes da API

Endpoint: https://exp-node-store-api.herokuapp.com/getProducts

Tipo de request: POST

Body da request para listar todos os produtos:

{
    "partnerCode": "NPCPONTOFRIO"
}


Exemplo de body da request para filtrar pelo nome do produto:

{
    "partnerCode": "NPCPONTOFRIO",
    "name": "TV"
}


Obs.: Opcionalmente, é possível retornar um item específico fazendo o filtro pelo id conforme o exemplo abaixo:

{
    "partnerCode": "NPCPONTOFRIO",
    "id": 2181876
}


Ao fazer a requisição buscando pelo id é necessário que a propriedade id seja do tipo number e possua obrigatóriamente 7 caracteres. Caso contrário a resposta será uma lista vazia.

### Diferencial

- Usar TypeScript
- Usar Material UI, StyledComponents, SASS ou LESS
- Validar a informação inserida no campo de busca para fazer o filtro por id seguindo as especificações da observação acima.
- Permitir zoom na imagem do produto na tela de detalhes ou expandir ao clicar na imagem.
- Utilizar um carrossel na tela de detalhes do produto mostrando a mesma imagem repetidas vezes.
- Utilizar ícones da biblioteca FontAwesome para React.
- Fazer deploy da aplicação no heroku.


### Executar o projeto

Deverá executar com `yarn start` na porta 3000
