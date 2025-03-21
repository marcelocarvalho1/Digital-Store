# Drip Store

**Drip Store** é uma loja online especializada na venda de sapatos esportivos, desenvolvida como um projeto prático durante o curso de Desenvolvimento Web Full Stack. O objetivo principal do projeto é aplicar os conceitos e habilidades adquiridos durante o curso, utilizando tecnologias modernas para oferecer uma experiência de compra fluida e interativa.

Disponivel em: https://digital-store-omega.vercel.app/

![image](https://github.com/user-attachments/assets/87e84b6a-6130-4ed2-b1d1-3d913dd22d5e)


### Tecnologias Utilizadas:
<img src="https://media.tenor.com/5xvAYl6_6BMAAAAi/react.gif" width="30" height="auto" style="display: inline-block; margin-right: 10px;" /> <img src="https://media.tenor.com/TReUojNlZ6wAAAAi/js-javascript.gif" width="30" height="auto" style="display: inline-block;" />
<img src="https://i.giphy.com/13FrpeVH09Zrb2.webp" width="30" height="auto" style="display: inline-block; margin-right: 10px;" />
- **Frontend:** React, JavaScript
- **CSS:** Utilizado para a estilização do projeto
- **React Router:** Para a navegação entre páginas
- **Vite:** Ferramenta de build rápida e eficiente para desenvolvimento com React

### Funcionalidades:
- **Catálogo de Produtos:** Exibição de sapatos esportivos com filtros de pesquisa.
- **Carrinho de Compras:** Adicionar, remover e visualizar produtos no carrinho.
- **Autenticação de Usuário:** Páginas de login e cadastro de usuários.
- **Design Responsivo:** Interface adaptável a diferentes tamanhos de tela.

## Como Rodar o Projeto Localmente

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone este repositório:**

   No terminal, execute o comando abaixo para clonar o repositório para sua máquina local:

   ```bash
    git clone https://github.com/marcelocarvalho1/drip-store.git
   
2. Instale as dependências:
- cd drip-store
- npm install

3. Inicie o servidor de desenvolvimento:
  - npm run dev
4. Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.

## Contribuindo
- Faça um fork deste repositório.
- Crie uma nova branch: git checkout -b feature/nova-funcionalidade
- Realize as alterações desejadas.
- Faça commit das suas alterações: git commit -m 'Adicionando nova funcionalidade'
- Envie para o repositório remoto: git push origin feature/nova-funcionalidade
- Abra um pull request para revisão.

## Estrutura do Projeto

A estrutura do projeto foi organizada para garantir uma manutenção fácil e escalabilidade. Abaixo está um resumo das pastas e arquivos principais:

```plaintext
drip-store/
├── public/
│   ├── collection-1.png
│   ├── collection1.png
│   ├── collection-2.png
│   ├── collection2.png
│   ├── collection-3.png
│   ├── collection3.png
│   ├── detalhes.png
│   ├── fundo_sapato.png
│   ├── home-slide-1.jpeg
│   ├── home-slide-2.jpeg
│   ├── home-slide-3.jpeg
│   ├── home-slide-4.jpeg
│   ├── home-slide-5.jpeg
│   ├── home-slide-6.jpeg
│   ├── home-slide-7.jpeg
│   ├── home-slide-8.jpeg
│   ├── icons8-react.svg
│   ├── login.png
│   ├── nikeazul.png
│   ├── nikerosa.png
│   ├── nikeroxo.png
│   ├── produc-image-1.jpeg
│   ├── produc-image-2.jpeg
│   ├── produc-image-3.jpeg
│   ├── produc-image-4.jpeg
│   ├── produc-image-5.jpeg
│   ├── product-thumb-1.jpeg
│   ├── product-thumb-2.jpeg
│   ├── product-thumb-3.jpeg
│   ├── product-thumb-4.jpeg
│   ├── product-thumb-5.jpeg
│   ├── sapato.png
│   ├── silver.png
│   ├── Site.png
│   ├── TenisSlide2.svg
│   └── TenisSlide.svg
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   ├── arrow-bottom.svg
│   │   ├── arrow-left.svg
│   │   ├── arrow-right.svg
│   │   ├── cart-icon.svg
│   │   ├── facebook.svg
│   │   ├── headphones.svg
│   │   ├── instagram.svg
│   │   ├── logo-footer.svg
│   │   ├── logo-header.svg
│   │   ├── pants.svg
│   │   ├── right-arrow.svg
│   │   ├── Search.svg
│   │   ├── sneakers.svg
│   │   ├── star-icon.svg
│   │   ├── tenisCard.svg
│   │   ├── tshirt.svg
│   │   └── twitter.svg
│   ├── components/
│   │   ├── Buttons/
│   │   │   ├── ButtonCard.css
│   │   │   ├── ButtonRosa.css
│   │   │   └── index.jsx
│   │   ├── CardSection/
│   │   │   ├── CardSection.css
│   │   │   └── index.jsx
│   │   ├── Caroussel/
│   │   │   ├── Caroussel.css
│   │   │   └── index.jsx
│   │   ├── ColorsShoes/
│   │   │   ├── ColorShoes.css
│   │   │   └── index.jsx
│   │   ├── DescProduct/
│   │   │   ├── DescProduct.css
│   │   │   └── index.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── index.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── index.jsx
│   │   ├── Header2/
│   │   │   ├── Header2.css
│   │   │   └── index.jsx
│   │   ├── Logo/
│   │   │   └── index.jsx
│   │   ├── NavBar/
│   │   │   ├── index.jsx
│   │   │   └── Navbar.css
│   │   ├── OfertSection/
│   │   │   ├── index.jsx
│   │   │   └── SectionOfert.css
│   │   ├── ProductCard/
│   │   │   ├── index.jsx
│   │   │   └── ProductCard.css
│   │   ├── ProductPage/
│   │   │   ├── index.jsx
│   │   │   └── ProductPage.css
│   │   ├── Section/
│   │   │   ├── index.jsx
│   │   │   └── Section.css
│   │   ├── SectionLogin/
│   │   │   ├── index.jsx
│   │   │   └── SectionLogin.css
│   │   ├── SizeButtonShoes/
│   │   │   ├── index.jsx
│   │   │   └── SizeButtonShoes.css
│   │   ├── Stars/
│   │   │   ├── index.jsx
│   │   │   └── Stars.css
│   │   └── UserCad/
│   │       ├── index.jsx
│   │       └── UserCad.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── CreateAccountPage/
│   │   │   └── index.jsx
│   │   ├── HomePage/
│   │   │   └── index.jsx
│   │   ├── Layout/
│   │   │   └── index.jsx
│   │   ├── LoginPage/
│   │   │   └── Login.jsx
│   │   ├── ProductListingPage/
│   │   │   └── index.jsx
│   │   └── ProductViewPage/
│   │       └── index.jsx
│   └── routes/
│       └── index.jsx
├── vite.config.js
├── eslint.config.js
├── index.html
├── node_modules/
├── package.json
└── package-lock.json
