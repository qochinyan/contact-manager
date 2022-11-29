import "./Card.css"
const Card = ({el}) => {
  return <div className="cardItem">
    <div className="cardTopDiv">
        <div className="cardName">{el.name}</div><div className="cardNumber">{el.number}</div></div>
  </div>;
};
export default Card;
