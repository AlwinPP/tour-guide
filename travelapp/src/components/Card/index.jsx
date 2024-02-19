import "./card.css";

const Card = (props) => {
  return (
    <div className="main">
      <div className="img">
        <img src={props.image} alt="" />
      </div>
      <h1>{props.name}</h1>
      <div className="flex">
        <p>{props.city}</p>
        <p>{props.duration}</p>
        <p>{props.price}</p>
      </div>
      <p>{props.about}</p>
    </div>
  );
};

export default Card;
