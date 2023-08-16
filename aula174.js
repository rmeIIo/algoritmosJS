var nome = prompt("Digite seu nome: ")
var altura = prompt("Digite sua altura em centímetros: ")
var peso = prompt("Digite seu peso em kg: ")
var classificacao = 0

altura = parseFloat(altura)
peso = parseFloat(peso)

var alturam = altura / 100

var m = peso / alturam ** 2
m = m.toFixed(2)

if (m < 16) {
  classificacao = 'baixo peso muito grave'
} else if (m >= 16 && m <= 16.99) {
  classificacao = 'baixo peso grave'
} else if (m >= 17 && m <= 18.49) {
  classificacao = 'baixo peso'
} else if (m >= 18.50 && m <= 24.99) {
  classificacao = 'peso normal'
} else if (m >= 25 && m <= 29.99) {
  classificacao = 'sobrepeso'
} else if (m >= 30 && m <= 34.99) {
  classificacao = 'obesidade grau I'
} else if (m >= 35 && m <= 39.99) {
  classificacao = 'obesidade grau II'
} else if (m >= 40) {
  classificacao = 'obesidade grau III'
}

document.write(nome + ' possui índice de massa corporal igual a ' + m + ', sendo classificado como: ' + classificacao)