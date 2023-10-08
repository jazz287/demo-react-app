export default function RandomPokemon(){
  //  const url = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png` ;
    const pokeNum = Math.floor(Math.random()*151)+1;
    return (
 <div>
    <h1> pokemon# {pokeNum}</h1>
{/* <img src = {url} alt=""/> */ }
 </div>

    );
}