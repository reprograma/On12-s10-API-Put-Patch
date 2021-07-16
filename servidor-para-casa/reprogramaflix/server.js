const app = require("./src/app.js")
const porta = 8080
// definir uma porta para o nosso servidor
app.listen(porta, () => {
    console.log(`Servidor ${porta} tá no grau`)
})
