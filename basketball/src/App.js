
import './App.css';
import React from 'react';
import ResultContainer from './components/ResultContainer';
import FavoritesContainer from './components/FavoritesContainer';

function App() {

  const [inputValue, setInputValue] = React.useState('');
  const [resultArray, setResultArr] = React.useState([]);

  const handleChangeInputValue = (event) => {
    setInputValue(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    return fetch(`https://www.balldontlie.io/api/v1/players?per_page=10&search=${inputValue}`, {})
          .then(res => {
            console.log(inputValue)
            if (res.ok) return res.json()
            return Promise.reject(`Error: ${res.status}`)
          })
          .then(res => {
            console.log(res);
            setResultArr(res.data);
          })
  }

  return (
    <div className="app">
      <form className="app__form" onSubmit={handleSubmit}>
        <input className="app__input" value={inputValue} onChange={handleChangeInputValue}/>
        <button className="app__submit-button">Search</button>
      </form>
      <div className="app__container">
        <ResultContainer players={resultArray}/>
        <FavoritesContainer />
      </div>
    </div>
  );
}

export default App;
