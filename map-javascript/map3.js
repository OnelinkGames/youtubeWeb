arr = [1, 2, 3, 4];

newArr = arr.map((valorAtual, indice, array) => {
    return array.map((valorAtual2) => {
        return valorAtual2 += valorAtual + indice;
    });
});

console.log(newArr);