// 1 - criando função:

function minhaFuinção() {
    console.log("testando...");
}

minhaFuinção();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();


function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Alguma coisa");

//2 - função com retorno:

function soma (n1, n2) {
    return a + b;
}

const a = 10;
const b = 20;
const c = 30;
const e = 40;

const resultado = soma(a, b);
console.log(`O resultado da soma é: ${resultado}`);
//ou 
console.log(`O resultado da soma é: ${soma(a, b)}`); // já passando a função soma.

// 3 - Escopo da função:

let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é ${y}`)
}


console.log(`y fora da função é: ${y}`);
testandoEscopo();

//4 - escopo aninhado:
let m = 10; //global

function escopoAninhado() { //escopo da funçãp
    let m = 20;

    if (true) { //escopo do primeiro if
        let m = 30;

        if (true) { //escopo do segundo if
            let m = 40;

            console.log(m);
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado();
console.log(m);

// Arrow Function

const multiplicar = (a, b) => {
    return a * b;
};

console.log(multiplicar(2, 2));

const parOuImpar = (valor) => {
    if (valor % 2 === 0) {
        console.log("Numero Par");
    } else {
        console.log("Numero Impar");
    }
}

parOuImpar(10);

// 6 - mais sobre arrow function:

//forma mais resumida.
const raisQuadrada = (x) => x * x;

console.log(raisQuadrada(4));
console.log(raisQuadrada(5));
console.log(raisQuadrada(12));

// 7  - parâmetro opcional:

const multiplication = function(m,n) {
    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
};

console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (name) => {
    if(!name) {
        console.log("Olá!")
    } else {
        console.log(`Olá ${name}!`)
    }
} 

greeting();
greeting("William");
console.log();

// 8 - defaut:

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Will"));
//veja que o parâmetro que antes estava sendo passado por dafault,
// no exemplo abaixo receberá o parâmetro "Bom dia" logo, o que antes 
//era defautl carregando "Ola" passa a ser "Bom dia"
console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        
        console.log(text);
        
    }
}

repeatText("Will");
console.log()//pula  linha
repeatText("Will",3);


// 9 - closure:

function someFunction(){
    let txt = "Alguma coisa";

    function display(txt) {
        console.log(txt);
    }

    
}


function contador() {
    let contagem = 0;
  
    function incrementar() {
      contagem++;
      console.log(contagem);
    }
  
    return incrementar;
}
  
const imprimirContagem = contador();

imprimirContagem();
imprimirContagem();
imprimirContagem();
  

// 10 mais sobre closure:

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1(5));
console.log(c2(10));

//ex 2:

const escreverNome = (nome) => (sobrenome) => nome + " " + sobrenome;
    
const n1 = escreverNome("William");
console.log(n1("Pereira"));

// 11 - recursive:

const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m;
        console.log(x)
        untilTen(x, m)
    }
}

untilTen(100, 7);