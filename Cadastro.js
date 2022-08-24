let nome;
let idade;
let ArrayCadastro = [];

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);
document.getElementById("filtroIdade").addEventListener("click", filtrarPorIdade);
document.getElementById("filtroNome").addEventListener("click", filtrarPorNome);

function validaFormulario(){
  const naoVazio = document.getElementById("nome").value != "" && document.getElementById("idade").value != "";
  const idadePositiva = parseInt(document.getElementById("idade").value) >= 0;
  const idadePossivel = parseInt(document.getElementById("idade").value) <= 130;

    if(naoVazio && idadePositiva && idadePossivel){
    nome = document.getElementById("nome").value;
    idade = parseInt(document.getElementById("idade").value);

    inserirNoArray(nome, idade);
    
    let UltimaPessoaInserida = ArrayCadastro[ArrayCadastro.length - 1];

    criarTabela(UltimaPessoaInserida);
  }else{
    alert("Por favor, preencha os campos nome e idade com dados válidos")
  }
}

function inserirNoArray(nome, idade){
  const faixaEtaria = classificarFaixaEtaria(idade);
  ArrayCadastro.push({nome: nome, idade: idade, faixaEtaria: faixaEtaria});   
}

function filtrarPorIdade(){
ArrayCadastro.sort(ordenaIdade);
recriarTabela(ArrayCadastro);
}

function filtrarPorNome(){
ArrayCadastro.sort(ordenaNome);
recriarTabela(ArrayCadastro);
}

function ordenaIdade(a,b){
  return a.idade - b.idade;
}

function ordenaNome(a,b){
  return a.nome.localeCompare(b.nome);
}

function classificarFaixaEtaria(idade){
  if (idade <= 12){
    return "Criança";
  } 
  if (idade > 12 && idade <= 19){
    return "Adolescente";
  } 
  if (idade > 19 && idade < 65){
    return "Adulto";
  } 
  if (idade >= 65){
    return "Idoso";
  }
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

function deletarLinhas(tabela){
  while(tabela.rows.length > 0){
    tabela.deleteRow(0);
  }
}
function recriarTabela(pessoas){
  const tabela = document.getElementById("tableBody");
  deletarLinhas(tableBody);
  pessoas.forEach(pessoa => {
    let novaLinha = document.createElement("tr");
    Object.values(pessoa).forEach((valor) => {
      let celula = document.createElement("td");
      celula.innerText = valor;
      novaLinha.appendChild(celula);
    })
    tabela.appendChild(novaLinha);
  });
}


