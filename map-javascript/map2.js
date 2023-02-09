arr = [1, 2, 3, 4];

newArr = arr.map((valorAtual, indice) => {
    if (indice != 0 && indice != arr.length -1)
        return ++valorAtual;

    return valorAtual;
});

console.log(newArr);