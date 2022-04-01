const dividir = require("./dividir")
const multiplicar = require("./multiplicar")
const somar = require("./somar")
const subtrair = require("./subtrair")

//somar e subtrair
console.log(`Somar 10 e 6: ${somar(10, 6)}`)
console.log(`Subtrair 20 e 12: ${subtrair(20, 12)}`)

//multiplicar
console.log(`Multiplicar 8 e 7: ${multiplicar(8, 7)}`)
console.log(`Multiplicar 0 e 12: ${multiplicar(0, 12)}`)

//dividir
console.log(`Dividir 10 e 0: ${dividir(10, 0)}`)
console.log(`Dividir 0 e 7: ${dividir(0, 7)}`)
console.log(`Dividir 0 e 0: ${dividir(0, 0)}`)