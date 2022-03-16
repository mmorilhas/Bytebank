import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCorrente1 = new ContaCorrente(cliente1, 1001);
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);


const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);


console.log(contaCorrente1);
console.log(contaPoupanca);



