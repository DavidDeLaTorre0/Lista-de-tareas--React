import logo from './logo.svg';
import './App.css';



//Aqui crea el componente App, cuando empieza por mayuscula sabremos que es un componente
//unction App(props) {  aqui podemo recibir las propiedades
function App(props) {
  return (
    //Vengo desde App.js
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.saludo}
          {props.children}
        </a>
      </header>
    </div>
  );
}

/*En app.js : <App>Buenaas</App>
function App(props) {
  return (
    //Vengo desde App.js
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      </header>
    </div>
  );
}

*/

/* recibiendo por parametro propiedades
function App(props) {
  return (
    //Vengo desde App.js
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.saludo}
        </a>
      </header>
    </div>
  );
}

*/

export default App;
