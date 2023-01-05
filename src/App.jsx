import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import PrintBeer from "./assets/components/PrintBeer"

function App() {
  const [cocktails, setCocktails] = useState([])
  const [name, setName] = useState("");

  const getData = () => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      )
      .then((resp) => {
        console.log(resp.data.drinks);
        setCocktails(resp.data.drinks);
      })
      .catch((error) => {
        console.error(error);
        setCocktails([]);
      });
  };
  const searchCocktail = (e) => {
    e.preventDefault();
    setName(e.target[0].value.toLowerCase());
  };

  useEffect(() => {
    getData();
  }, [name]);

  return (
    <div className="App">  
    <form onSubmit={(e) => searchCocktail(e)}>
        <input type="text" placeholder="Buscar por nombre" />
        <button type="submit">Buscar</button>
    </form>
    <>
    <hr/>
    </>

      <div className='drink_content'>
      {
        cocktails.map((cocktail, index) => (
          <PrintBeer key={`cocktail-${index}`} data={cocktail} />
        ))
      }     
        </div> 
    </div>
  )
}

export default App
