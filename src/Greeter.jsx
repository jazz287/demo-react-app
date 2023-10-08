export default function Greeter(props){
    console.log(props.name);
    console.log(props);
    return <h1> {props.name} is an Idiot !!!</h1>  
}

// it could also be written as {name} in function parameter and {name} in return function to heading on screen.