/*const pessoa1 ={
nome:'Luiz',
sobrenome:'Miranda',
idade:25
};
const pessoa2 ={
    nome:'Maria',
    sobrenome:'Oliveira',
    idade:28
    };
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);*/
/*function criaPessoa( nome, sobrenome, idade){
return {
    nome:nome,
    sobrenome:sobrenome,
    idae:idade
}}

const pessoa1= criaPessoa('Luiz','Miranda',29);
const pessoa2= criaPessoa('Maria','Oliveira',27);
const pessoa3= criaPessoa('Junior','Mendes',25);
const pessoa4= criaPessoa('joão','Vitor',22);
const pessoa5= criaPessoa('Jean','Otavio',28);

console.log(pessoa1.nome,pessoa2.nome);*/

const pessoa1 = {
    nome:'luiz',
    sobrenome:'Miranda',
    idade:25,

fala() {
    console.log(`${this.nome} ${this.sobrenome} esta falando oi ...`)
},
incrementaIdade(){
    this.idade++;
}};
pessoa1.fala();

