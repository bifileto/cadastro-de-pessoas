let nome;
let idade;
let ArrayCadastro = [];

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function inserirNoArray(nome, idade){
  ArrayCadastro.push({nome: nome, idade: idade});   
}

function validaFormulario(){
  const naoVazio = document.getElementById("nome").value != "" && document.getElementById("idade").value != "";
  const idadePositiva = parseInt(document.getElementById("idade").value) >= 0;

    if(naoVazio && idadePositiva){
    nome = document.getElementById("nome").value;
    idade = parseInt(document.getElementById("idade").value);

    inserirNoArray(nome, idade);
    
    let UltimaPessoaInserida = ArrayCadastro[ArrayCadastro.length - 1];

    criarTabela(UltimaPessoaInserida);
  }else{
    alert("Por favor, preencha os campos nome e idade")
  }
}

document.getElementById("idade").addEventListener("click", ordenaIdade)
 
const ArrayIdade = ArrayCadastro.sort(ordenaIdade);
console.log("Array Idade" , ArrayIdade);

const ArrayNome = ArrayCadastro.sort(ordenaNome);
console.log("Array Nome" , ArrayNome);

function ordenaIdade(a,b){
  console.log("Array cadastro fora:", ArrayCadastro)
  return a.idade - b.idade;
}

function ordenaNome(a,b){
  return a.nome.localeCompare(b.nome);
}

function criarTabela(pessoa){
  const tabela = document.getElementById("tableBody");
    let novaLinha = document.createElement("tr");
    Object.values(pessoa).forEach((valor) => {
      let celula = document.createElement("td");
      celula.innerText = valor;
      novaLinha.appendChild(celula);
    })
    tabela.appendChild(novaLinha);
  ;
}



