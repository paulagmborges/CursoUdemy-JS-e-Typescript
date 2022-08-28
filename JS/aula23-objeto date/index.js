/*const data = new Date ('2019-4-20  15:14:27');

console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); //Mes começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana' ,data.getDay()) // 0- domingo ,6 -sabado
console.log(data.toString)*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `$0${num}`;
}
function formataData(data){
    const Dia= zeroAEsquerda(data.getDate());
    const Mes= zeroAEsquerda( data.getMonth() + 1);
    const Ano= zeroAEsquerda(data.getFullYear());
    const Hora= zeroAEsquerda(data.getHours());
    const Min= zeroAEsquerda (data.getMinutes());
    const Seg= zeroAEsquerda(data.getSeconds());

    return `${Dia}/${Mes}/${Ano}/${Hora}/${Min}/${Seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);