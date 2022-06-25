import "../index.css";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      submitText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        required
        name="avatarLinkInput"
        id="avatarLink"
        type="url"
        className="popup__input"
        placeholder={`${currentUser.avatar}`}
      />
      <span className="error" id="avatarLink-error" name="avatarLinkInputError"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
