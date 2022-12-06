import Button from "./Button";
export default function CardBody({ title, text, url }) {
  // console.log("current title", props.title);
  // props.title = "Nimo"
  // console.log("props.title", props.title)

  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <Button url={url} />
    </div>
  );
}

//export the component

/*
Original code before Object destructing
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import Button from "./Button";
//create the component
export default function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage img={props.img} />
      <CardBody title={props.title} text={props.text} url={props.url} />
    </div>
  );
}
*/
