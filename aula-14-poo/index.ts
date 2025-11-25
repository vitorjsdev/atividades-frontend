// Exercício 1 - Classe Pessoa
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const aluno = new Pessoa("Vitor", 25);
console.log(aluno.apresentar());

// Exercício 2 - Classe Carro
class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes(): string {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());

// Exercício 3 - Classe Retangulo
class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

const ret = new Retangulo(5, 3);
console.log(`Área: ${ret.area()}`);

// Exercício 4 - Conta Bancária
class ContaBancaria {
    private saldo: number;

    constructor() {
        this.saldo = 0;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado.`);
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    verSaldo(): number {
        return this.saldo;
    }
}

const minhaConta = new ContaBancaria();
minhaConta.depositar(100);
console.log(`Saldo final: R$${minhaConta.verSaldo()}`);