(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-popup-modal-open]'),
    closeModalBtn: document.querySelector('[data-popup-modal-close]'),
    modal: document.querySelector('[data-popup-modal]'),
    form: document.querySelector('.contacts-form'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('popup-is-hidden');
  }
  refs.form.addEventListener('submit', popup => {
    refs.modal.classList.toggle('popup-is-hidden');
    popup.preventDefault();
  });
})();
