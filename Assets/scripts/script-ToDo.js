

/* 
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
 */
let _ = ( ...v ) => console.log( ...v );

formModal.addEventListener(
   "submit",
   () => {
      event.preventDefault();
      formValidation();
   }
);

function formValidation() {
   if( modalTextInput.value === "") {
      _( "failure" );
      modalTextInput.style.border = "3px solid #f55";
      taskTextMsg.innerHTML = "<t>Task cannot be blank</t>";
   } else {
      _( "success" );
      acceptData();
      // modal.style.display = "none";
      _( localStorage.getItem( "data" ) );
   }
}

let 
   resetForm = () => {
      modalTextInput.value = "";
      modalDateInput.value = "";
      modalDescriptionInput.value = "";
   },
   data = [],
   acceptData = () => {
      data.push(
         {
            text: modalTextInput.value,
            date: modalDateInput.value,
            description: modalDescriptionInput.value,
         }
      );
      localStorage.setItem(
         "data",
         JSON.stringify( data )
      );
      _( {data} );
      createTasks();
   },
   createTasks = () => {
      tasks.innerHTML = "";
      data.map( ( x, y ) => {
         return(
            tasks.innerHTML += `
               <task id="task${x}">
                  <t>${ x.text }</t>
                  <small>${ x.date }</small>
                  <p>${ x.description }</p>
                  <task-options>
                     <i onClick="editTask( this )" class="fas fa-edit"></i>
                     <i onClick="deleteTask( this ); createTasks()" class="fas fa-trash-alt"></i>
                  </task-options>
               </task>
            `
         );
      } );
      resetForm();
   },
   deleteTask = deleteBtn => {
      deleteBtn.parentElement.parentElement.remove();
    
      data.splice(
         deleteBtn.parentElement.parentElement.id, 
         1
      );
    
      localStorage.setItem(
         "data", 
         JSON.stringify( data )
      );
    
      _( {data} );
   }
;