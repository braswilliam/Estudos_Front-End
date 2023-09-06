// 1 - variáveis

let nome = "Will";
console.log(nome);

nome = "Luana"
console.log(nome);

const idade = 37;
console.log(idade);

//constantes são imultaveis:
//idade = 38; -> dará erro!

// 2 - mais sobre variáveis:

//ley 2teste = 10 //declaração incorreta
//let @teste = 10 // declaração incorreta

let a = 10, b = 20, c = 30;
console.log(a, b, c);

const  nomecompleto = "William Brasil";
const nomeCompleto = "Luana B."; //case sensitive

let _teste = "ok";
let $teste = "ok";


console.log(_teste, $teste);

// 3 - finção prompt:

//const age = prompt("Digite a sua idade");
//console.log(`Você tem ${age} anos.`);


// 4 - alert:

//alert("testando");
//const z = 10;
//alert(`O numero é ${z}.`);

// 5 - Math:

console.log(Math.max(1,2,3,10));
console.log(Math.ceil(5.14));
console.log(Math.floor(5.14));

// 6 - console
//console.log("teste");
//console.error("Erro!");
//console.warn("Isso poderia ser feito de maneira diferente");
//console.info("Atualize a linha 35");

// 7 -if:

let m = 10;

if(m > 5) {
    console.log("M é maior que 5!");
}

const user = "joão";

if (user === "João") {
    console.log("Olá João");
}

if (nome === "Maria") {
    console.log("Olá Maria");
}


// 8 - else:
const loggedIn = false;

//quando loggedIn está só, ocultamente ele está dizendo se essa condição é verdadeira
if (loggedIn) {
   console.log("Está autenticado!"); 
} else  {
    console.log("Não está autenticado!");
}

const q = 10;
const w = 15;

if(q > 5 && w > 20){
    console.log("Numero mais altos");
}else{
    console.log("Os numeros não são mais altos");
}

// 9 - else if

if (1 > 2) {
    console.log("teste");
} else if (2 > 3) {
    console.log("teste 2");
} else if(5 > 1) {
    console.log("Agora sim!");
}

const userName = "Will";
const userAge = 37;

if (userName === "José") {
    console.log("Olá José");
}else if(userName === "Will" && userAge === 37) {
    console.log(`Ola ${userName} você tem ${userAge}`);
} else {
    console.log("nenhuma condição aceita");
}

//  10 - while

let p = 1;
while (p <= 10) {
    console.log(p);
    p++;
}
console.log();

// 11 - do while

let o = 10;

do {
    console.log(`valor de ${o}`);
    o--;
} while(o > 0);

console.log();

// 12 - for

for(let i =0; i <= 10; i++) {
    console.log("repetição de " + i);
}

//13 - breack
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é ${g}`);
    if (g === 12) {
        console.log("o g é 12");
        break;
    }
}

// 14 continue

for(let s = 0; s <10; s++) {
    
    if(s % 2 === 0) {
        console.log("Numero par!");
        continue;
    }

    console.log(s);
}

console.log()
// 15 - switch

const j = 4;

switch (j) {
    case 1:
        console.log("teste1")
        break;
    case 2:
        console.log("teste2")
        break;

    case 3:
        console.log("teste3")
        break;

    default:
        console.log("Nenhuma das opções!")
        break;
}