arr = [1, 2, 3];

thisArg = {
    nome: "MeuNome"
}

newArr = arr.map(function(valorAtual, indice) {
    return { 
        descricao: `${this.nome} foi chamado ${indice + 1} ${(indice + 1) < 2 ? "vez" : "vezes"}`
    }
}, thisArg);

newArr2 = arr.map(function(valorAtual, indice) {
    return { 
        descricao: `${this.nome} foi chamado ${indice + 1} ${(indice + 1) < 2 ? "vez" : "vezes"}`
    }
});

console.log(newArr);
console.log(newArr2);