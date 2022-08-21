let nome;
let idade;

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)
function validaFormulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("idade").value != ""){
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
  }else{
    alert("Por favor, preencha os campos nome e idade")
  }
}