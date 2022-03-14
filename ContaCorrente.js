import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    /*  #saldo = 0; 
        proposta de criar um atributo privado, ainda não está implementado https://github.com/tc39/proposal-class-fields#private-fields 
    */

   constructor(cliente, agencia){
       super(0, cliente, agencia);
       ContaCorrente.numeroDeContas++;
    }

}
