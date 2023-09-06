/*Funções em javasript 

existe 2 tipos de funções:
- Reservadas pela linguagem, é necessario apenas chamar a função para que seja executada
alert()
prompt()
console.log()

- Personalizadas
Criadas pelo usuário, é necessário que sejam construidas
utilizando a estrutura:
function nomeDaFuncao() {


}
e em seguidas chamadas para serem executadas

Em cada função há a presença dos parenteses () que podem estar vazio () ou não.
Os parenteses recebem um argumento. Quando este argumento é uma variável, dizemos que ele recebe um parámetro*/

/*Função personalizada sem argumento, ja o coamndo console.log("Denis") possui um argumento de tipo string*/


//Function
{

//saudação
{
function saudacao() {

    console.log("Denis");

}
saudacao();
}

//nome
{
//Função personalizada com parametro, pois se trata de uma variavel previamente declarada e que será utilizada no bloco de codigo

var nome;
function despedida(nome) {

    console.log("tchau, " + nome)

}
despedida("João");
}

//soma
{
//Função personalizada com PARAMETRO, pois há duas varaveis nos parenteses que foram previamente declaradas e que foram
//utilizadas no bloco de codigo retornando um calculo (soma)

function soma(a, b) {

    return a + b;

}
var resultado = soma(5, 3);
console.log(resultado);
}

}