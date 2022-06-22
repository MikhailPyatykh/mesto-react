import "../index.css";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="place">
      <img
        src={props.card.link}
        className="place__image"
        alt={`Вид на ${props.card.name}`}
        onClick={handleCardClick}
      />
      <div
        className={`place__icon-basket${
          props.showBasketIcon ? " place__icon-basket_active" : ""
        }`}
      ></div>
      <div className="place__card-info">
        <h2 className="place__title">{props.card.name}</h2>
        <div className="place__likes">
          <button
            type="button"
            className={`place__likes_icon-heart${
              props.isLiked ? " place__likes_icon-heart_active" : ""
            }`}
          ></button>
          <div className="place__likes_numbers">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
