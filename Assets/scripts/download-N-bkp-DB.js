

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

/* == [ backup Users db ]
== == == == == == == == == */
/* downloadBtn.addEventListener(
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
); */