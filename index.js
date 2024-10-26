let saldoVitorias = classificacaoHeroi(35, 12)
let nivel = ''

function classificacaoHeroi (vitorias, derrotas) {
    return vitorias - derrotas
}


switch (true) {
    case (saldoVitorias < 10):
        return nivel = 'Ferro'
        

    case (saldoVitorias > 10 && saldoVitorias <= 20):
        return nivel = 'Bronze'
        

    case (saldoVitorias > 20 && saldoVitorias <= 50):
        return nivel = 'Prata'
        
    case (saldoVitorias > 50 && saldoVitorias <= 80):
        return nivel = 'Ouro'
        

    case (saldoVitorias > 80 && saldoVitorias <= 90):
        return nivel = 'Diamante'
        

    case (saldoVitorias > 90 && saldoVitorias <= 100):
        return nivel = 'Lendário'
        

    case saldoVitorias > 101:
        return nivel = 'Imortal'
        

    default:
        break;
}


console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
