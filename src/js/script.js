const inputName = document.getElementById("name-input");
const inputSenha = document.getElementById("pass-input");
const btnSigIn = document.getElementById("btnSig");
const form = document.getElementById("mainForm");
let cleanInputName = false;
let cleanInputPass = false;

inputName.addEventListener("click", function () {
  const lbl1 = document.getElementById("label1");
  lbl1.style.visibility = "visible";
  inputName.style.color = "black";
  if (cleanInputName === false) {
    inputName.value = "";
    cleanInputName = true;
  }
});

inputSenha.addEventListener("click", function () {
  const lbl2 = document.getElementById("label2");
  lbl2.style.visibility = "visible";
  inputSenha.type = "password";
  inputSenha.style.color = "black";
  if (cleanInputPass === false) {
    inputSenha.value = "";
    cleanInputPass = true;
  }
});

btnSigIn.addEventListener('click', function(event) {
  const textName = document.getElementById("name-input").value;
  const txtSenha =  document.getElementById("pass-input").value;

  if (textName.trim() === '' || txtSenha.trim() === '' || textName === 'Username' || txtSenha === 'Password') {
    alert('Formulário não enviado, preencha todos os campos!');
    event.preventDefault();
  }
});