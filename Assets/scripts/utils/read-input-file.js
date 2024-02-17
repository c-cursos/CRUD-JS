

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