let ArrayCadastro = [];
const caracteresAceitos = /\w/;
const botaoEnviar = document.getElementById("botaoEnviar");
const filtroIdade = document.getElementById("filtroIdade");
const filtroNome = document.getElementById("filtroNome");


function validaFormulario(nome,idade){
  
  const vazio = nome === "" && idade === "";
  const idadePositiva = parseInt(idade) >= 0;
  const idadePossivel = parseInt(idade) <= 130;
  const nomePossivel = caracteresAceitos.test(nome);

  if(vazio || !idadePositiva || !idadePossivel || !nomePossivel){ 
    return false;   
  } else {
    return true;
  }
}

function inserirNoArray(){
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  const faixaEtaria = classificarFaixaEtaria(idade);
  if(validaFormulario(nome, idade)){
    ArrayCadastro.push({nome: nome, idade: idade, faixaEtaria: faixaEtaria}); 
    let UltimaPessoaInserida = ArrayCadastro[ArrayCadastro.length - 1];
    criarTabela(UltimaPessoaInserida); 
  }else{
    alert("Por favor, preencha os campos nome e idade com dados válidos");
  }
}

function filtrarPorIdadeCrescente(){
ArrayCadastro.sort(ordenaIdade);
recriarTabela(ArrayCadastro);
}

function filtrarPorOrdemAlfabetica(){
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

botaoEnviar.addEventListener("click", inserirNoArray);
filtroIdade.addEventListener("click", filtrarPorIdadeCrescente);
filtroNome.addEventListener("click", filtrarPorOrdemAlfabetica);

