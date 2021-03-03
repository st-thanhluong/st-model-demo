const modal = document.querySelector(".modal-container");

let isModal = false;

const toggleModal = () => {
  !isModal ? modal.classList.add("active") : modal.classList.remove("active");
  isModal = !isModal;
};
