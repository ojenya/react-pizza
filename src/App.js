import React,{useState,useEffect} from 'react';
import axios from 'axios';

import './App.css';
import { Header } from './components';

import { Home, Busket } from './pages';
import { Route } from 'react-router-dom';
function App() {
  const [pizzas, setPizzas] = useState([]);
  const [busket, setBusket] = useState([]);

  const addPizzaToBusket = (pizza) =>{
    const newArr = [...busket,pizza]
    setBusket(newArr)
  }

  const priceAndCount = () => {
    let price = 0;
    let count = 0;
    busket.forEach((pizza, ind) =>  {
      price += pizza.price;
      count = ind + 1;
    })
    return { price, count }
  }

  useEffect(() => {
    
    axios.get('https://react-pizza-server.herokuapp.com/pizza').then(({ data }) => {
      console.log(data)
      setPizzas(data.pizzas);
    });
  }, []);
  console.log(busket)
  return (
    
    <div className="wrapper">
      <Header priceAndCount={priceAndCount()}/>
      <div className="content">
        <Route path="/" render={() => <Home onAddItemsToBusket={addPizzaToBusket} items={pizzas}/>} exact />
        <Route path="/busket" component={Busket} busket={busket} exact />

      </div>
    </div>
  );
}

export default App;
