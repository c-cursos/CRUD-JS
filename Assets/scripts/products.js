

"use strict";

let 
   _ = ( ...v ) => console.log( ...v ),
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v )
;

let 
   productCard_Template = ( target, dbObj ) => { 
      return( target.innerHTML += `
      <card>
         <card-img>
            <img src="${ dbObj.cover }" alt="">
         </card-img>
         <home>
            <h3>${ dbObj.name }</h3>
            <h1>$${ dbObj.price }</h1>
            <p>
               ${ dbObj.description }
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

      validateForm(
         [ 
            productName, 
            productPrice, 
            productDescription 
         ],
         { 
            dbObj: productsObj, 
            data2Push: {
               name: productName.value,
               price: productPrice.value,
               description: productDescription.value,
               cover: productImgCover.value,
            },
            db: "Products" 
         },
         [
            productName,
            productPrice,
            productDescription,
            productImgCover,
         ],
         productsTarget
      );

   } );

   createData( productsTarget, productsObj, "Products" );

} );

let 
   productsObj = localStorage.getItem( "Products" ) ? 
      JSON.parse( localStorage.getItem( "Products" ) ) : [],

   validateForm = ( inputsList, acceptData_Obj, inputs2Reset, target2Create ) => {
      inputsList.map(
         v => v.value === "" ? 
            ( v.placeholder = "campo está vazio" ) : (
               acceptData(
                  acceptData_Obj.dbObj, 
                  acceptData_Obj.data2Push, 
                  acceptData_Obj.db,
                  inputs2Reset,
                  target2Create
               )
            )
      );
   },

   acceptData = ( dbObj, data2Push, db, inputs2Reset, target2Create ) => {
      dbObj.push( data2Push );

      localStorage.setItem( 
         db,
         JSON.stringify( dbObj ) 
      );

      resetForm( inputs2Reset );

      createData(
         target2Create, dbObj, db
      );
   },

   createData = ( target, dbObj, db ) => {
      target.innerHTML = "";

      _( "productsOBJ: ", productsObj, "\ndbOBJ: ", dbObj, "\nlocalStorage: db ", localStorage.getItem( db ) );
      dbObj = JSON.parse( localStorage.getItem( db )  );

      _( "\n\n\n== == ==", "productsOBJ: ", productsObj, "\ndbOBJ: ", dbObj, "\nlocalStorage: db ", localStorage.getItem( db ) );

      dbObj.map( k => {
         return( productCard_Template(
            target, k
         ) );
      } );
   },

   resetForm = ( formInputs ) => {
      _( "reseting form" );
      formInputs.map( v => v.value = "" );
   }
;