import "./Card.css";
const Card = ({ el,setId,setQuestActive,handleEditItem }) => {
  return (
    <div className="cardItem">
      <div className="cardCheck">
        <input type="checkbox" className="cardCheckbox" />
      </div>
      <div className="cardTopDiv">
        <div className="cardName">{el.name}</div>
        <div className="cardNumber">{el.phone}</div>
      </div>
      <div className="cardEmail">{el.email}</div>
      <div className="cardPhoto">
        <div className="cardProff">{el.profession}</div>
        <img src={el.avatar} alt="" />
      </div>
      <div className="cardContol">
        <img
          className="cardEdit"
          onClick={() => handleEditItem(el)}
          src="https://cdn-icons-png.flaticon.com/512/4007/4007772.png"
          alt=""
        />
        <img
          onClick={() => {
            setQuestActive(true);
             setId(el.id);
          }}
          className="cardRemove"
          src="https://cdn-icons-png.flaticon.com/512/7263/7263521.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Card;
