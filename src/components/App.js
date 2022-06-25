// import logo from './logo.svg';
import "../index.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";

function App() {
  // Хуки, управляющие внутренним состоянием.
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({ name: "", about: "" });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, cards]) => {
        // Заполняем информацию профиля с сервера, добавляем нужную информацию профиля элементам
        setCurrentUser(userInfo);
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
    setIsImagePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleUpdateUser(userData) {
    // console.log(userData);
    api
      .patchUserInfo(userData)
      .then((newData) => {
        setCurrentUser(newData);
      })
      .catch((err) => {
        console.error(err);
      });
    closeAllPopups();
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <CardsContext.Provider value={cards}>
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            setCards={setCards}
          />
          <Footer />

          <ImagePopup
            card={selectedCard}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

          <PopupWithForm
            name="add_place"
            title="Новое место"
            submitText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              required
              name="newPlaceNameInput"
              id="newPlaceName"
              minLength="2"
              maxLength="30"
              type="text"
              placeholder="Название"
              className="popup__input popup__input_type_place"
            />
            <span
              className="error"
              id="newPlaceName-error"
              name="newPlaceNameInputError"
            ></span>
            <input
              required
              name="newPlaceLinkInput"
              id="newPlaceLink"
              type="url"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_link"
            />
            <span
              className="error"
              id="newPlaceLink-error"
              name="newPlaceLinkInputError"
            ></span>
          </PopupWithForm>

          <PopupWithForm
            name="delete-card"
            title="Вы уверены?"
            submitText="Да"
            onClose={closeAllPopups}
          />
        </CardsContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
