const s = 25400

console.log("o evento durou :"+ s +" segundos")

let minutos = (s/60)
let horas =(minutos/60)
let ss =(s%60)
let Sminutos = (minutos%60)

console.log("Foram exatas :"+horas+" horas, "+Sminutos+"minutos, "+ss+"segundos de evento")