import "../index.css";

function Card(props) {
  function handleCardClick() {
    props.handleClick();
  }

  return (
    <section className="places">
      <ul className="places__list">
        {props.cards.map((item) => (
          <li className="place" key={item._id}>
            <img
              src={item.link}
              className="place__image"
              alt={`Вид на ${item.name}`}
              onClick={handleCardClick}
            />
            <div className="place__icon-basket"></div>
            <div className="place__card-info">
              <h2 className="place__title">{item.name}</h2>
              <div className="place__likes">
                <button type="button" className="place__likes_icon-heart"></button>
                <div className="place__likes_numbers">{item.likes.length}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Card;
