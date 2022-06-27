import "../index.css";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  function handleChangePlace(e) {
    props.setPlace(e.target.value);
  }

  function handleChangeLink(e) {
    props.setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name: props.place,
      link: props.link,
    });
  }

  return (
    <PopupWithForm
      name="add_place"
      title="Новое место"
      submitText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={props.place}
        onChange={handleChangePlace}
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
        value={props.link}
        onChange={handleChangeLink}
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
  );
}

export default AddPlacePopup;
