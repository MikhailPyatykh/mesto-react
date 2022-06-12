// import logo from './logo.svg';
import "../index.css";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  // Хуки, управляющие внутренним состоянием.
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [avatarLink, setAvatarLink] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userAbout, setUserAbout] = useState(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function userGetData(data) {
    setAvatarLink(data.avatar);
    setUserName(data.name);
    setUserAbout(data.about);
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
    // setIsImagePopupOpen(true);
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

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        userGetData={userGetData}
      />
      <Footer />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
      />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        submitText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required
          name="avatarLinkInput"
          id="avatarLink"
          type="url"
          className="popup__input"
          placeholder={`${avatarLink}`}
        />
        <span className="error" id="avatarLink-error" name="avatarLinkInputError"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit_profile"
        title="Редактировать профиль"
        submitText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required
          name="nameInput"
          id="name"
          minLength="2"
          maxLength="40"
          type="text"
          className="popup__input"
          placeholder={`${userName}`}
        />
        <span className="error" id="name-error" name="editProfileInputsError"></span>
        <input
          required
          name="occupationInput"
          id="occupation"
          minLength="2"
          maxLength="200"
          type="text"
          className="popup__input"
          placeholder={`${userAbout}`}
        />
        <span className="error" id="occupation-error" name="occupationInputError"></span>
      </PopupWithForm>

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
    </div>
  );
}

export default App;
