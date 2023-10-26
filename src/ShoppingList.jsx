export default function ShoppingList({items}){
    return (<div>
    <ul>
        {items.map(i => <li style = {{color : i.completed ? "grey" : "red" }}>{i.item} - {i.quantity} </li>) }
    </ul>
    </div>
    );
}