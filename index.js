import express from 'express'

const app = express()

app.get("/api/somar/:num1/:num2", (req, res) => {

    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    res.send({soma: num1 + num2})
})

//  Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.

app.get("/api/salario/:ganho/:qtdHora", (req, res) => {

    const ganho = Number(req.params.ganho);
    const qtdHora = Number(req.params.qtdHora);

    res.send({salario: ganho * qtdHora});
})


// Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
app.get("/api/media/:num1/:num2/:num3/:num4/:num5", (req, res) => {

    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    const num3 = Number(req.params.num3);
    const num4 = Number(req.params.num4);
    const num5 = Number(req.params.num5);

    const media = (num1 + num2 + num3 + num4 + num5) / 5; 

    res.send({media: media});

})

// Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5

app.get("/api/temperatura/:celsius", (req, res) => {

    const celsius = Number(req.params.celsius);

    const f = (9 * celsius + 160) / 5;

    res.send({"temperatura em fahrenheit": f})

});




app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})