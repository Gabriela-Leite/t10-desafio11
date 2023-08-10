var nome = prompt('Digite seu nome:');
alert('Seja bem-vinda, ' + nome +'!');

var num = parseInt(prompt('Digite um número inteiro:'));

if (num % 2 === 0 && num > 0 && num < 100) {
  alert('O número atende aos critérios.');
} else {
  alert('O número não atende aos critérios.');
}