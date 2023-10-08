import './App.css';
import Fries from './Fries'
import LoginForm from './LoginForm';
import Die from './Die'
import DiceRolls from './DiceRolls';
import RandomPokemon from './RandomPokemon';
import Greeter from './Greeter';
export default function App() {
  return (
    <div>
   <Fries/>
   <Fries/>
   <LoginForm/>
   <Die/>
   <DiceRolls/>
   <RandomPokemon/>
   <Greeter name = "Bill"/>
   </div>
  );
}


