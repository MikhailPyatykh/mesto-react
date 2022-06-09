import "../index.css";
import React from "react";
import api from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription , setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
      Promise.all([api.getUserData(), api.getCards()])
        .then(([profileData, cards]) => {
        // Заполняем информацию профиля с сервера, добавляем нужную информацию профиля элементам
        
        // console.log(profileData);
        console.log(cards);
        setUserName(profileData.name);
        setUserDescription(profileData.about);
        setUserAvatar(profileData.avatar);
        setCards(cards);
      })
  }, []);
  


  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-place'>
          <img className='profile__avatar-image' src={userAvatar} alt='' />
          <button
            onClick={props.onEditAvatar}
            type='button'
            className='profile__avatar-button'
          ></button>
        </div>
        <div className='profile__info'>
          <div>
            <h1 className='profile__info-fio'>{userName}</h1>
            <p className='profile__info-occupation'>{userDescription}</p>
          </div>
          <button
            onClick={props.onEditProfile}
            type='button'
            className='profile__edit-button'
          ></button>
        </div>
        <button
          onClick={props.onAddPlace}
          type='button'
          className='profile__add-button'
        ></button>
      </section>
      <section className='places'>
        <ul className='places__list'>
          {cards.map((item, i) => (
          <li className="place" key = {i}>
            <img src={item.link} className="place__image" alt = {`Вид на ${item.name}`}/>
            <div className="place__icon-basket"></div>
            <div className="place__card-info">
              <h2 className="place__title place__id" data-id="item._id">{item.name}</h2>
              <div className="place__likes">
                <button type="button" className="place__likes_icon-heart"></button>
                <div className="place__likes_numbers">{item.likes.length}</div>
              </div>
            </div>
          </li>))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
