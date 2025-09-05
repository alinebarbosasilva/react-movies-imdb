# Consumo de API com ReactJS

## Visão Geral
Esta aplicação em React consome a API do **OMDb** para permitir que usuários:

- Busquem filmes digitando um termo;
- Visualizem detalhes completos de cada filme;
- Criem uma lista de favoritos persistida no `localStorage`.

## Funcionalidades

1. **Página de Busca**
   - Campo de texto para digitar o termo;
   - Exibe lista de resultados com pôster, título, ano e botão para ver detalhes.

2. **Paginação**
   - Navegação entre páginas de resultados.

3. **Página de Detalhes**
   - Exibe informações completas: diretor, elenco, sinopse, avaliação.

4. **Lista de Favoritos**
   - Botão para adicionar/remover filmes da lista de favoritos;
   - Persistência em `localStorage`.

5. **Tratamento de Erros & Loading**
   - Indicador de carregamento enquanto aguarda resposta;
   - Mensagens de erro quando necessário.

---

## Tecnologias Utilizadas

- ReactJS 18  
- Vite  
- Axios  
- React Router DOM  
- LocalStorage para persistência de favoritos  

## Como Rodar o Projeto

1. **Clonar o repositório**

```bash
git clone <https://github.com/alinebarbosasilva/react-movies-imdb.git>
cd react-movies

Instalar dependências
npm install

Configurar a API OMDb
Crie uma chave gratuita em OMDb API

Abra src/api/omdb.js e substitua sua_chave_omdb pela sua chave.

Rodar o projeto

npm run dev
Abrir no navegador

Geralmente estará disponível em: http://localhost:5173

Uso
Acesse a página de Busca para procurar filmes;

Clique em Detalhes para ver informações completas;

Adicione filmes aos Favoritos clicando no botão correspondente;

Acesse a página de Favoritos para ver e gerenciar sua lista.

