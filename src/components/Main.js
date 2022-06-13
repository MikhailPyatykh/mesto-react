import "../index.css";
import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getCards()])
      .then(([profileData, cards]) => {
        // Заполняем информацию профиля с сервера, добавляем нужную информацию профиля элементам
        setUserName(profileData.name);
        setUserDescription(profileData.about);
        setUserAvatar(profileData.avatar);
        setCards(cards);
        props.userGetData(profileData);
        // console.log(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-place">
          <img
            className="profile__avatar-image"
            src={userAvatar}
            alt={`Фото ${userName}`}
          />
          <button
            onClick={props.onEditAvatar}
            type="button"
            className="profile__avatar-button"
          ></button>
        </div>
        <div className="profile__info">
          <div>
            <h1 className="profile__info-fio">{userName}</h1>
            <p className="profile__info-occupation">{userDescription}</p>
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
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
