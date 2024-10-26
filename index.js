//SOLUÇÃO 1

// let saldoVitorias = classificacaoHeroi(35, 12)
// let nivel = ''

// function classificacaoHeroi (vitorias, derrotas) {
//     return vitorias - derrotas
// }


// switch (true) {
//     case (saldoVitorias < 10):
//         nivel = 'Ferro'
//         break;

//     case (saldoVitorias > 10 && saldoVitorias <= 20):
//         nivel = 'Bronze'
//         break;

//     case (saldoVitorias > 20 && saldoVitorias <= 50):
//         nivel = 'Prata'
//         break;

//     case (saldoVitorias > 50 && saldoVitorias <= 80):
//         nbreak;ivel = 'Ouro'
//         break;

//     case (saldoVitorias > 80 && saldoVitorias <= 90):
//         nivel = 'Diamante'
//         break;

//     case (saldoVitorias > 90 && saldoVitorias <= 100):
//         nivel = 'Lendário'
//         break;

//     case saldoVitorias > 101:
//         nivel = 'Imortal'
//         break;

//     default:
//         break;
// }


//console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);


//=====================================================================================


//SOLUÇÃO 2


// let saldoVitorias = classificacaoHeroi(100, 12)
// let nivel = ''

// function classificacaoHeroi (vitorias, derrotas) {
//     return vitorias - derrotas
// }


// if (saldoVitorias < 10) {
//     nivel = 'Ferro'
// } else if (saldoVitorias > 10 && saldoVitorias <= 20){
//     nivel = 'Bronze'
// } else if (saldoVitorias > 20 && saldoVitorias <= 50){
//     nivel = 'Prata'
// } else if (saldoVitorias > 50 && saldoVitorias <= 80){
//     nivel = 'Ouro'
// } else if (saldoVitorias > 80 && saldoVitorias <= 90){
//     nivel = 'Diamante'
// } else if (saldoVitorias > 90 && saldoVitorias <= 101){
//     nivel = Lendário
// } else {
//     nivel = 'Imortal'
// }


// console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);


//=============================================================


//SOLUÇÃO 3

let saldoVitorias
let nivel

function classificacaoHeroi(vitorias, derrotas){
    return vitorias - derrotas
}


function verificaNivel(resultadoSaldo) {
    switch (true) {
        case (resultadoSaldo < 10):
            return nivel = 'Ferro'
            
    
        case (resultadoSaldo > 10 && resultadoSaldo <= 20):
            return nivel = 'Bronze'
            
    
        case (resultadoSaldo > 20 && resultadoSaldo <= 50):
            return nivel = 'Prata'
            
        case (resultadoSaldo > 50 && resultadoSaldo <= 80):
            return nivel = 'Ouro'
            
    
        case (resultadoSaldo > 80 && resultadoSaldo <= 90):
            return nivel = 'Diamante'
            
    
        case (resultadoSaldo > 90 && resultadoSaldo <= 100):
            return nivel = 'Lendário'
            
    
        case resultadoSaldo > 101:
            return nivel = 'Imortal'
            
    
        default:
            break;
    }
}

saldoVitorias = [
    classificacaoHeroi(40, 32),
    classificacaoHeroi(35, 20),
    classificacaoHeroi(200, 132),
    classificacaoHeroi(70, 39),
    classificacaoHeroi(60, 3)
]

for (let i = 0; i < saldoVitorias.length; i++) {
    const saldoVitoria = saldoVitorias[i];
    nivel = verificaNivel(saldoVitorias[i])
    
    
    console.log(`O Herói tem saldo de ${saldoVitoria} e está no nível de ${nivel}`);
    
}
