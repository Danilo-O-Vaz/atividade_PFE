
import * as readline from 'readline-sync';

// Exercício 1
function exercicio1() {
  const a = parseInt(readline.question('Digite o primeiro número: '));
  const b = parseInt(readline.question('Digite o segundo número: '));
  console.log(`A soma é: ${a + b}`);
}

// Exercício 2
function exercicio2() {
  const num = parseInt(readline.question('Digite um número: '));
  console.log(num % 2 === 0 ? 'Par' : 'Ímpar');
}

// Exercício 3
function exercicio3() {
  const n1 = parseFloat(readline.question('Nota 1: '));
  const n2 = parseFloat(readline.question('Nota 2: '));
  const n3 = parseFloat(readline.question('Nota 3: '));
  const media = (n1 + n2 + n3) / 3;
  console.log(`Média: ${media.toFixed(2)}`);
}

// Exercício 4
function exercicio4() {
  const c = parseFloat(readline.question('Temperatura em Celsius: '));
  const f = (c * 9/5) + 32;
  console.log(`Fahrenheit: ${f.toFixed(2)}`);
}

// Exercício 5
function exercicio5() {
  console.log('Números pares de 1 a 20:');
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

// Exercício 6
function exercicio6() {
  const arr: number[] = [];
  for (let i = 0; i < 5; i++) {
    arr.push(parseInt(readline.question(`Número ${i + 1}: `)));
  }
  console.log('Números digitados:', arr);
}

// Exercício 7
function exercicio7() {
  const arr: number[] = [];
  for (let i = 0; i < 5; i++) {
    arr.push(parseInt(readline.question(`Número ${i + 1}: `)));
  }
  console.log('Maior número:', Math.max(...arr));
}

// Exercício 8
function exercicio8() {
  const texto = readline.question('Digite uma string: ').toLowerCase();
  const vogais = texto.match(/[aeiou]/g);
  console.log(`Número de vogais: ${vogais ? vogais.length : 0}`);
}

// Exercício 9
function exercicio9() {
  const a = parseFloat(readline.question('Número 1: '));
  const op = readline.question('Operador (+, -, *, /): ');
  const b = parseFloat(readline.question('Número 2: '));
  let resultado: number | string;
  switch (op) {
    case '+': resultado = a + b; break;
    case '-': resultado = a - b; break;
    case '*': resultado = a * b; break;
    case '/': resultado = b !== 0 ? a / b : 'Erro: divisão por zero'; break;
    default: resultado = 'Operador inválido';
  }
  console.log(`Resultado: ${resultado}`);
}

// Exercício 10
function exercicio10() {
  const arr: number[] = [];
  for (let i = 0; i < 5; i++) {
    arr.push(parseInt(readline.question(`Número ${i + 1}: `)));
  }
  console.log('Ordenado:', arr.sort((a, b) => a - b));
}

// Exercício 11
class Pessoa {
  constructor(public nome: string, public idade: number) {}
  exibir() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }
}
function exercicio11() {
  const nome = readline.question('Nome: ');
  const idade = parseInt(readline.question('Idade: '));
  const pessoa = new Pessoa(nome, idade);
  pessoa.exibir();
}

// Exercício 12
class Aluno extends Pessoa {
  constructor(nome: string, idade: number, public matricula: string) {
    super(nome, idade);
  }
  exibir() {
    super.exibir();
    console.log(`Matrícula: ${this.matricula}`);
  }
}
function exercicio12() {
  const nome = readline.question('Nome: ');
  const idade = parseInt(readline.question('Idade: '));
  const matricula = readline.question('Matrícula: ');
  const aluno = new Aluno(nome, idade, matricula);
  aluno.exibir();
}

// Exercício 13
interface Veiculo {
  acelerar(): void;
  frear(): void;
}
class Carro implements Veiculo {
  acelerar() { console.log('Acelerando...'); }
  frear() { console.log('Freando...'); }
}
function exercicio13() {
  const carro = new Carro();
  carro.acelerar();
  carro.frear();
}

