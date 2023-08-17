const { forEach } = require('lodash');

const prompt = require('prompt-sync')({sigint: true});

let qtdeAtivos = parseInt(prompt('Quantidade de ativos: '));
let ativo;
let listaAtivos = [];


function mostraListaAtivos(qtdeAtivos) {
    for (let index = 1; index <= qtdeAtivos; index++) {
        ativo = prompt(`Nome do ativo n° ${index}: `);
        listaAtivos.push(ativo);
    }
     listaAtivos.sort();


    for(let ativos of listaAtivos) {
        console.log(ativos);
    }
}

mostraListaAtivos(qtdeAtivos);