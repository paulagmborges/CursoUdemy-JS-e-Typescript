const numero = Number(prompt('Digite um Número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = documet.getElementById('texto');

numeroTitulo.innerHTML=numero;
texto.innerHTML='';
texto.innerHTML+=`<p>Raiz quadrada:${numero**0.5}.</p>`;
texto.innerHTML+=`<p>${numero} é inteiro:${Number.isInteger(numero)}.</p>`;
texto.innerHTML+=`<p>Arredondado para baixo:${Math.floor(numero)}.</p>`;
texto.innerHTML+=`<p>Arredondando para cima:${Math.ceil(numero)}.</p>`;
texto.innerHTML+=`<p>Com duas casas decimais:${numero.toFixed(2)}.</p>`