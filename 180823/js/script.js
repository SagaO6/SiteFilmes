//Exercicio: pergunte ao usuario seu nome utilizando o comando prompt() Em seguida, pergunte ao usuario sua idade.
//Se a idade ao usuario for menor que 18 anos, exiba na tela por meio do comando alert() que o usuario em questão é
//menor de idade. Se não, exiba na tela que o usuario é maior de idade

var nome,idade;

nome = prompt("Qual seu nome ? ");
idade = prompt("Qual sua idade ?");

if (idade <= 17) {

    alert("Voce é menor de idade");
    
}


else if( idade <= 59){

    alert("Voce é maior de idade")

}


else{

    alert("voce é gay")

} 

