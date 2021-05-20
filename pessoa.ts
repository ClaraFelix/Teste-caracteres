export class Pessoa{
    @validacao()
    public _nome: string;

    constructor(nome: string){
        this._nome = nome;
    }
}

function validacao(){
    return function(target: any, nomeDaPropriedade: string){

        let val = target[nomeDaPropriedade];

        let getter = () => val;

        let setter = (value: string)=> {
            let tamanhoMaximo = 10;
            if (value.length > tamanhoMaximo){
                throw new Error('O limite de caracteres foi ultrapassado.')
            }else{
                val = value;
            }
        }

        Object.defineProperty(target, nomeDaPropriedade,{
            get: getter,
            set: setter
        })
    }
}


