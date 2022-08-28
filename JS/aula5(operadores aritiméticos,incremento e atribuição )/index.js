/**
 * Aritméticos 
 * + Adição / Concatenação
 * - subtração
 * / divisão
 * * multiplicação
 * ** potenciação
 * % retorna o resto da divisão
 **/
/*const num1 = 10 ;
const num2 = 3;
console.log(num1 % num2);
//se for String
//const num1 = '5' ;
//const num2 = '10'; ele faz a concatenação ,dando o resultado 510;
*/
/**precedencia dos operadores
 * ()*
 * **
 * /
 * %
 * +-
 * */
/*let contador =1;
contador++;// 2
contador++;// 3
contador++;// 4
contador++;// 5
console.log(contador)
 //operador de incremento ++ (não pode usar esse operador em const,só usar com let,pois o valor da variável muda)
*/
//let contador = 1
//++contador; 
//console.log(contador);
//incremento ++ -> pré e pós o que muda é o local onde coloca o ++a,tes ou depois
//decremento -- -> idem
//Quando precisar fazer o incremento de mais de 1

/*const passo = 2;
let contador =1;
contador = contador + passso;
console.log(contador);*/

//atalho
/*const passo = 50;
let contador = 0;
contador += passo;*/

//NaN - Not a number - erro quando se coloca string em vez de numero

const num1 = 10;
const num2 = paresefloat('5.2');
console.log(num1 + num2);

/**
 * parseInte - converte string para numero inteiro
 * parseFloat - converte string para numero decimal
 * Number - ele tenta entender qual o tipo fara realizar a conversção
 *Se colocar string com letras ele não vai conseguir converter e vai dar NaN
 * /


