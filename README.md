# Reposteria Delicias & Postres

Este es el prototipo funcional de la tienda en línea **Delicias & Postres**. El objetivo principal de este es demostrar la integración y reutilización de código mediante componentes web.


## Justificación de Reutilización de Código (Caso: Franquicia Vivián)

Para cumplir con los requerimientos de reutilización de datos sin alterar el maquetado visual original ni interferir en el trabajo, reutilizamos la estructura de metadatos oficiales de la franquicia **Vivián Alta Repostería**.

Tomamos e integramos los siguientes fragmentos de datos estructurados en formato **JSON-LD (Schema.org)**, los cuales se agregaron de forma limpia al final del `<body>`:

### Fragmento 1: Identidad de la Franquicia (`Bakery`)
Reutiliza la información de la red de 19 sucursales de la franquicia en la región del Bajío (León, Irapuato, Guanajuato, etc.), definiendo la autoridad del negocio:

```json
{
    "@context": "[https://schema.org](https://schema.org)",
    "@type": "Bakery",
    "@id": "[https://vivian.mx/#bakery-chain](https://vivian.mx/#bakery-chain)",
    "name": "Vivián Alta Repostería",
    "url": "[https://vivian.mx/](https://vivian.mx/)",
    "telephone": "+52 477 254 8575",
    "description": "Red de 19 sucursales de repostería artesanal premium en el Bajío mexicano...",
    "numberOfLocations": 19,
    "location": [
        {
            "@type": "Bakery",
            "name": "Vivián Planta de Producción Jardines de Jerez",
            "url": "[https://vivian.mx/sucursales/](https://vivian.mx/sucursales/)",
            "telephone": "+52 477 764 0657",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. de Las Hortencias 220",
                "addressLocality": "León",
                "addressRegion": "GTO",
                "addressCountry": "MX",
                "postalCode": "37530"
            }
        }
    ]
}
# Componente de Sucursales (Módulo Propio)
Ubicación: Encabezado (<header>).

Estrategia: Un selector interactivo configurado para operar en conjunto con los datos reutilizados de la franquicia. Su posición respeta el flujo.

2. Espacio Asignado: Rastreo de Pedido (Componente Ingrid)
Ubicación: Barra lateral (<aside>).

Identificador: #componente-rastreo-ingrid

Descripción: Zona reservada  para la integración del módulo de seguimiento logístico de Ingrid.

3. Espacio Asignado: Bolsa de Trabajo (Componente Argentina)
Ubicación: Pie de página (<footer>).

Identificador: #componente-bolsa-argentina

Descripción: Zona reservada para el componente de reclutamiento y vacantes.

Características del Entorno Demo
Interoperabilidad: El código permite añadir los scripts de datos sin romper la maquetación visual existente.

Estilos Modulares: Contenedores con tipografías y paleta de colores unificada, utilizando bordes discontinuos específicos para identificar visualmente las áreas de desarrollo de cada integrante.

Interactividad Básica: Sistema local en JavaScript para la simulación del carrito de compras (adición de productos y cálculo de totales).

👥 Colaboradores
Desarrollo de Interfaz y Filtro de Sucursales: Jade

Integración de Rastreo Logístico: Ingrid

Integración de Bolsa de Trabajo: Argentina