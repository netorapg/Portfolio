function somar() {
    let valor1 = document.getElementById("num1").value;
    let valor2 = document.getElementById("num2").value;
    let resultado = parseFloat(valor1) + parseFloat(valor2);
    document.getElementById("resultado").innerText = resultado;

}

function multiplicar() {
    let valor1 = document.getElementById("num1").value;
    let valor2 = document.getElementById("num2").value;
    let resultado = parseFloat(valor1) * parseFloat(valor2);
    document.getElementById("resultado").innerText = resultado;
}

function subtrair() {
    let valor1 = document.getElementById("num1").value;
    let valor2 = document.getElementById("num2").value;
    let resultado = parseFloat(valor1) - parseFloat(valor2);
    document.getElementById("resultado").innerText = resultado;
}

function dividir() {
    let valor1 = document.getElementById("num1").value;
    let valor2 = document.getElementById("num2").value;
    let resultado = parseFloat(valor1) / parseFloat(valor2);
    document.getElementById("resultado").innerText = resultado;
}




















/*let titulo = document.getElementById("titulo1");
console.log(titulo.id);
console.log(titulo.textContent);

*/
/*let titulo = document.getElementById("titulo1");
console.log(titulo.id);
titulo.innerText="Novo Título";

/*console.log(window.location.href);

console.log(document.body);

*/


//Isso é um comentário de linha
/* Isso é um comentário de bloco */
/*
const idade = 20;
var nome="Renato";
let sexo="M";

const pessoa={
    nome: "Renato",
    idade: 20,
    sexo: "M"
};
console.log(pessoa);
pessoa.nome="Maria";
console.log(pessoa);
console.log(typeof nome);
console.log(typeof idade);
*/
/*
for(let x=0, y=9; x<10; x++, y--){
    console.log("X: "+x+" Y: "+y);
}

function cumprimentar(nome){
    console.log("Olá, "+nome);
}
console.log(cumprimentar("Renato"));
*/
/*
const soma = (a, b) => a + b;
console.log(soma(2, 3));


const operacoes = (a, b) => {
    return{
        soma: a+b,
        subtracao: a-b,
        multiplicacao: a*b,
        divisao: a/b
    };
};
console.log(operacoes(2, 10));
*/
/*
let frutas = ["maçã", "banana", "laranja", "melancia"];
frutas.forEach(fruta => console.log(fruta));
frutas.push("uva");
frutas.forEach(fruta => console.log(fruta));
frutas.map((fruta, idx) => console.log(idx+" "+fruta));

*/


/*As declarações de var tem escopo global  ou de função, enquanto
as declarações de let e de const tem escopo de bloco
Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu
escopo. AS variáveis de let podem ser atulizadas mas não podem ser declaradas novamente
AS variaveis de const não podem ser atualizadas nem declaradas novamente.
Todas elas passam por hoisting para o topo de seu escopo. Porém,, enquanto variáveis
com var são inicializadas com undefined, as variáveis let e const não são
inicializadas.
Enquanto var e elt podem ser declaradas sem ser inicializadas, const precisa
da inicialização durante a declaração. */