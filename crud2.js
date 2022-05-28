let datos= ["manzana", "mango", "pera"];
let data2=[{id:1, task: "manzana"},{id:2, task: "mango"}, {id:3, task: "pera"}]

function agrego(){
datos.splice(4, 0, "banana");
console.log("el total de la data es: "+datos);
}

function eliminarData (){
    let eliminada = datos.splice(2,1);
    console.log("data eliminada " + eliminada);
}

// encontrar valores 
function buscarvalores(){
    let encontrada = datos.slice(0,2);
    console.log("data encontrada : "+ encontrada);
} 

function Buscar(){
    let encuento = datos.find( datos.id ==1 );
    console.log("buscar 2: "+encuento);
} 
function findandUpdate(id,prop, newValue){
let foundelement = this.data2.find((todo) => {
    return todo.id === id;
});
foundelement[prop] = newValue;

}


function insert(todo){
    this.todo.push({
        id: datos.id,
        task: datos.task,
        completed: datos.completed
    });
};

function actualizarTodo(position, data){
    console.log("data :"+datos );
    datos.splice(position, 1, data);
    console.log(data);
    console.log(position);
    console.log(datos);
}


agrego();
eliminarData();
buscarvalores();

actualizarTodo(prompt ("Que id quieres actualizar ?"), prompt ("Que dato  colocamos ?"));
