let notas = [];
function agregarNota() {
    const textoNota = document.getElementById('nota1').value;
    console.log(textoNota);
    
    if (textoNota.trim() !== '') {
        notas.push({ id: Date.now(), texto: textoNota, editada: false });
        document.getElementById('nota1').value = '';
        mostrarNotas();
    }
}
function mostrarNotas() {
    const contenedorNotas = document.getElementById('contenedorNot');
    contenedorNotas.innerHTML = '';
    notas.forEach(nota => {
        const divNota = document.createElement('div');
        divNota.classList.add('nota');
        if (nota.editada) {
            divNota.classList.add('editada');
        }
        divNota.innerHTML = `
            <p>${nota.texto}</p>
            <div class="acciones">
                <button onclick="editarNota(${nota.id})">Editar</button>
                <button onclick="eliminarNota(${nota.id})">Eliminar</button>
            </div>
        `;
        contenedorNotas.appendChild(divNota);
    });
}

function editarNota(id) {
    const nuevaNotaTexto = prompt('Edita tu nota:');
    if (nuevaNotaTexto !== null && nuevaNotaTexto.trim() !== '') {
        notas = notas.map(nota => 
            nota.id === id ? { ...nota, texto: nuevaNotaTexto, editada: true } : nota
        );
        mostrarNotas();
    }
}

function eliminarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    mostrarNotas();
}

function filtrarNotas() {
    const terminoBusqueda = document.getElementById('buscarNota').value.toLowerCase();
    const notasFiltradas = notas.filter(nota => nota.texto.toLowerCase().includes(terminoBusqueda));
    const contenedorNotas = document.getElementById('contenedorNotas');
    contenedorNotas.innerHTML = ''; 
    notasFiltradas.forEach(nota => {
        const divNota = document.createElement('div');
        divNota.classList.add('nota');
        if (nota.editada) {
            divNota.classList.add('editada');
        }
        divNota.innerHTML = `
            <p>${nota.texto}</p>
            <div class="acciones">
                <button onclick="editarNota(${nota.id})">Editar</button>
                <button onclick="eliminarNota(${nota.id})">Eliminar</button>
            </div>
        `;
        contenedorNotas.appendChild(divNota);
    });
}

document.getElementById('agregarNota').addEventListener('click', agregarNota);
document.getElementById('buscar').addEventListener('input', filtrarNotas);