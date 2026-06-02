/**
 * Componente Modular: Bolsa de Trabajo
 * @param {string} contenedorId - ID del elemento HTML donde se va a renderizar.
 * @param {Array} vacantes - Lista de objetos de ofertas laborales [{ puesto: "X", detalles: "Y" }].
 * @param {string} correoPostulacion - Dirección de correo electrónico destino para las solicitudes.
 */
function inicializarBolsaTrabajo(contenedorId, vacantes = [], correoPostulacion = "") {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return null;

    contenedor.innerHTML = '';

    const divComponente = document.createElement('div');
    divComponente.style = "border: 1px solid #2ecc71; padding: 15px; border-radius: 8px; background-color: #f5fdf8; text-align: left;";

    const titulo = document.createElement('h4');
    titulo.style = "color: #27ae60; margin-top: 0; margin-bottom: 12px;";
    titulo.innerText = "💼 Bolsa de Trabajo";

    divComponente.appendChild(titulo);

    // Renderizar dinámicamente cada vacante usando etiquetas HTML fijas semánticas
    vacantes.forEach(vacante => {
        const details = document.createElement('details');
        details.style = "font-size: 13px; margin-bottom: 8px; background: #fff; padding: 6px; border: 1px solid #e2e2e2; border-radius: 4px;";

        const summary = document.createElement('summary');
        summary.style = "cursor: pointer; font-weight: bold; color: #2c3e50;";
        summary.innerText = vacante.puesto;

        const p = document.createElement('p');
        p.style = "margin: 5px 0 0 0; font-size: 12px; color: #666;";
        p.innerHTML = `<strong>Requisitos:</strong> ${vacante.detalles}`;

        details.appendChild(summary);
        details.appendChild(p);
        divComponente.appendChild(details);
    });

    // Botón de acción por correo electrónico
    const botonEnlace = document.createElement('a');
    botonEnlace.href = `mailto:${correoPostulacion}?subject=Postulacion%20Bolsa%20de%20Trabajo`;
    botonEnlace.innerText = "Enviar mi CV por Correo";
    botonEnlace.style = "display: block; text-align: center; text-decoration: none; background-color: #2ecc71; color: white; padding: 8px; border-radius: 4px; font-weight: bold; font-size: 13px; margin-top: 10px;";

    divComponente.appendChild(botonEnlace);
    contenedor.appendChild(divComponente);

    return divComponente;
}