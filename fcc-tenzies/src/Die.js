export default function Die(props) {
  return (
    <div
      className={props.isHeld ? "die die--green" : "die"}
      onClick={() => props.holdDice(props.id)}
    >
      {props.number}
    </div>
  );
}
