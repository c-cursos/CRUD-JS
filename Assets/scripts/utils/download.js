

// function download( content, mimeType, filename ) {
//    var 
//       blob = new Blob( [content], { type: mimeType } ),
//       url = URL.createObjectURL( blob ),
//       alvo = document.body.querySelector( "clb" ).querySelector( "a" )
//    ;
//    alvo.setAttribute( "href", url );
//    alvo.setAttribute( "download", filename );
//    alvo.click();
// }

// let 
//    blob = new Blob( 
//       [ JSON.parse( localStorage.getItem( "Users" ) ) ], 
//       { type: "text/plain" } 
//    ),
//    url = URL.createObjectURL( blob )
// ;

// downloadBtn.setAttribute(    
//    "href", url 
// );

downloadBtn.setAttribute(    
   "href", 
   URL.createObjectURL(
      new Blob(
         [ localStorage.getItem( "Users" ) ],
         { type: "text/plain" }
      )
   )
);

