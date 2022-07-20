// const listaTarefas = ["Varrer a sala", "Lavar Roupa", "Comprar tomates", "Enviar email"]
// for(let indice = 0; indice < listaTarefas.length; indice++) {
//     console.log(listaTarefas[indice]);
// }

// function criaPares(texto) {
// console.log(texto);
// } 

// criaPares("sei la");
// criaPares("qualquer coisa");
const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function criaPares(listaDeNumeros){
    // fazer aqui
    //
    for (let indice = 0; indice < listaDeNumeros.length; indice++) {
        const valor = listaDeNumeros[indice];
        if (valor % 2 == 0) {
            console.log("Número par.", valor);
        } 
    }

    // let indice = 0;
    // while (indice < listaDeNumeros.length) {
    //     const valor = listaDeNumeros[indice];
    //     if (valor % 2 == 0) {
    //         console.log("Número par.", valor);
    //     } 
    //     indice++;
    // }
}

//setup
criaPares(valoresNum);

