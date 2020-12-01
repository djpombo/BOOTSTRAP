var nome = "Joao da Silva";
var profissao = "Mecanico";


var nomehtml = document.getElementById("nome-no-html");
var profhtml = document.getElementById("profissao");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");
var texto3 = document.getElementById("texto-3");
0



function colocarNomeNoHtml(nome){
    nomehtml.innerHTML = nome;
}

function colocarProf(profissao){
    profhtml.innerHTML = profissao;
}

function btnProjetos(){
    texto1.style.display = "none";
    texto2.style.display = "block";
    texto3.style.display = "none";
   
}

function btnSobre(){
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "block";
}

colocarNomeNoHtml(nome);
colocarProf(profissao);

