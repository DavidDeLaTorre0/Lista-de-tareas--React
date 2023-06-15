import React from "react";

//CUSTOM REACT HOOK PARA LOCAL STORAGE
//TODOS LOS HOOKS EN REACT EMPIEZAN POR use
function useLocalStorage(itemName, initialValue){

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item,setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {

      try{
            //Mirar Doc para el curso LOCAL STORAGE----PERSISTENCIA DE DATOS
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
    
    
            //Verificamos si no existe (puede ser null, undefined, false , o un string vacio), entramos al if
            if(!localStorageItem){
              //Para meter un array vacio no podemod meterlo asi: localStorage.setItem('TODOS_V1',[]); ya que lo toma como un string vacio 
              localStorage.setItem(itemName,JSON.stringify(initialValue));
              parsedItem = initialValue;
            }
            //En caso de haber algo en localStorage
            else{
              parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setLoading(false);
            
      }catch (error){
        setError(true);
      }
        
    }, 2000);
  });
  
        //Aun teniendo guardados en el localStore los TODOs, si yo los borro todos y recargo, los vuelve a mostrar, por eso tenemos que guardar ese estado
        //PARA PERSISTIR LA INFORMACION 
        //vewr video 13
    const saveItem = (newItem) => {

      try{
              //Hay que convertirlos en un string todos los TODOs
        const stringifiedItem = JSON.stringify(newItem);
        //Introducimos la informacion en el LocalStorage
        localStorage.setItem(itemName, stringifiedItem);

        //Ademas de guardarlo en localStorage, para que cuando recarguemos la pagina veamos la informacion correcta, ademas podemos evitar que la cargue la pagina
        //Lamamos a modificar el estado con el metodo setTodos y le enviamos nuestro nuevo array de Todos
        //--- OJO--- no enviar el string del array porque nuestro estado no necesita strings, esto es solo en locaStorage
        setItem(newItem);
      }catch(error){
        setError(true);
      }

    };

    //Si tenemos dos elementos un estado y su actualizador podemos enviar un array de dos posiciones pero si tenemos mas estados en ese mismo custom react hook ya no es recomendable y hay que pasarlo como objeto
    //return[item,saveItem];
 return{item, saveItem, loading, error};
   //Y al recoger esa informacion en App tampoco lo recogemos com array si no como un objeto mirar function App() en APP.js
}

export { useLocalStorage }
