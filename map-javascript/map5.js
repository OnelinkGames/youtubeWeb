arr = [1, 2, 3, 4];

function createNewArray(valorAtual, indice, array) {
    return array.map((valorAtual2) => {
        return valorAtual2 += valorAtual + indice;
    });
}

newArr = arr.map(createNewArray);

console.log(newArr);