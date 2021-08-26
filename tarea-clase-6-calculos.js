function borrarIntegrantes(){
    let cantidadIntegrantesAEliminar = document.querySelectorAll('.integrante');
    let NumeroIntegrantesAEliminar = cantidadIntegrantesAEliminar.length
    
    for (let i = 0 ; i < NumeroIntegrantesAEliminar; i++){
        cantidadIntegrantesAEliminar[i].remove();
    }
    
}

function crearIntegrantes (value){
    for(let i = 1; i <= value; i++){
        crearIntegrante(i);
    } 
   
}

function crearIntegrante(indice){
    const $div = document.createElement('div');
    $div.className = "integrante";

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.placeholder = `Edad del Integrante #${indice}`;

    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}


