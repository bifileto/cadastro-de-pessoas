let nome;
let idade;
let ArrayCadastro = [];

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function inserirNoArray(nome, idade){
  ArrayCadastro.push({nome: nome, idade: idade});   
}

function validaFormulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("idade").value != ""){
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;

    inserirNoArray(nome, idade);
    console.log("Array Cadastro" , ArrayCadastro);
    
    let UltimaPessoaInserida = ArrayCadastro[ArrayCadastro.length - 1];

    console.log(UltimaPessoaInserida);

    criarTabela(UltimaPessoaInserida);

  }else{
    alert("Por favor, preencha os campos nome e idade")
  }
}

/*const ArrayIdade = ArrayCadastro.sort(ordenaIdade);
    console.log("Array Idade" , ArrayIdade);

    const ArrayNome = ArrayCadastro.sort(ordenaNome);
    console.log("Array Nome" , ArrayNome);*/

function ordenaIdade(a,b){
  return a.idade - b.idade;
}

function ordenaNome(a,b){
  return a.nome.localeCompare(b.nome);
}

function criarTabela(pessoa){
  const tabela = document.getElementById("table");
    let novaLinha = document.createElement("tr");
    Object.values(pessoa).forEach((valor) => {
      let celula = document.createElement("td");
      celula.innerText = valor;
      novaLinha.appendChild(celula);
    })
    tabela.appendChild(novaLinha);
  ;
}



