import React from 'react';
import "../css/TodoSearch.css";
import { TodoContext } from '../TodoContext';


function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    /* Devolvemos un input que contendrá como valor nuestro estado(al valor que guaradamos en nuestro estado con React.useState)  y con cada cambio que haga el usuario llamar a onSetValueChange, que cambiará nuestro estado, y un parrafo con el valor searchValue */
    return[
        <input 
            className='TodoSearch' 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    ];
}

export { TodoSearch };