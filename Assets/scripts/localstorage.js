

"use strict";
let 
   _ = ( ...v ) => console.log( ...v ),
   Users = JSON.parse( localStorage.getItem( "Users" ) ) || [],
   cardTemplate = ( parent, name, password, email ) => { 
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
                  <t>${ password }</t>
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
}

function createUserCard() {
   usersSection.innerHTML = "";

   Users.map( ( k, v ) => {
      _( "Users.map( ( k, v ) )" );
      return( 
         cardTemplate( 
            usersSection, 
            k.name, k.password, k.email 
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
function DownloadDBFile( downloadBtn, nameForDBFile, DB ) {

   /* == == == == == == == == ==
   downloadBtn: button for download and backup db file
   nameForDBFile: name for db file
   DB: Database
   == == == == == == == == == */

   downloadBtn.addEventListener( "click", () => {

      nameForDBFile.value !== "" ?
         _( downloadBtn.setAttribute( 
            "download", 
            `${ nameForDBFile.value }.json` 
         ) ) : ( downloadBtn.setAttribute( 
            "download", 
            `${ nameForDBFile.value = "db-backup-file" }.json` 
         ) );

      downloadBtn.setAttribute(    
         "href", 
         URL.createObjectURL(
            new Blob(
               [ localStorage.getItem( DB ) ],
               { type: "text/plain" }
            )
         )
      );

   } );
}

DownloadDBFile(
   downloadBtn,
   donwloadUserDBInput,
   "Users"
);

/* == [ restore Users backup db ] 
== == == == == == == == == */
function ReadInputFile( input, btn, userDB_Ob, userDB ) {

   /* == == == == == == == == == 
   input: input were locate file with db backedup
   btn: button used to start 
   userDB_Ob: js variable that holds database converted to object
   userDB: database that stores the data
   == == == == == == == == == */

   btn.addEventListener( "click", () => {
   
      if( input.files.length > 0 ) {
         let 
            fileReader = new FileReader()
         ;
   
         fileReader.addEventListener(
            "load",
            () => {
               let result = JSON.parse( 
                  fileReader.result 
               );
               localStorage.setItem( 
                  userDB, 
                  JSON.stringify( result ) 
               );
               userDB_Ob = JSON.parse( 
                  localStorage.getItem( userDB ) 
               );
            }
         );
               
         fileReader.readAsText( 
            input.files[0] 
         );
      }
      createUserCard();
   } );
}

ReadInputFile(
   UsersRestoreFileInput, 
   UsersRestoreFileBtn,
   Users,
   "Users"
);