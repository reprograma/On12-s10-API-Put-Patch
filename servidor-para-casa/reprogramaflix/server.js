
const app = require("./src/app.js")
const port=6060

// definir uma porta para o nosso servidor
app.listen(6060, () => {
    console.log(`Servidor ta no grau ${port}.`)
})
