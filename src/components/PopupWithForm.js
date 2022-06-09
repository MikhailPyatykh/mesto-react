import "../index.css";
import React from "react";

function PopupWithForm(props) {
  // console.log(props.onClose);
  return (
      <section className={`popup popup_${props.name} ${props.isOpen?'popup_opened' : ''}`}>
        <div className='popup__container'>
          <button 
          type='button'
          className='popup__close-btn'
          onClick={props.onClose}
          ></button>
          <div className='popup__block'>
            <h3 className='popup__heading'>{props.title}</h3>
            <form
              className='popup__inputs'
              name={`${props.name}`}
              noValidate
            >
              {props.children}
              <button type='submit' className='popup__submit-btn'>
                {props.submitText}
              </button>
            </form>
          </div>
        </div>
      </section>
  );
}

function PopupEditAvatar(props) {
  return (
    <PopupWithForm
    name="edit-avatar"
    title="Обновить аватар"
    submitText = "Сохранить"
    isOpen = {props.isOpen}
    onClose = {props.onClose}
    >
    <input
      required
      name='avatarLinkInput'
      id='avatarLink'
      type='url'
      className='popup__input popup__input_type_avatar-link'
    />
    <span
      className='error'
      id='avatarLink-error'
      name='avatarLinkInputError'
    ></span>
    </PopupWithForm>
  )
}

function PopupEditProfile(props) {
  return (
    <PopupWithForm
      name="edit_profile"
      title="Редактировать профиль"
      submitText = "Сохранить"
      isOpen = {props.isOpen}
      onClose = {props.onClose}
    >          
    <input
      required
      name='nameInput'
      id='name'
      minLength='2'
      maxLength='40'
      type='text'
      className='popup__input popup__input_type_fio'
    />
    <span
      className='error'
      id='name-error'
      name='editProfileInputsError'
    ></span>
    <input
      required
      name='occupationInput'
      id='occupation'
      minLength='2'
      maxLength='200'
      type='text'
      className='popup__input popup__input_type_occupation'
    />
    <span
      className='error'
      id='occupation-error'
      name='occupationInputError'
    ></span>
    </PopupWithForm>
  )
}

function PopupAddPlace(props) {
  return (
    <PopupWithForm
    name="add_place"
    title="Новое место"
    submitText = "Создать"
    isOpen = {props.isOpen}
    onClose = {props.onClose}
    >
    <input
      required
      name='newPlaceNameInput'
      id='newPlaceName'
      minLength='2'
      maxLength='30'
      type='text'
      placeholder='Название'
      className='popup__input popup__input_type_place'
    />
    <span
      className='error'
      id='newPlaceName-error'
      name='newPlaceNameInputError'
    ></span>
    <input
      required
      name='newPlaceLinkInput'
      id='newPlaceLink'
      type='url'
      placeholder='Ссылка на картинку'
      className='popup__input popup__input_type_link'
    />
    <span
      className='error'
      id='newPlaceLink-error'
      name='newPlaceLinkInputError'
    ></span>
    </PopupWithForm>
  )
}

function PopupDeleteCard(props) {
  return (
    <PopupWithForm
    name="delete-card"
    title="Вы уверены?"
    submitText = "Да"
    onClose = {props.onClose}
    />
  )
}

export { PopupEditProfile, PopupAddPlace, PopupEditAvatar, PopupDeleteCard }

