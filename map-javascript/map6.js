arr = [
    {
        nome: "Jack",
        idade: 70,
        genero: "M"
    },
    {
        nome: "Julius",
        idade: 30,
        genero: "M"
    },
    {
        nome: "Julia",
        idade: 18,
        genero: "F"
    },
    {
        nome: "Betina",
        idade: 60,
        genero: "F"
    }
]

newArr = arr.map((valorAtual, indice) => {
    temp = {
        id: indice,
        nome: valorAtual.nome,
        idade: valorAtual.idade,
    };

    if (valorAtual.genero == "M") {
        if (valorAtual.idade > 60) {
            temp.aposentado = "Sim";
        } else {
            temp.aposentado = "Não";
        }
    } else {
        if (valorAtual.idade > 55) {
            temp.aposentado = "Sim"
        } else {
            temp.aposentado = "Não"
        }
    }

    return temp;
});

console.log(newArr);