// 1 -  métodos:

const animal =  {
    nome: "Bob",
    latir: function latir() {
        console.log("Au! Au!")
    }
};

console.log(animal.nome);
animal.latir();


// 2 - aprofundando em métodos:
const pessoa ={
    nome: "Matheus",
    getNome: function() {
        return this.nome;
    },

    setNome: function(newNome) {
      this.nome = newNome;  
    }

}

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("William");
console.log(pessoa.getNome());

// 3 - prototype
const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(Object.getPrototypeOf(arr));
console.log(arr.length);


//mais sobre prototype:
const myObject = {
    a: "b",
}

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject); // aqui.
console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// 5 - classes básicas:

const cachorro = {
    raca: null,
    patas: 4
}

const caoUm = Object.create(cachorro);
caoUm.raca = "Pastor Alemão";

console.log(caoUm.raca);
console.log(caoUm.patas);

const caoDois = Object.create(cachorro);
caoDois.raca = "Bulldog";

console.log(caoDois.raca);
console.log(caoDois.patas);

// 6 - função construtora

function criarCachoro(nome, raca) {
   const cachorro = Object.create({})

   cachorro.nome = nome;
   cachorro.raca = raca;

   return cachorro;

}

const bob = criarCachoro("Bob", "Vira Lata");
console.log(bob);


// 7 - classses baseadas em funções:

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "husky");
console.log(husky);

// 8 - classes de função com métodos:
Cachorro.prototype.uivar =  function() {
    console.log("Auuuuuu!!");
}

console.log(Cachorro.prototype);

husky.uivar();

// 9 - classes:

class Dog {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }


}

const jeff = new Dog("Jeff", "Labrador");
console.log(jeff);

// 10 mais sobre classes:

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`este caminhao tem eixo ${this.eixos} e é da cor ${this.cor}`);
    }
}

const caminhaoUm = new Caminhao(6, "Azul");
console.log(caminhaoUm);
caminhaoUm.descreverCaminhao();



const caminhaoDois = new Caminhao(4, "Branco");
console.log(caminhaoDois);
console.log(caminhaoDois.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");
console.log(c3.motor);

// 11 - Override: 
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;   
    } 
}

const humanoUm = new Humano("Willia", 37);
console.log(humanoUm);

Humano.prototype.idade = "Não definida";
console.log(humanoUm.idade);

console.log(Humano.prototype.idade);

// 12 - symbol

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const aviaoDois = new Aviao("Boeing", 10);
console.log(aviaoDois);

console.log(aviaoDois[asas]);
console.log(aviaoDois[pilotos]);


// 13 - getter e setters
class Post {
    constructor(titulo, descricao, tags = []) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    set addTag(tag) {
        this.tags.unshift(tag);
    }

    get imprimirTags() {
    console.log("Segue lista de tags: ")
    this.tags.forEach(tag => {
        console.log(tag);
      });
    }

}

const meuPost = new Post("Título do Post", "Descrição do Post");

console.log(meuPost.titulo);
console.log(meuPost.descricao);

meuPost.addTag = "Java";
meuPost.addTag = "JS";
meuPost.addTag = "HTML";
meuPost.addTag = "Python";

meuPost.imprimirTags;

// 14 herança:

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}


class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome;
    }
}

const shark = new Lobo(4, "shark");
console.log(shark);


// 15 - instanceOf

console.log(shark instanceof Lobo);
console.log(shark instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Lobo);













