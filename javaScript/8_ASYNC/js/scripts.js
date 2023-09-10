// 1 - Função setTimeout:

console.log("Ainda não executou");


setTimeout(function () {
    console.log("Requisição Assíncrona");
}, 2000);

console.log("Ainda não executou 2");

// 2 - Função Setinterval:

console.log("Ainda não começou");

setInterval(function () {
    console.log("Intervalo Assícrono");
}, 3000);

console.log("Ainda não começou 2");

// 3 - Promises:

const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa
    .then((value) => {
        console.log(`A soma é ${value}`);
        return value;
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora o valor é: ${value}`));


console.log("outro codigo");


// 4 -  Tratamento de erros nas promisses:


Promise.resolve(4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("Valores Inválidos")
        }
    })

    .catch((err) => console.log(`Um erro ocorreu: ${err}`));


//5 rejeição:

function cheNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número é maior que 10`);
        } else {
            reject(new Error("O número é muito baixo."));
        }
    });
}

const a = cheNumber(20);
const b = cheNumber(10);

a.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error.message);
});

b.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error.message);
});

// 6 - resolvendo multiplas promisses

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 1000)
})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30)
    } else {
        reject("Erro!");
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values));



// 7 - async finctions


async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é ${value}`);
});

console.log("teste async");


// 8 - Instrução de await
function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolvel a promise");
        }, 2000)
    })
}

async function chamadaAsync() {
    console.log("Chamado a promise e esperando o resultado")
    const result = await resolveComDelay();
    console.log(`O resultado chegou ${result}`);
}

chamadaAsync();


// 9 - generators
function* generator() {
    yield 1;
    yield 2;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);