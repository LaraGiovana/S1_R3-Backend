const express = require("express");
const app = express();
const PORT = 8081;

app.get("/ano/:anoParametro", (req, res) => {
    const { anoParametro } = req.params;
    const anoConvertido = parseInt(anoParametro);

    if (isNaN(anoConvertido)) {
        return res.status(400).send("Coloque um ano válido.");
    }

    const ehBissexto = (anoConvertido % 4 === 0 && anoConvertido % 100 !== 0) || (anoConvertido % 400 === 0);

    if (ehBissexto) {
        res.status(200).send(`O ano ${anoConvertido} é bissexto`);
    } else {
        res.status(200).send(`O ano ${anoConvertido} não é bissexto`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);

    });