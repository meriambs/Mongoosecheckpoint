
// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBBar from './component/NavBBar';
// import  ShoppingList  from "./component/ShoppingList";
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBBar/>
       {/* <ShoppingList/> */}
        <TodoInput style={{ marginBottom:"20px"}}/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
