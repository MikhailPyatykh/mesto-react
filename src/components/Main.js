import "../index.css";
import React from "react";

function Main(props) {
  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-place'>
          <img className='profile__avatar-image' src='' alt='' />
          <button
            onClick={props.onEditAvatar}
            type='button'
            className='profile__avatar-button'
          ></button>
        </div>
        <div className='profile__info'>
          <div>
            <h1 className='profile__info-fio'> </h1>
            <p className='profile__info-occupation'></p>
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
        <ul className='places__list'></ul>
      </section>
    </main>
  );
}

export default Main;
