const data = new Date ('1987-04-20 00:00:00');
let diaSemana = data.getDay();

let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto='Domingo';
        break;
}
/*
if (diaSemana === 0){
diaSemanaTexto ='Domingo';
} else if (diaSemana ===1){
diaSemanaTexto -'Segunda';
}
else if (diaSemana === 2){
diaSemanaTexto -'Terça';
    }
else if (diaSemana === 3){
diaSemanaTexto -'Quarta';
        }
else if (diaSemana === 4){
diaSemanaTexto -'Quinta';
            }
 else if (diaSemana === 5){
diaSemanaTexto -'Sexta';
                }
else if (diaSemana === 6){
diaSemanaTexto -'Sabado';
                    } else{
                        diaSemanaTexto
                    }*/

                

console.log(diaSemana, diaSemanaTexto);