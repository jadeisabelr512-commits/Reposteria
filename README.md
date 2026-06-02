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


// Especificación de Entradas y Salidas

Cada componente fue desarrollado de manera modular a la lógica de negocio, comunicándose estrictamente a través de parámetros

Módulo: Selector de Sucursales (Jade)
  Entradas :
  `contenedorId` *(String)*: ID del elemento donde se renderiza el selector.
  `opciones` *(Array)*: Lista de objetos con el formato `{ value: "id", text: "Nombre de la Sucursal" }`.
   
   Salidas: 
  `alCambiar` *(Function)*: Evento que devuelve el `value` de la sucursal seleccionada en tiempo real.

Módulo: Rastreo de Pedido (Ingrid)
  Entradas:
  `contenedorId` *(String)*: ID del elemento de destino.

  Salidas:
  `alConsultar` *(Function)*: Retorna el número de guía ingresado por el usuario y el elemento del DOM donde se inyectará el resultado visual.

 Módulo: Bolsa de Trabajo (Argentina)
  Entradas (Props): 
  `contenedorId` *(String)*: ID del elemento HTML contenedor.
  `vacantes` *(Array)*: Lista de objetos con formato `{ puesto: "Nombre", detalles: "Requisitos" }`.
  `correoPostulacion` *(String)*: Dirección de correo electrónico destino para el envío de postulaciones.

   Salidas:
  Generación dinámica de hipervínculo estructurado con protocolo `mailto:`.



//Metrica de Ahorro de Tiempo

Aplicando la fórmula de eficiencia de software:  
Ahorro % = ((Tiempo Reimplementación Manual - Tiempo Consumo) / Tiempo Reimplementación Manual) * 100

| Componente | (a) Tiempo Inicial | (b) Reimplementar Manual | (c) Tiempo de Consumo | Ahorro Porcentual (%) |

| Sucursales (Jade) | 2.5 horas | 1.5 horas | 10 minutos (0.16 h) | 89.3% |
| Rastreo (Ingrid) | 3.0 horas | 2.0 horas | 15 minutos (0.25 h) | 87.5% |
| Bolsa Trabajo (Argentina) | 2.0 horas | 1.0 hora | 10 minutos (0.16 h) | 84.0% |

Conclusión de Eficiencia: La arquitectura basada en componentes independientes redujo el tiempo de integración en segundos proyectos en un promedio superior al 86%, mitigando el retrabajo y asegurando la portabilidad del código.



// Pruebas Unitarias 

Para garantizar el funcionamiento correcto del software sin depender de entornos de ejecución pesados, cada componente incorpora una suite de pruebas nativas basada en aserciones (`console.assert`).

//Ejecución de Pruebas en Vivo:
1. Abra el proyecto en el navegador e ingrese a las Herramientas de Desarrollador (Inspeccionar).
2. Diríjase a la pestaña Consola.
3. Ejecute el comando de la suite correspondiente:
   * `correrPruebasSucursales();`
   * `ejecutarPruebasRastreo();`
   * `ejecutarPruebasBolsa();`

El sistema evaluará tres casos de uso críticos por módulo: (1) Robustez ante IDs inexistentes, (2) Correcto montaje estructural en el DOM y (3) Inyección asíncrona de datos dinámicos.



// Componente de Sucursales (Módulo Propio)
Ubicación: Encabezado (<header>).

Estrategia: Un selector interactivo configurado para operar en conjunto con los datos reutilizados de la franquicia. Su posición respeta el flujo.

//2. Espacio Asignado: Rastreo de Pedido (Componente Ingrid)
Ubicación: Barra lateral (<aside>).

Identificador: #componente-rastreo-ingrid

Descripción: Zona reservada  para la integración del módulo de seguimiento logístico de Ingrid.

//3. Espacio Asignado: Bolsa de Trabajo (Componente Argentina)
Ubicación: Pie de página (<footer>).

Identificador: #componente-bolsa-argentina

Descripción: Zona reservada para el componente de reclutamiento y vacantes.

//Características del Entorno 
Interoperabilidad: El código permite añadir los scripts de datos sin romper la maquetación visual existente.

Estilos Modulares: Contenedores con tipografías y paleta de colores unificada, utilizando bordes discontinuos específicos para identificar visualmente las áreas de desarrollo de cada integrante.

Interactividad Básica: Sistema local en JavaScript para la simulación del carrito de compras (adición de productos y cálculo de totales).

//👥 Colaboradores
Desarrollo de Interfaz y Filtro de Sucursales: Jade

Integración de Rastreo Logístico: Ingrid

Integración de Bolsa de Trabajo: Argentina