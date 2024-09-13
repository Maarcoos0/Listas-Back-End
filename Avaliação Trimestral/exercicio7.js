var CF = 2000

console.log("o custo de Fabrica e :"+CF)

const imposto = (CF / 100) * 45
const CD = (CF / 100) * 28
const CC = (CF + CD + imposto)

console.log("28% do destribuidor seria :"+CD)
console.log("45% de Impostos seria :"+ imposto)
console.log("E no final o custo pra comprar o carro sera :"+CC)