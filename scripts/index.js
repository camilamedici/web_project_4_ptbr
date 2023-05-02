const editButton = document.querySelector('.button-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button-close');
const formPopup = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__name');
const inputSobre = document.querySelector('.popup__sobre');
const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');
const submitButton = document.querySelector('.button-submit');


//abrir o popup ao clicar no botao
editButton.addEventListener('click', addPopup);
function addPopup() {
  popup.classList.add('popup-change'); //a class alterada so no css
  inputName.value = profileName.textContent;
  inputSobre.value = profileTitle.textContent;
}


//fechar o popup co clicar no botao
closeButton.addEventListener('click', closePopup);
function closePopup(){
  popup.classList.remove('popup-change');

}

//alterar os campos de input, salvar e fechar o popup
submitButton.addEventListener('click', handlerFormSubmit)
function handlerFormSubmit(event){
  event.preventDefault();//para a pagina nao recarregar inteira quando clicar no botao salvar
  if (inputName.value != ''){ //se nao escrever nada, nao vai alterar o nome
    profileName.textContent = inputName.value;
    //inputName.value = ''; //para quando fechar o popup e abrir de novo, voltar com o campo limpo
  }
  if (inputSobre.value != ''){
    profileTitle.textContent = inputSobre.value;
    //inputSobre.value = '';
  }
  closePopup(); //fechar o popup junto com salvar
}
