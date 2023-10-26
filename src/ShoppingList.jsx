export default function ShoppingList({items}){
    return (<div>
    <ul>
        {items.map(i => <li>{i.item} - {i.quantity} </li>) }
    </ul>
    </div>
    );
}