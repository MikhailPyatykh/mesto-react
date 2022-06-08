// import logo from './logo.svg';
import '../index.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { PopupEditProfile, PopupAddPlace, PopupEditAvatar, PopupDeleteCard } from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  // Хуки, управляющие внутренним состоянием.
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  

  function handleEditAvatarClick() {
    console.log(isEditAvatarPopupOpen);
    setIsEditAvatarPopupOpen(true);
    return isEditAvatarPopupOpen;
  } 

  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  // }

  // function handleAddPlaceClick() {
  //   setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  // }

  return (
    <div className="page">
      <Header />
      <Main
      onEditAvatar={handleEditAvatarClick} 
      // onEditProfile={handleEditProfileClick}
      // onAddPlace={handleAddPlaceClick}          
      />
      <Footer />
      <ImagePopup />
      <PopupEditProfile      
      />
      
      <PopupAddPlace />
      <PopupEditAvatar 
      isOpen = {isEditAvatarPopupOpen}
      />
      <PopupDeleteCard />
         
    
    </div>
  );
}

export default App;

/*    
    <template id="place-template">
      <li className="place">
        <img src="." className="place__image" />
        <div className="place__icon-basket"></div>
        <div className="place__card-info">
          <h2 className="place__title place__id" data-id="."></h2>
          <div className="place__likes">
            <button type="button" className="place__likes_icon-heart"></button>
            <div className="place__likes_numbers"></div>
          </div>
        </div>
      </li>
    </template> 
    */
