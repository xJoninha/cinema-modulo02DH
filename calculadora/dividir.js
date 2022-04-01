const dividir = (num1, num2) => num2 === 0 ? "Não se pode dividir por zero" : num1 / num2
console.log(`Dividir recebe 14 e 6 retorna: ${dividir(15, 6)}`)

module.exports = dividir