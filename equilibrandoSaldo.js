const prompt = require('prompt-sync')({sigint: true});


let saldoAtual;
let valorDeposito;
let valorRetirada;
let saldoFinal;

function calculaSaldoAtualizado(){
    saldoAtual = parseFloat(prompt("Seu saldo atualizado: "));
    valorDeposito = parseFloat(prompt("Valor a ser depositado: "));
    valorRetirada = parseFloat(prompt("Valor a ser retirado: "))
    saldoFinal = (saldoAtual + valorDeposito) - valorRetirada;

    console.log("=================================================")
    console.log(`   Saldo: ${saldoAtual}\n 
    Depósito: ${valorDeposito}\n
    Saque: ${valorRetirada}`)
    console.log("=================================================")
    console.log("Saldo atualizado na conta:: " + saldoFinal.toFixed(2));
}


calculaSaldoAtualizado()