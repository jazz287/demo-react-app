export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const styles = { color: num1 === num2 ? "green": "red" } ;


  return (
    <div className = "DoubleDice" style = {styles}>
        <h1 > Double Dice</h1>
       {/*{num1 === num2 ? <h3>"You win"</h3> : null  } */}
       {num1 === num2 && <h3> You win </h3>   }
      <p> num1 : {num1} </p>
      <p> num1 : {num2} </p>
    </div>
  );
}
