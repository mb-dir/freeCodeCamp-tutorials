export default function Die(props) {
  return (
    <div className={props.isHeld ? "die die--green" : "die"}>
      {props.number}
    </div>
  );
}
