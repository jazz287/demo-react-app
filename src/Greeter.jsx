export default function Greeter({name = "Clinton",from = "anonymous"}){  // using props
    console.log({name});
    return( 
        <>
    <h1> {name} is an Idiot !!!</h1> 
    <h4>-{from}</h4>
    </>
    );

}

//it could also be written as props in function parameter and {props.name} in return function to heading on screen.

/**export default function Greeter(props){
    return <div>
        <h1>
            Hi !! my name is {props.name}
        </h1>
    </div>
}
    **/

    
