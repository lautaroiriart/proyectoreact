import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <React.Fragment >
      
      <NavBar/>
      <div className='divApp'>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </div>
    </React.Fragment>
  );
}

export default App;
