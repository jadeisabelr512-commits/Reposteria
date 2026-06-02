/**
 * Suite de Pruebas Unitarias para el Selector de Sucursales
 */
function ejecutarPruebasSucursales() {
    console.log("🧪 Iniciando pruebas unitarias de componente-sucursales-jade...");

    // --- CASO DE PRUEBA 1: Retorno nulo ante contenedores inexistentes ---
    const resultadoInexistente = inicializarSelectorSucursales("id-no-valido", []);
    console.assert(resultadoInexistente === null, "❌ Falló Prueba 1: Debería retornar null si el ID del contenedor no existe en el DOM.");
    if (resultadoInexistente === null) console.log("✅ Prueba 1 superada: Manejo correcto de errores de montaje.");


    // --- CASO DE PRUEBA 2: Creación exitosa del elemento con datos mínimos ---
    // Crear un contenedor temporal en el DOM para la prueba
    const contenedorPrueba = document.createElement('div');
    contenedorPrueba.id = "contenedor-temporal-test";
    document.body.appendChild(contenedorPrueba);

    const opcionesPrueba = [
        { value: "jerez", text: "León - Planta Jardines de Jerez" },
        { value: "panorama", text: "León - Panorama" }
    ];

    const componenteGenerado = inicializarSelectorSucursales("contenedor-temporal-test", opcionesPrueba);
    
    console.assert(componenteGenerado !== null, "❌ Falló Prueba 2: El componente no se renderizó en el contenedor.");
    console.assert(componenteGenerado.tagName === "DIV", "❌ Falló Prueba 2: El elemento principal del componente debe ser un DIV.");
    if (componenteGenerado && componenteGenerado.tagName === "DIV") {
        console.log("✅ Prueba 2 superada: Componente instanciado correctamente en la interfaz.");
    }


    // --- CASO DE PRUEBA 3: Verificación de estructura interna (Select y Opciones) ---
    const selectInterno = componenteGenerado.querySelector('select');
    console.assert(selectInterno !== null, "❌ Falló Prueba 3: No se encontró la etiqueta <select> dentro del componente.");
    // Debería tener 3 opciones en total (la default + las 2 de prueba)
    console.assert(selectInterno.options.length === 3, `❌ Falló Prueba 3: Se esperaban 3 opciones, se encontraron ${selectInterno.options.length}`);
    
    if (selectInterno && selectInterno.options.length === 3) {
        console.log("✅ Prueba 3 superada: Las opciones pasadas por parámetro se inyectaron correctamente.");
    }

    // Limpieza del DOM de prueba
    document.body.removeChild(contenedorPrueba);
    console.log("🏁 Pruebas finalizadas.");
}

// Ejecutar automáticamente al cargar el script en el entorno de desarrollo
if (typeof window !== 'undefined') {
    // Descomentar la siguiente línea si deseas ver las pruebas correr directo en la consola del navegador:
    // ejecutarPruebasSucursales();
}