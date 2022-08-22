let nome;
let idade;
let ArrayCadastro = [];

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function inserirNoArray(nome, idade){
  console.log("xxc");
  ArrayCadastro.push({nome: nome, idade: idade});
  
}
function validaFormulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("idade").value != ""){
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;

    inserirNoArray(nome, idade);
    console.log(ArrayCadastro);
    console.log("cu");

  }else{
    alert("Por favor, preencha os campos nome e idade")
  }
}


