/**
* Suite de Pruebas Unitarias para el Rastreo de Pedidos
*/
function ejecutarPruebasRastreo() {

    console.log("🧪 Iniciando pruebas unitarias de componente-rastreo-ingrid...");
 
    // Prueba 1: Protección de contenedor inválido

    const res = inicializarRastreoPedido("id-ficticio");

    console.assert(res === null, "❌ Falló Prueba 1: Debería regresar null si el contenedor no existe.");

    if (res === null) console.log("✅ Prueba 1 superada.");
 
    // Prueba 2: Renderizado de la estructura básica

    const divTest = document.createElement('div');

    divTest.id = "test-rastreo";

    document.body.appendChild(divTest);

    const comp = inicializarRastreoPedido("test-rastreo");

    console.assert(comp !== null, "❌ Falló Prueba 2: El componente de rastreo no se creó.");

    console.assert(comp.querySelector('input') !== null, "❌ Falló Prueba 2: El componente no incluye un campo de texto input.");

    if (comp && comp.querySelector('input')) console.log("✅ Prueba 2 superada.");
 
    // Prueba 3: Validación de campos requeridos

    const inputCheck = comp.querySelector('input');

    console.assert(inputCheck.required === true, "❌ Falló Prueba 3: El campo input del número de guía debe ser estrictamente obligatorio (required).");

    if (inputCheck.required === true) console.log("✅ Prueba 3 superada.");
 
    document.body.removeChild(divTest);

    console.log("🏁 Pruebas de rastreo finalizadas.");

}
 