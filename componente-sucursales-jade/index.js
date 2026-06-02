/**
 * Componente Modular: Selector de Sucursales
 * @param {string} contenedorId - ID del elemento HTML donde se va a renderizar.
 * @param {Array} opciones - Arreglo de objetos con formato [{ value: "id", text: "Nombre" }].
 * @param {Function} alCambiar - Callback que se ejecuta al seleccionar una sucursal (devuelve el valor).
 */
function inicializarSelectorSucursales(contenedorId, opciones = [], alCambiar = null) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
        console.error(`Contenedor con ID "${contenedorId}" no encontrado.`);
        return null;
    }

    // Limpiar el contenedor por si acaso
    contenedor.innerHTML = '';

    // Crear la estructura de manera aislada (Encapsulado)
    const divComponente = document.createElement('div');
    divComponente.style = "background-color: #fff; border: 1px solid #ebd4cb; padding: 10px 15px; border-radius: 8px; display: inline-block;";

    const label = document.createElement('label');
    label.style = "font-weight: bold; color: #8c4f6e; font-size: 14px; margin-right: 8px;";
    label.innerText = "📍 Sucursal:";

    const select = document.createElement('select');
    select.style = "padding: 5px; border-radius: 4px; border: 1px solid #ccc; font-family: inherit; cursor: pointer;";
    select.autocomplete = "off";

    // Opción por defecto (Placeholder)
    const opcionDefecto = document.createElement('option');
    opcionDefecto.value = "";
    opcionDefecto.innerText = "Selecciona sucursal";
    select.appendChild(opcionDefecto);

    // Inyectar dinámicamente las opciones que pasen por parámetro
    opciones.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.innerText = opt.text;
        select.appendChild(option);
    });

    // Registrar la salida (Salida por evento / Callback)
    if (alCambiar && typeof alCambiar === 'function') {
        select.addEventListener('change', (e) => {
            alCambiar(e.target.value);
        });
    }

    // Armar el componente en el DOM
    divComponente.appendChild(label);
    divComponente.appendChild(select);
    contenedor.appendChild(divComponente);

    return divComponente;
}