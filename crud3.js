let todos= ["casco"];

function constructor(todos){
    this.todos = todos;
}

function insert(todo){
        this.todo.push({
            id: todo.id,
            task: todo.task,
            completed: todo.completed
        });
    };

    function insertTodo(position, todo){
        console.log("data :"+todos );
        // let position = prompt ("Que id quieres actualizar ?")
       // let dataUpdate = prompt ("Que dato  colocamos ?")
        todos.splice(position, 1, todo);
        console.log(todos);
        console.log(position);
        console.log(todo);
    }


    insertTodo(prompt ("Que id quieres actualizar ?"), prompt ("Que dato  colocamos ?"));