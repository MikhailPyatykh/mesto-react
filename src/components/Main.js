import "../index.css";
import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const cards = useContext(CardsContext);
  // currentUser && console.log(currentUser._id);
  // cards && console.log(cards);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-place">
          <img
            className="profile__avatar-image"
            src={currentUser.avatar}
            alt={`Фото ${currentUser.name}`}
          />
          <button
            onClick={props.onEditAvatar}
            type="button"
            className="profile__avatar-button"
          ></button>
        </div>
        <div className="profile__info">
          <div>
            <h1 className="profile__info-fio">{currentUser.name}</h1>
            <p className="profile__info-occupation">{currentUser.about}</p>
          </div>
          <button
            onClick={props.onEditProfile}
            type="button"
            className="profile__edit-button"
          ></button>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button"
        ></button>
      </section>
      <section className="places">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              showBasketIcon={card.owner._id === currentUser._id}
              isLiked={card.likes.some((i) => i._id === currentUser._id)}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
