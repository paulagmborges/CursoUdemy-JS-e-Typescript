/*
Luiz Otávio Miranda tem 30 anos,pesa 84 kg
tem 1.8 m de altura e seu IMC é de 25.925925925925924
Luiz Otavio nasceu em 
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = '30';
const peso = '84';
const alturaEmM= '1.80' ;
let imc; //peso /(alturaEmM * alturaEmM)
let anoNascimento;

imc = peso/(alturaEmM * alturaEmM);

anoNascimento = 2019 - idade;
//tamplete strings usa crase//
//console.log(`tem${alturaEmM} de altura e seu IMC é de ${indice Maassa Corporal}`)


/*console.log(nome,sobrenome,'tem',idade,'anos,pesa',peso,'kg')
console.log('tem', alturaEmM , 'de altura e seu IMC é de',imc)
console.log(nome, 'nasceu em', anoNascimento,'.');*/

console.log(`${nome} ${sobrenome} tem ${idade}anos, pesa${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de${imc}`);
console.log(`${nome} nasceu em  ${anoNascimento}.`);
