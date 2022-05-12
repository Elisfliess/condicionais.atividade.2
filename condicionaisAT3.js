//Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino

let turno = prompt('Qual turno você estuda?')
if(turno == 'matutino'){
    alert('bom dia')
}else if(turno == 'tarde'){
    alert('boa tarde')
}else if (turno =='noite'){
    alert ('boa noite')
}else{
    alert('valor inválido')
}