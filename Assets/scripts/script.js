/* let 
   form = document.getElementById("form"),
   input = document.getElementById("input"),
   msg = document.getElementById("msg"),
   posts = document.getElementById("posts")
; */

const 
   _ = ( ...v ) => console.log( ...v ),
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v )
;

addEventListener(
   "load",
   () => {

      $( "h1[site]").addEventListener(
         "click",
         () => {
            window.open(
               $( "h1[site]" ).getAttribute( "site" ),
               "_blank"
            );
         }
      );

      form.addEventListener( 
         "submit",
         () => {
            event.preventDefault();
            _( "event: button clicked" );
         
            formValidation();
         }
      );

   }
);

let 
   formValidation = () => {
      if( postInput.value === "" ) {
         msg.innerHTML = "Post cannot be blank";
         _( "failure: ," );
      } else {
         _( "successs" );
         // msg.innerHTML = postInput.value;
         acceptData();
      }
   },
   data = {},
   acceptData = () => {
      data[ "text" ] = postInput.value;
      _( {data} );
      createPost();
   },

   createPost = () => {
      posts.innerHTML += `
      <post>
         <content>
            <p>${ data.text }</p>
         </content>
         <options>
            <i class="fas fa-edit" onClick="editPost( this )"></i>
            <i class="fas fa-trash-alt" onclick="deletePost( this )"></i>
         </options>
      </post>`;
      postInput.value = "";
   },
   deletePost = deleteBtn => {
      deleteBtn.parentElement.parentElement.remove();
   },
   editPost = editBtn => {
      postInput.value = editBtn.parentElement.previousElementSibling.innerText;
      editBtn.parentElement.parentElement.remove();
   }
;