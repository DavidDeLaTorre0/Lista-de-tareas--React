import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

//Video 16 ---- REACT CONTEXT--  ESTADO COMPARIDO
//Creamos un "puente" que conecte Porvider con consumer, una function

function TodoProvider(props){

        // useLocalStorage viene de HOOKS 
     //Y al recoger esa informacion en App tampoco lo recogemos com array si no como un objeto mirar el hook de localStore
   /*  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]); */
   //renombramos item para llamarlos todos para no cambiar la estructura de la pagina 
   const {
    item : todos,
    saveItem : saveTodos,
    loading,
    error
   }= useLocalStorage('TODOS_V1',[]);

    //Vamos a enviar nuestro estado desde App.js
    const [searchValue, setSearchValue] = React.useState('');

    //por defecto nuestro modal no debe estar abierto
    const [openModal, setOpenModal] = React.useState(false);

    //Queremos que nuestros todo no sean hardcode, lo que queremos hacer es que estos vengan de localStorage, o que los usuarios puedan crearlos dinamicamente,
    //eso significa que nuestros todos tengan que cambiar (creamos un nuevo estado, para cambiar a los valores de alguna variable para que nuestra applicacion reaccione a esos cambios), vamos a crear un nuevo estado para nuestros todos
    // nuevo_estado(todo), nueva funcion para crear los estados(setTodo) = vamos a decirle que queremos un array vacio para que cada ve que queramos que lleguen los usuarios a nuestra aplicacion no tengan todos y los empiecen a crear
    //const [todos, setTodos] = React.useState([]);

    //TodoCounter
    //Queremos saber cuantos todos tenemos y cuantos completados
    //Aqui le vamos a decir que cada vez que se rendericen nuestros componentes, cada vez que cambien nuestros todos o nuestro searchValue vamos a volver a hacer esta cuenta
    /*const completedTodos = todos.filter(todo => todo.completed == true).length(para saber la cantidad de completados); o con !! (doble falso es verdadero)*/
    //filter es para los arrays
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

   /*  Ahora queremos filtrar aquellos todos que concuerden con la busqueda, al momento que empiece a escribir el usuario */
   let searchedTodos = [];

  //No es igual a 1 o menor que 1, haz el if, que contiene todos los TODOs(cuadno no escriban nada)
   if(!searchValue.length >= 1){
      searchedTodos = todos;
   }else{
    //Vamos a introducir en la variable searchedTodos aquellos todos que cumplan lo escrito por el usuario
      searchedTodos = todos.filter(todo =>{
        //por cada uno estamos convirtiendolos a minusculas para analizarlos 
        const todoText = todo.text.toLowerCase();
        // convertimos el texto que escriba el usuario en minusculas para que todo se compare con minusculas
        const searchText = searchValue.toLowerCase();
        
        //Una vez tenemos los dos textos para comparar, hacemos esta condicion:
        //definimos si cada uno de nuestros todos tiene el texto de lo que el usuario está introduciendo 
        //includes pregunta si en alguna parte incluye lo que añadimos nuestro input de busqueda(COMPARA LO QUE TINENE CON EL INPUT DE BUSQUEDA)
        return todoText.includes(searchText);
      } )
      
   }


     
    const addTodo = (text) => {
      
      const newTodos = [...todos];
      newTodos.push({
        completed:false,
        text,
      })
      saveTodos(newTodos);
      };

   //Para TODOs completados, lo que esperamos es que nos envien el texto del TODOs, (recuerda que ese es el identificardor de los TODOs) cada uno de los TODOs tiene un texto distinto 
   const completeTodo = (text) => {
    //buscamos el index de ese TODO dentro del array todos, y la condicion que tiene que cunplir es (por cada todo que analicemos, vamos a ver que el todo.text va a ser igual al texto que recibbimos en la funcion) y cuando se encuentre, vamosa obtener la posicion
    const todoIndex = todos.findIndex(todo => todo.text === text);
    //En esta posicion del array vamos a asignarle el valor true a completed y el texto lo recogemos de esa posicion del array[index].texto (llamando a su propiedad texto)
    
    
    const newTodos = [...todos];
    //Como no podemos entrar directamente a editar nuestro estado, porque si hacemos esto no va a funcionar react, no va a poder hacer los re-renders y todo lo que tienen que hacer react por dentro
    // tenenmos que enviar nuestros cambios a nuestro estado,
    // por eso creamos la variable de newTodos y luego actualizamos con el setTodos
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //Actrualizamos nuestro estado (la lista de todos)
    saveTodos(newTodos);

    //AMBAS SON IGUALES (1 y 2)
    //1-todos[todoIndex].completed = true;
    /*2- todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true
    }; */
   };

   const deleteTodo = (text) => {
   
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //splice sacar "una rebanada de pan" la posicion de donde vamos a cortar, y cuantas tajadas queremos sacar(en este caso solo queremos sacar 1)
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
   };

   //     MANEJO DE EFECTOS
    
   
    //useEffect va ahacer que este console, se muestre despues de haber renderizado todo lo demas, 
    //porque "segun las reglas de cada efecto " la funciuon de este es ejecuitarlo cuando ya react haya renderizado todo lo demás en consola se verian el console log de antes y despues, primero y a continuacion use effect
    //Se ejecuta cada vez que cargamos el componente(Por ejemlo con la accion de escribir en el input)
/*     
    React.useEffect(()=> {
      Si le enviamos un array vacio nuestro codigo solo se va a ejecutar una vez, sin importar las veces que se re-renderice el componente
      console.log('use effect');
   }, []); */
/*    console.log('Reder(antes del useeffect)');
   React.useEffect(()=> {
    Si no queremos que se ejecute todas las veces que se renderice nuestro componente, pero SI cuando haya algun cambio en nuestro estado
    En este caso llamamos a totalTodos, escucharemos desde nuestro efecto todos los cambios que haya en nuestros TODOs
    console.log('use effect');
 }, [totalTodos]);

   console.log('Reder(despues del useeffect)');
 */
 //DESDE AQUI ENVIAMOS LAS VARIABLES HACIA EL CONSUMER (SEGUN ENTIENDO DA IGUAL DESDE DONDE LO LLAMEN E IMPORTEN)
/* 
 <AppUI 
 loading={loading}
 error = {error}
 totalTodos={totalTodos}
 completedTodos={completedTodos} 
 searchValue={searchValue}
 setSearchValue = {setSearchValue}
 searchedTodos={searchedTodos}
 completeTodo={completeTodo} 
 deleteTodo = {deleteTodo}
 /> */

 //YA NO SE ENVIA ASI, SE ENVIA DE LA SIGUIENTE MANERA: ----  Y SE ESTA ENVIANDO A APPUI
    return(
        <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos, 
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>

    );
}
/* 
<TodoContext.Consumer></TodoContext.Consumer> */

export { TodoContext, TodoProvider };