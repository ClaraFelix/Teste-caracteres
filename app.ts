import { Pessoa } from './pessoa'

let pessoa = new Pessoa('');

try{
    //teste: nome com menos de 10 caracteres
    pessoa._nome = "João";
    console.log(pessoa._nome);
    //teste: nome com mais de 10 caracteres
    //pessoa._nome = "João e Maria";
    //console.log(pessoa._nome);

}catch(e){
    console.log(e.message);
}