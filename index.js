console.log('algum texto');

let dataNasc = '13/02/1997';
console.log('Nascido em ' + dataNasc + ', natural de Natércia-MG');
console.log("Me chamam de 'Freitas'");
console.log('Alguns me chamam de "Luis"');

var antes = 'antes';
var validaEscopo = function() {
    var antesNaFunc = 'antes-na-func';
    console.log(`Na Func ${antes}, ${depois}, ${antesNaFunc}, ${depoisNaFunc}, ${naoDefinida}`);
    var depoisNaFunc = 'depois-na-func';
}
var depois = 'depois';
var naoDefinida;
validaEscopo();