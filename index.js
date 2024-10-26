//SOLUÇÃO 1

let saldoVitorias = classificacaoHeroi(35, 12)
let nivel = ''

function classificacaoHeroi (vitorias, derrotas) {
    return vitorias - derrotas
}


switch (true) {
    case (saldoVitorias < 10):
        nivel = 'Ferro'
        break;

    case (saldoVitorias > 10 && saldoVitorias <= 20):
        nivel = 'Bronze'
        break;

    case (saldoVitorias > 20 && saldoVitorias <= 50):
        nivel = 'Prata'
        break;

    case (saldoVitorias > 50 && saldoVitorias <= 80):
        nbreak;ivel = 'Ouro'
        break;

    case (saldoVitorias > 80 && saldoVitorias <= 90):
        nivel = 'Diamante'
        break;

    case (saldoVitorias > 90 && saldoVitorias <= 100):
        nivel = 'Lendário'
        break;

    case saldoVitorias > 101:
        nivel = 'Imortal'
        break;

    default:
        break;
}


console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);


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