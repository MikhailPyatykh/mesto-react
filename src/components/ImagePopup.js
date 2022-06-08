import "../index.css";

function ImagePopup() {
  return (
    <>
    <section className='popup popup_view'>
        <div className='popup__container'>
          <button type='button' className='popup__close-btn'></button>
          <figure className='popup__figure'>
            <img className='popup__picture' src='.' alt='.' />
            <figcaption className='popup__caption'></figcaption>
          </figure>
        </div>
    </section>
    </>
  );
}

export default ImagePopup;
