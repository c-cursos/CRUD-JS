

"use strict";

let 
   _ = ( ...v ) => console.log( ...v ),
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v )
;

let 
   productCard_Template = `
   <card>
      <card-img>
         <img src="https://livrosqueajudam.com.br/wp-content/uploads/2017/09/resenha-livro-a-magia-2-990x557.jpg" alt="">
      </card-img>
      <home>
         <h3>Nome do produto</h3>
         <h1>$49.95</h1>
         <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Atque similique delectus, 
            ipsum quo consectetur soluta incidunt esse!
         </p>
         <options>
            <product-color></product-color>
            <product-color></product-color>
         </options>
         <footer>
            <button>editar</button>
            <button>deletar</button>
         </footer>
      </home>
   </card>
   `
;

addEventListener( "load", () => {
   
} );

/* 
id
nome do produto
fotos[
   capa, hover, frente, costas, left, right, completo
]
preço
descrição
cores[]
*/
let crud = [
   productsObj = [],

   validateForm = () => {

      FormProducts.addEventListener( "submit", () => {
         [ productName, productPrice, productDescription, 
            productColors, productImages ].map(
            v => v.value === "" ? 
               ( v.placeholder = "campo está vazio" ) : (
                  acceptData()
               )
         );
      } );
   },

   AcceptData = () => {
      let data;
   }
];