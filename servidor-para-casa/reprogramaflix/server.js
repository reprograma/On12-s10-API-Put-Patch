
const app = require("./src/app.js")
const PORT = 8080;

// definir uma porta para o nosso servidor
app.listen(PORT, () => {
    console.log(`Servidor ta no grau ${PORT}`)
})
