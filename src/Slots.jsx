export default function Slots({val1,val2,val3}){
    const isWinner = val1===val2  && val1===val3 ;
return (
<div>
    <p>{val1}{val2}{val3}</p>
    <h3 style = {{color : isWinner ? "Green": "Red"}} > {isWinner ? "You won" : "You loose"}</h3>
</div>
);
}