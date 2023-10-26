import './App.css';
import Fries from './Fries'
import LoginForm from './LoginForm';
import Die from './Die'
import DiceRolls from './DiceRolls';
import RandomPokemon from './RandomPokemon';
import Greeter from './Greeter';
import DieeRolls from './DieeRolls';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
const data = [
{item : "eggs" , quantity : 12 , completed : false} , 
 {item : "milk" , quantity : 1 , completed : true} ,
 {item : "chickenbreasts" , quantity : 4 , completed : false},
 {item : "carrots" , quantity : 6 , completed : false}




] ;





// const styles = {color:"purple" , fontSize : "10px"};

export default function App() {

  return (
    <div>
      {/*<Heading  text = "welcome!!" fontSize = "48px" /> /*} 
   {/*<DieeRolls numSides = {6} />
   <DieeRolls numSides = {20} />
   <DieeRolls numSides = {25} />
   /*<Fries/>
   <Fries/>
   <LoginForm/>
   <Die/>
   <DiceRolls/>
  <RandomPokemon/> */}
   {/*<Greeter name = "Bill" />
   <Greeter  from = "Bunny"/>
   <Greeter name = "Bill" from = "Chubby"/>
<ListPicker value = {{a:1 , b:2 , c:3}} /> */}
   
   {/*<DoubleDice/>
   <DoubleDice/>
   <DoubleDice/>
   <ColorList colors ={["red","pink","purple","teal"]} />
   <Slots val1 = "🍒" val2 = "🍒" val3= "🍒" />
   {/*<Slots val1 = "🍒" val2 = "🍏" val3= "🍒" />*/}
   {/*<ColorList  vice = {"12"}/> */}
   <ShoppingList items = {data} />
      
  </div> 
   
  );
}


