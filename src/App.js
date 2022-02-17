import './App.css';
import { meals } from './meals'
import Meal from './Meal';
import Buttons from './Buttons';
import { useState } from 'react';

function App() {
  const [all, setAll] = useState(1)
  const [breakfast, setBreakfast] = useState(0)
  const [launch, setLaunch] = useState(0)
  const [shakes, setShakes] = useState(0)

  const All = () => {
    setAll(1)
    setBreakfast(0)
    setLaunch(0)
    setShakes(0)
  }

  const Breakfast = () => {
    setAll(0)
    setBreakfast(1)
    setLaunch(0)
    setShakes(0)
  }

  const Launch = () => {
    setAll(0)
    setBreakfast(0)
    setLaunch(1)
    setShakes(0)
  }

  const Shakes = () => {
    setAll(0)
    setBreakfast(0)
    setLaunch(0)
    setShakes(1)
  }

  return (
    <main className="container">
      <h1 className='title'>our menu</h1>
      <Buttons All={All} Breakfast={Breakfast} Launch={Launch} Shakes={Shakes} />
      <div className="meals-wrapper">
        {
          all ? meals.map((food) => <Meal key={food.id} {...food} />) :
            breakfast ? meals.filter((food) => food.type === "breakfast").map((food) => <Meal key={food.id} {...food} />) :
              launch ? meals.filter((food) => food.type === "launch").map((food) => <Meal key={food.id} {...food} />) :
                shakes ? meals.filter((food) => food.type === "shakes").map((food) => <Meal key={food.id} {...food} />) : ""
        }
      </div>
    </main>
  );
}

export default App;