// Exercício 14
function exercicio14() {
  const num = parseInt(readline.question('Digite um número: '));
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// Exercício 15
function exercicio15() {
  const peso = parseFloat(readline.question("Digite seu peso (kg): ").replace(",", "."));
  const altura = parseFloat(readline.question("Digite sua altura (m): ").replace(",", "."));
  const imc = peso / (altura * altura);

  console.log(`IMC: ${imc.toFixed(2)}`);

  if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
  } else if (imc < 25) {
    console.log("Classificação: Peso normal");
  } else if (imc < 30) {
    console.log("Classificação: Sobrepeso");
  } else {
    console.log("Classificação: Obesidade");
  }
}

// Exercício 16
function exercicio16() {
  console.log("===== VALIDAÇÃO DE SENHA =====");
  console.log("A senha deve conter:");
  console.log("- Pelo menos 8 caracteres");
  console.log("- Pelo menos 1 letra maiúscula");
  console.log("- Pelo menos 1 letra minúscula");
  console.log("- Pelo menos 1 número");
  console.log("- Pelo menos 1 caractere especial (!@#$%^&* etc.)\n");

  const senha = readline.question("Digite sua senha: ");

  const temLetraMaiuscula = /[A-Z]/.test(senha);
  const temLetraMinuscula = /[a-z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);
  const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
  const tamanhoMinimo = senha.length >= 8;

  if (temLetraMaiuscula && temLetraMinuscula && temNumero && temEspecial && tamanhoMinimo) {
    console.log("✅ Senha válida!");
  } else {
    console.log("❌ Senha inválida. Verifique os critérios acima.");
  }
}


// Exercício 17
function exercicio17() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativa;
  do {
    tentativa = parseInt(readline.question('Adivinhe o número (1 a 100): '));
    if (tentativa < numeroSecreto) console.log('Maior...');
    else if (tentativa > numeroSecreto) console.log('Menor...');
  } while (tentativa !== numeroSecreto);
  console.log('Parabéns! Você acertou!');
}

// Exercício 18
function exercicio18() {
  const frase = readline.question('Digite uma frase: ');
  const palavras = frase.trim().split(/\s+/);
  console.log(`Total de palavras: ${palavras.length}`);
}

// Menu
function menu() {
  let opcao: number;
  do {
    console.clear();
    console.log("===== MENU DE EXERCÍCIOS =====");
    const descricoes = [
  "Soma de dois números inteiros",
  "Verificar se um número é par ou ímpar",
  "Calcular a média de três notas",
  "Converter Celsius para Fahrenheit",
  "Exibir números pares de 1 a 20",
  "Ler e exibir 5 números",
  "Encontrar o maior número em um array",
  "Contar vogais em uma string",
  "Calculadora simples (+, -, *, /)",
  "Ordenar array em ordem crescente",
  "Classe Pessoa com nome e idade",
  "Classe Aluno que herda de Pessoa",
  "Interface Veículo com classe Carro",
  "Tabuada de 1 a 10",
  "Calculadora de IMC com classificação",
  "Validação de senha com critérios",
  "Jogo de adivinhação (1 a 100)",
  "Contar palavras em uma string"
];

for (let i = 0; i < descricoes.length; i++) {
  console.log(`${i + 1}. Exercício ${i + 1} - ${descricoes[i]}`);
}
    console.log("0. Sair");
    opcao = parseInt(readline.question("Escolha uma opcao: "));
    console.clear();

    switch (opcao) {
      case 1: exercicio1(); break;
      case 2: exercicio2(); break;
      case 3: exercicio3(); break;
      case 4: exercicio4(); break;
      case 5: exercicio5(); break;
      case 6: exercicio6(); break;
      case 7: exercicio7(); break;
      case 8: exercicio8(); break;
      case 9: exercicio9(); break;
      case 10: exercicio10(); break;
      case 11: exercicio11(); break;
      case 12: exercicio12(); break;
      case 13: exercicio13(); break;
      case 14: exercicio14(); break;
      case 15: exercicio15(); break;
      case 16: exercicio16(); break;
      case 17: exercicio17(); break;
      case 18: exercicio18(); break;
      case 0: console.log("Saindo..."); break;
      default: console.log("Opção inválida!");
    }

    if (opcao !== 0) readline.question("\nPressione Enter para voltar ao menu...");
  } while (opcao !== 0);
}

menu();
