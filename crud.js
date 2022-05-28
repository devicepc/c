
let todoList = ["casa", "perro"];

/* form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
}); */

function addTodo() {
  // get input
  let newTodo = prompt( "Que agrego ? : ");
  // return if nothing was entered
  if (!newTodo) return;
  // add the new task to todo list
  todoList.push(newTodo,
   // completed: false,
  );
  // add the todo list to localstorage
  localStorage.setItem("todos", JSON.stringify(todoList));
  // render todo list
  //render();
 // return todoList;
  console.log(todoList);
}


function deleteTodo(){
    function removeItemFromArr ( arr, item ) {
        let i = arr.indexOf( item );
        arr.splice( i, 1 );
    }
    removeItemFromArr( todoList, item= prompt("que borro? "));
    console.info( todoList );
}

function updateTodo(){
    console.log(todoList);
    function removeItemFromArr ( arr, item ) {
        let i = arr.indexOf( item );
        arr.map( i, 1 );
    }
    removeItemFromArr( todoList, item= prompt("que borro? "));
    console.info( todoList );
}
    /* let idupdate =prompt("que id modifico")
    console.log("id capturado para update "+ idupdate) */
    
/* let elementIndex = todoList.findIndex((obj => obj.id ==idupdate));
let updateName = prompt("porque modificamos?");
todoList[elementIndex] = updateName;
console.log(todoList); */


  
        /* const updatedOSArray = todoList.map(p =>
            p === "perro"
              ? { ...p, name: 'Ubuntu' }
              : p
          );
          
          console.log("After update: ", updatedOSArray); */
    /* let update = arr.indexOf(item);
        arr.splice(update,1);
    }
        update( todoList, item= prompt("que actualizo? "));
    console.info( todoList ); 
    }
    function obtenertodo(){

        let obtenerName = typeof(prompt("id quieres?"));
        console.log("el dato" +todoList.indexOf(obtenerName)        );
    }*/




addTodo();
deleteTodo();
updateTodo();
obtenertodo();