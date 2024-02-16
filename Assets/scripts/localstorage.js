

"use strict";
let 
   _ = ( ...v ) => console.log( ...v ),
   Users = JSON.parse( localStorage.getItem( "Users" ) ) || [],
   cardTemplate = ( parent, name, pwd, email ) => { 
      return parent.innerHTML += `
         <card>
            <header>
               <user name>${ name }</user>
            </header>
            <bd>
               <user email>
                  <b>email</b>
                  <t>${ email }</t>
               </user>
               <user password>
                  <b>password</b>
                  <t>${ pwd }</t>
               </user>
            </bd>
         </card>
      `; 
   }
;

addEventListener(
   "load",
   () => {
      let 
         Users = []
      ;

      formUser.addEventListener(
         "submit",
         () => {
            event.preventDefault();
            validateForm();
         }
      );

      let UsersList = JSON.parse( localStorage.getItem( "Users" ) );

      UsersList.find( v => {
         if( v.name == "Noely Oliveira Gangello" ) {
            _( `filter: ${ v.id }` );
            _( {v} );
         }
      } );

   }
);
   
   
/* == [ CRUD ] 
== == == == == == == == == */
function validateForm() {
   [ userNameInput, 
      userPasswordInput, 
      userEmailInput ].map(
      v => v.value === "" ?
         (
            ( v.placeholder = "Esse campo está vazio" ) &&
            v.setAttribute( "class", "danger" )
         ) :
         acceptData()
   );
}

function acceptData() {
   Users.push( 
      {
         id: `User-${ Math.round( Math.random() * 99999999 ) }-${ Users.length + 1 }-${ Math.round( Math.random() * 99999999 ) }-${Users.length}`,
         name: userNameInput.value.trim(),
         password: userPasswordInput.value.trim(),
         email: userEmailInput.value.trim(),
      }
   );

   localStorage.setItem( 
      "Users", 
      JSON.stringify( Users ) 
   );
   createUserCard();
   // resetForm();
}

function createUserCard() {
   usersSection.innerHTML = "";

   Users.map( ( k, v ) => {
      _( "Users.map( ( k, v ) )" );
      return( 
         cardTemplate( 
            usersSection, 
            k.name, k.pwd, k.email 
         )
      );
   } );
   resetForm();
}

let resetForm = () => {
   [ userNameInput, 
      userEmailInput,
      userPasswordInput ].map(
      v => v.value = ""
   );
};

createUserCard();

/* == [ backup Users db ]
== == == == == == == == == */
downloadBtn.addEventListener(
   "click",
   () => {

      donwloadUserDBInput.value === "" ?
         _( "" ) : ( downloadBtn.setAttribute( 
            "download", 
            `${ donwloadUserDBInput.value }.json` 
         ) );

      downloadBtn.setAttribute(    
         "href", 
         URL.createObjectURL(
            new Blob(
               [ localStorage.getItem( "Users" ) ],
               { type: "text/plain" }
            )
         )
      );

   }
);