// 1 - Number:

console.log(typeof(2));
console.log(typeof(5.14));
console.log(typeof(-127));

// 2 - Ops. aritiméticas:

console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4)
console.log(10 / 2);

console.log(5 + (4 * 2));

// 3 - Special numbers

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asdf");
console.log(typeof NaN);


// 4 - Strings

console.log("Um texto");
console.log('Mais um texto');
console.log(typeof '13');

// 5 - Simbolos especiais em String

console.log("Testando a \nquebra de linha");
console.log("Espaçamento de \t de tab");

// 6 - Concatenação:
console.log("Oi, " + "tudo " + "bem?");

// 7 - template Strings:
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - boolean:
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof(true));

// 9 - comparações:

console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - identico:
console.log(9 == "9"); //true
console.log(9 === "9") //false na operação identica.
console.log(9 != "9") //São iguais e não identicos
console.log(9 !== "9"); //true na operação identica


// 11 - Operadores Lógicos:

console.log(true && true);
console.log(true && false);
console.log(5 > 2  && 2 < 10); //true
console.log(5 > 2 && "Will" === 1); //false
console.log(5 > 2 || "Will" === 1); // true
console.log(5 < 2 || 5 > 100); //false
console.log(!true); //false
console.log(! 5 > 2); //false

//12 - empty values:
console.log(typeof(null), typeof(undefined));
console.log(null === undefined)
console.log(null == undefined) //true
console.log(undefined == false);

//13 - mudança de tipos:
console.log(5 * null); //0
console.log("teste" * "opa") //NaN
console.log("10" + 1); //concatena = 1001
console.log("10" - 1); //subtrai = 9
