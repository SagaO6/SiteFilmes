//Definindo uma matriz 3x3

/*var matriz = [

[1, 2, 3],
[4, 5, 6],
[7, 8, 9]

];

alert (matriz[2][1]);*/

//E ai qual numero vai aparecer n atela ?

alert("acerte o numero 1 e decore o proximo quadro")

alert("1 | 2 | 3  \n" + "4 | 5 | 6  \n" + "7 | 8 | 9 ")







while (true) {

    var numero = prompt("Digite um numero de 0 a 2: ");
    var numero2 = prompt("Digite um numero de 0 a 2: ");

    var matriz = [

        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]

    ];

    //numero && numero2 > 2
    //alert("Digite entre o numero 0 a 2");


    if (matriz[numero][numero2] == 1) {

        alert("Congratulations! " + matriz[numero][numero2] + " esse é o numero");
        break

    }



    else {

        alert("voce perdeu");
        alert("Tente novamente");

    }



}

//alert (matriz[numero][numero2]);