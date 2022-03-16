import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/gerente.js";
import { Diretor } from "./Funcionario/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Roberta", 12345678900, 10000);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 12378945600, 5000);
gerente.cadastrarSenha("789");

const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "789");

console.log(diretorLogado);
console.log(gerenteLogado);