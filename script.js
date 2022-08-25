let pessoas = [];
const caracteresAceitos = /\w/;
const botaoEnviar = document.getElementById("botaoEnviar");
const filtroIdade = document.getElementById("filtroIdade");
const filtroNome = document.getElementById("filtroNome");

function adicionarPessoa(){
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  const faixaEtaria = classificarFaixaEtaria(idade);
  if(validarFormulario(nome, idade)){
    pessoas.push({nome: nome, idade: idade, faixaEtaria: faixaEtaria}); 
    let ultimaPessoaInserida = pessoas[pessoas.length - 1];
    criarTabela(ultimaPessoaInserida); 
  } else {
    alert("Por favor, preencha os campos nome e idade com dados válidos");
  }
  limparFormulario();
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

function validarFormulario(nome,idade){
  const vazio = nome === "" && idade === "";
  const idadeLimite = parseInt(idade) >= 0 && parseInt(idade) <= 130;
  const nomeAceito = caracteresAceitos.test(nome);
  if(vazio || !idadeLimite || !nomeAceito){ 
    return false;   
  } else {
    return true;
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
}

function limparFormulario(){
  document.getElementById("formulario").reset();
}

function filtrarPorIdadeCrescente(){
pessoas.sort(ordenarPorIdade);
recriarTabela(pessoas);
}

function ordenarPorIdade(a,b){
  return a.idade - b.idade;
}

function filtrarPorOrdemAlfabetica(){
pessoas.sort(ordenarPorNome);
recriarTabela(pessoas);
}

function ordenarPorNome(a,b){
  return a.nome.localeCompare(b.nome);
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

function deletarLinhas(tabela){
  while(tabela.rows.length > 0){
    tabela.deleteRow(0);
  }
}

botaoEnviar.addEventListener("click", adicionarPessoa);
filtroIdade.addEventListener("click", filtrarPorIdadeCrescente);
filtroNome.addEventListener("click", filtrarPorOrdemAlfabetica);
