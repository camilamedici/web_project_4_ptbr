//localizar botao de editar
const editButton = document.querySelector('.button-edit');


//localizar formulario
const popup = document.querySelector('.popup');



//adicionar eventos e mudar visibilidade
editButton.addEventListener('click', addPopup);
function addPopup() {
  popup.classList.add('popup-change');
}


//localizar botao de fechar
const closeButton = document.querySelector('.button-close');
closeButton.addEventListener('click', closePopup);
function closePopup(){
  popup.classList.remove('popup-change');
}


//localizar input do formulario
const inputName = document.querySelector('.popup__name');
const inputSobre = document.querySelector('.popup__sobre');
//localizar textos de pagina
//alterar campos e fechar
