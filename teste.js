import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
const cliente3 = new Cliente("Amanda", 55533366600)

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002);
const conta3 = new ContaCorrente(cliente3, 1002)


let qtdd = 200;
conta1.transferir(qtdd, conta2);


console.log(ContaCorrente.numeroDeContas);



