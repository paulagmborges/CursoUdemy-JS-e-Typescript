//Dados Primitivos - tiposde dados primitivos em JS:String ,number , underfined, null , boolean, symbol;
const nome ='Luiz'; //string
const nome1 ="Luiz"; //String
const nome2 =`Luiz`; //String

const num1 = 10; //Number
const num2 = 10.52; //Number

let nomeAluno; // underfined -> Não aponta para local nenhum da memória.

const sobrenomeAluno = null; //Nulo -> Não aponta para lugar nenhum na memória.
/*mas não são iguais null e underfined. Null desconfigura a variável,nao aponta para memhum local,underfined quem faz é a linguagem JS,não se configura em underfined*/

const boolean =false; //boolean = false ou true (logico)

//console.log(typeof nome,nome ) ->ver tipo e o nome

let a = 2;
const b = 3;
console.log (a, b); //2, 2
 a=3
console.log(a,b); //3,2
