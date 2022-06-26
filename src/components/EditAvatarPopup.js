import "../index.css";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useEffect, useState, useRef } from "react";

function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const inputLinkAvatar = useRef("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink(currentUser.avatar);
  }, [currentUser]);

  function handleChangeLink() {
    setLink(inputLinkAvatar.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: link,
    });
  }
  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      submitText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        ref={inputLinkAvatar}
        value={link}
        onChange={handleChangeLink}
        className="popup__input"
        placeholder={`${currentUser.avatar}`}
      />
      <span className="error" id="avatarLink-error" name="avatarLinkInputError"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
