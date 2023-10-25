export default function ListPicker({ value }) {
  const randIdx = Math.floor(Math.random() * value.length);
  const randElement = value[randIdx];
  return (
    <div>
      {/*<p>The list of values : {value}</p>
      <p>The random element is : {randElement}</p> */}
    </div>
  );
}
