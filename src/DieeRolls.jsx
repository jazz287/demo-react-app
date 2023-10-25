export default function DieeRolls({ numSides }) {
  //console.log({numSides});
  const Rolls = Math.floor(Math.random() * numSides) + 1;
  return (
    <div>
      <h3>
        {numSides}-sided Die Rolls : {Rolls}
      </h3>
    </div>
  );
}
