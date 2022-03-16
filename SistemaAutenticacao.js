/*
Ser autenticavel significa ter o método "autenticar"

duck typing -> o tipo de uma variável não importa, contanto que seu comportamento seja o desejado
*/


export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
         return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}