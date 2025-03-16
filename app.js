// El principal objetivo de este desafío 
// es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//
// 1 Hacer una lista posible de participantes para el amigo secreto.
let amigos = [];
// 2 Función para agregar un amigo a la lista de participantes.
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();


    if (nombreAmigo !== "" ){
        amigos.push (nombreAmigo);   // Agregar el nombre a la lista de amigos      
        inputAmigo.value = '';      // Limpiar el campo de entrada
        actualizarListaAmigos();
    }else {
        alert('Por favor, ingrese un nombre válido');
    }
} 
// 3. Función para actualizar la lista de amigos en la interfaz.
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista de amigos

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li); 
        });
}

//4 Funcion para sortear un amigo secreto.
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo");
        return;        
    }
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    //5 Mezclar la lista de amigos
    const amigosMezclados = mezclarArray([...amigos]);

    //6 Asignar un amigo a cada participante.
    const asignaciones = [];
    for (let i = 0; i < amigosMezclados.length; i++) {
        const amigoActual = amigosMezclados[i];
        const amigoSecreto = amigosMezclados[(i + 1) % amigosMezclados.length];
        asignaciones.push(`${amigoActual}  ➔ ${amigoSecreto}`);
            }
    
    //7 Mostrar los resultados en la interfaz.
    asignaciones.forEach(asignacion => {
        const li = document.createElement('li');
        li.textContent = asignacion;
        resultado.appendChild(li);
    });
}
// Función para mezclar un array (algoritmo de Fisher-Yates)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
