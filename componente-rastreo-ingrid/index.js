/**
 *
 * Componente Modular: Rastreo de Pedido
 *
 * @param {string} contenedorId - ID del elemento HTML donde se va a renderizar.
 *
 * @param {Function} alConsultar - Callback que se ejecuta al enviar el formulario (recibe el número de guía).

*/

function inicializarRastreoPedido(contenedorId, alConsultar = null) {

    const contenedor = document.getElementById(contenedorId);

    if (!contenedor) return null;
 
    contenedor.innerHTML = '';
 
    const divComponente = document.createElement('div');

    divComponente.style = "border: 1px solid #3498db; padding: 15px; border-radius: 8px; background-color: #f4f9fd; margin-top: 15px;";
 
    const titulo = document.createElement('h4');

    titulo.style = "color: #2980b9; margin-top: 0; margin-bottom: 8px;";

    titulo.innerText = "🚚 Rastreo de Pedido";
 
    const form = document.createElement('form');

    form.style = "display: flex; flex-direction: column; gap: 8px;";
 
    const input = document.createElement('input');

    input.type = "text";

    input.id = "num-guia-input";

    input.placeholder = "Número de guía (Ej: DT-9832)";

    input.required = true;

    input.style = "padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 13px;";
 
    const boton = document.createElement('button');

    boton.type = "submit";

    boton.innerText = "Rastrear Envío";

    boton.style = "background-color: #3498db; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold;";
 
    const resultadoDiv = document.createElement('div');

    resultadoDiv.id = "resultado-rastreo-dinamico";

    resultadoDiv.style = "margin-top: 10px; font-size: 12px; display: none; color: #27ae60; font-weight: bold;";
 
    form.addEventListener('submit', (e) => {

        e.preventDefault();

        if (alConsultar && typeof alConsultar === 'function') {

            alConsultar(input.value, resultadoDiv);

        }

    });
 
    form.appendChild(input);

    form.appendChild(boton);

    divComponente.appendChild(titulo);

    divComponente.appendChild(form);

    divComponente.appendChild(resultadoDiv);

    contenedor.appendChild(divComponente);
 
    return divComponente;

}
 