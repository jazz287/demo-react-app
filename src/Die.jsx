export default function Die(){
    const roll = Math.floor(Math.random()*6 +1);
    return <h2>Die Roll : {roll}</h2>
}
