/**
 * Suite de Pruebas Unitarias para la Bolsa de Trabajo
 */
function ejecutarPruebasBolsa() {
    console.log("🧪 Iniciando pruebas unitarias de componente-bolsa-argentina...");

    // Prueba 1: Protección de contenedor inválido
    const res = inicializarBolsaTrabajo("id-inexistente", []);
    console.assert(res === null, "❌ Falló Prueba 1: Debería retornar null ante IDs de contenedor inválidos.");
    if (res === null) console.log("✅ Prueba 1 superada.");

    // Prueba 2: Generación correcta con vacantes vacías
    const divTest = document.createElement('div');
    divTest.id = "test-bolsa";
    document.body.appendChild(divTest);

    const comp = inicializarBolsaTrabajo("test-bolsa", [], "test@demo.com");
    console.assert(comp !== null, "❌ Falló Prueba 2: El componente de bolsa de trabajo no se renderizó.");
    if (comp !== null) console.log("✅ Prueba 2 superada.");

    // Prueba 3: Verificación del enlace mailto de salida
    const link = comp.querySelector('a');
    console.assert(link !== null, "❌ Falló Prueba 3: El componente debe contener un enlace de acción para postularse.");
    console.assert(link.href.includes("mailto:test@demo.com"), "❌ Falló Prueba 3: El atributo href del enlace no se armó con el correo indicado.");
    if (link && link.href.includes("mailto:test@demo.com")) console.log("✅ Prueba 3 superada.");

    document.body.removeChild(divTest);
    console.log("🏁 Pruebas de bolsa de trabajo finalizadas.");
}