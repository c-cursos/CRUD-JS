

"use strict";

let 
   _ = ( ...v ) => console.log( ...v ),
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v )
;

let 
   /* productCard_Template = `
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
; */
   productCard_Template = (
      innerHTML, imgCover, name, price, description, colors
   ) => { 
      return( innerHTML.innerHTML += `
      <card>
         <card-img>
            <img src="${ imgCover }" alt="">
         </card-img>
         <home>
            <h3>${ name }</h3>
            <h1>$${ price }</h1>
            <p>
               ${ description }
            </p>
            <options>
               <product-color bg=""></product-color>
               <product-color bg=""></product-color>
            </options>
            <footer>
               <button>editar</button>
               <button>deletar</button>
            </footer>
         </home>
      </card>
   ` ); }
;

addEventListener( "load", () => {
   productForm.addEventListener( "submit", () => {
      event.preventDefault();

      validateForm();

   } );
   createData();
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
let 
   productsObj = [],
   inputs1 = [
      productName,
      productPrice,
      productDescription,
      productImgCover,
   ],
   // inputs2 = [
   //    productImgHover,
   //    productImgFrente,
   //    productImgCostas,
   //    productImgRight,
   //    productImgCompleto,
   // ],
   // inputs = [ ...inputs1, ...inputs2 ],

   validateForm = () => {
      [ productName, 
         productPrice, 
         productDescription ].map(
         v => v.value === "" ? 
            ( v.placeholder = "campo está vazio" ) : (
               acceptData()
            )
      );
   },

   acceptData = () => {

      productsObj.push( {
         name: productName.value,
         price: productPrice.value,
         description: productDescription.value,
         cover: productImgCover.value,
         // colors: productColor.value,
         // images: [ 
         // productImgCover.value,
         // productImgHover.value,
         // productImgFrente.value,
         // productImgCostas.value,
         // productImgRight.value,
         // productImgCompleto.value,
         // ],
      } );

      localStorage.setItem( 
         "Products",
         JSON.stringify( productsObj ) 
      );

      resetForm();
   },

   createData = () => {
      productsPart.innerHTML = "";

      productsObj = JSON.parse( "Products" );

      productsObj.map(
         ( k, v ) => {
            return(
               productCard_Template(
                  productsPart, k.imgCover, k.name, k.price, k.description
               )
            );
         }
      );
   },



   resetForm = () => {
      _( "reseting form" );
      inputs1.map(
         v => v.value = ""
      );
   }
;