//01 Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga  se ela poderá ou não  votar este ano. (não é necessário considerar o mes em que ela nasceu).

let data = parseInt(prompt('Qual é a sua data de nascimento?'))


if (data <= 2006){
    alert('Parabéns Você pode votar esse ano!')
} else{
    alert('Você não pode votar');
    
}