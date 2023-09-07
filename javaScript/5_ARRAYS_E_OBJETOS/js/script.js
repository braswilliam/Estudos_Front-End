// 1 - Arrys

const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof (lista));
const itens = ["will", true, 2, 4, 12, []];

console.log(itens);

// 2 - Mais sobre arrays:

const arr = ["a", "b", "c", "d", "e"];
console.log("pegando a posição: " + arr[2]); //na posição 2 teremos a letra "c". O zero tambem conta!

// 3 - Propriedades:

const numbers = [5, 3, 4];

console.log(numbers.length);
console.log(numbers["length"]); // pega a quantidade da posições da array

const myName = "William";
console.log(myName.length + " caracteres"); //pega a quantidade de caracteres

//Métodos:

const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers)
console.log()
console.log("Seguem os número concatenados e armazenados na variável \nAllNumber: " + allNumbers)

const text = "Algum texto";
console.log(text.toLocaleUpperCase);
console.log("Posição do G no texto: " + text.indexOf("g"));

// 5 - Objetos:
const person = {
    name: "William",
    age: 37,
    job: "programador"
}

console.log(person.name);
console.log(person.name.length);
console.log(typeof (person));


// 6 - Criando e deletando:
const car = {
    engine: 2.0,
    brand: "vw",
    model: "Tiguan",
    km: 2000
};


//add chave:
car.doors = 4;
console.log(car);

//deletando chave:
delete car.km;
console.log(car);


// 7 - mais sobre objetos:

const obj = {
    a: "teste",
    b: "true"
};


console.log(obj instanceof Object);


const obj2 = {
    c: []
}

Object.assign(obj2, obj); //Podemos copiar as propriedades de um objeto para outro com o método assign;

console.log(obj2);
obj2.a = "testado";
console.log(obj2);
obj2.c.push("Banana");
console.log(obj2);


// 8 - Propriedades de objeto:
console.log("As chaves da contante obj: " + Object.keys(obj));
console.log("As chaves da contante obj2: " + Object.keys(obj2));
console.log(Object.keys(car));
console.log(Object.entries(car))

//9 - multação:

const a = {
    name: "William"
}

const b = a; //vai passar a apontar, como se fosse uma referência;

console.log(a);
console.log(b);
console.log(a === b);
a.age = 37;
console.log(b);
delete b.age;
// vai deletar dos dois:
console.log(a)
console.log(b)

// 10 - Loops em arrays:

const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando Usuário: ${users[i]}`);
}

// 11 - push e pop:
const arrays = ["a", "b", "c"];
arrays.push("d")
console.log(arrays);
console.log(arrays.length);
const itemRemovido = arrays.pop();
console.log(arrays);

console.log(itemRemovido); //imprimindo o item remnovido que eu removi e armazenei na variável.

// 12 - shift e unshift
const letters = ["a", "b", "c"];
const letter = letters.shift();
console.log(letter); //removel a letra "a" de letters e armazenou na const letter;
console.log(letters)

letters.unshift("p", "q", "r");
letters.unshift("z");

console.log(letters);

// 13  - indexOf e LastIndexOf:

const myElements = ["Morando", "Maçã", "Abacate", "Pêra", "Abacate"];
console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]); //pega o mome que está na posição 2 do elento;
console.log(myElements[myElements.indexOf("Abacate")]); //pega a primeira posição do nome em específico e imprime ele;


console.log(myElements.lastIndexOf("Abacate")); //último elemento do tipo na posição;


// 14 - slice:
const testeSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testeSlice.slice(2, 4 + 1) //não modifica o array original
console.log(subArray);

// 15 - foreach:

const nums = [1, 2, 3, 4, 5];

nums.forEach((num) => {
    console.log(`O numero é ${num}`);
})

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "JavaScript" },
    { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
    console.log(`O post: ${post.title}, e a categoria: ${post.category}`);
});

// 16 - includes:

const brands = ["BMW", "Fusca", "Ferrari", "Fiat"];
console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
    console.log("Temos carros da marca BMW.");
}

// 17 - reverse:

const reverseTeste = [1, 2, 3, 4, 5];
reverseTeste.reverse();
console.log(reverseTeste);


// 18 - trim:

const trimteste = "  testando  \n   ";
console.log(trimteste);
console.log(trimteste.trim());

console.log(trimteste.length)
console.log(trimteste.trim().length);


// 19 - padstart:
const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0"); //completa com 0 até chagar 4 dígitos ex: 0001
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// 20 - split:
const frase = "O rato roeu a roupa do rei de Roma";
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

console.log()


// 21 - join:

const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;
console.log(fraseDeCompra);

// 22 - repeat:
const palavra = "testando ";
console.log(palavra.repeat(4));


// 23 - rest operator:

const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total
}

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 2, 3, 4, 5, 6, 10, 100, 200, 1000, 900, 21002));

// 24 - for of:
const somaInfinita2 = (...args) => {
    let total = 0;

    for (const iterator of args) {
        total += iterator;
    }

    return total;
}

console.log(somaInfinita2(1, 2, 3, 4));
console.log(somaInfinita2(10, 20, 100, 1000, 1000200, 150));

// 25 - destructuring:

const userDetails = {
    firstName: "Will",
    lastName: "Brasil",
    job: "Programador"
};


const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

//renomer as variáveis:
const { firstName: primeiroNome } = userDetails;
console.log(firstName);


// 26 destructuring em arrays:

const minhaLista = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = minhaLista;
console.log(minhaLista);

// 27 - JSON

const myJson = '{"nome": "William", "age": "37", "skills": ["PHP", "JavaScript", "Java", "Python"]}';

console.log(typeof (myJson));

// 28 - json para objeto e obj para JSON:

const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(myObject.nome);
console.log(typeof (myObject));
console.log(...myObject.skills);


// json invalido = vai dar erro!

//const badJason = '{name: Will, "age": 31}';
//const myBadObject = JSON.parse(badJason);


myObject.isOpenToWork = true;
console.log(myObject);

const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);
console.log(typeof(myNewJson));











