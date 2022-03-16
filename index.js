import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/gerente.js";
import { Diretor } from "./Funcionario/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const diretor = new Diretor("Roberta", 12345678900, 10000);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 12378945600, 5000);
gerente.cadastrarSenha("789");

const cliente = new Cliente ("Laís", 78945612300, 456);


const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "789");
const clienteLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorLogado, gerenteLogado, clienteLogado);

// Contas 
const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCorrente1 = new ContaCorrente(cliente1, 1001);
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(200);
contaSalario.sacar(20);


console.log(contaCorrente1, contaPoupanca, contaSalario);
