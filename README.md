# Stark Industries — Portal Web de Innovaciones Civiles y Tecnología Cuántica

![Stark Industries Banner](assets/icons/stark-logo.svg)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/)
[![XAMPP](https://img.shields.io/badge/XAMPP-Ready-FB7A24?style=for-the-badge&logo=xampp&logoColor=white)](https://www.apachefriends.org/)

---

## 1. Descripción del Proyecto

El proyecto web **Stark Industries** es una plataforma digital de comercio y presentación tecnológica de grado aeroespacial y cuántico orientada a la vida civil. Inspirada en los prototipos interactivos y mockups diseñados en Figma, la web traslada la ingeniería de vanguardia militar de Stark Labs a soluciones de propulsión, computación cuántica, inteligencia artificial domótica y almacenamiento de energía limpia para el consumidor global.

La interfaz implementa una estética de alta fidelidad con temática oscura (*Dark Futuristic / Sci-Fi HUD*), combinando acentos luminiscentes en **Cian Neón** (`#00E5FF`) y **Oro Stark** (`#FFB800`), retículas técnicas de telemetría, animaciones fluidas y microinteracciones sonoras de cabina.

---

## 2. Objetivo del Proyecto

1. **Organización y Arquitectura:** Establecer una estructura rigurosa de carpetas y archivos para proyectos web profesionales, separando activos gráficos, especificaciones de diseño, código fuente (CSS/JS) y documentación técnica.
2. **Fidelidad al Prototipo Figma:** Implementar de forma idéntica la página web diseñada en Figma, respetando cada sección, tipografía, tarjeta de producto, disposición en retícula y jerarquía visual.
3. **Optimización de Recursos Gráficos:** Preparar tanto los elementos originales exportados del diseño de Figma como versiones vectoriales SVG de resolución infinita para pantallas Retina y monitores 4K.
4. **Interactividad y Experiencia de Usuario (UX):** Dotar a la página de funcionalidades dinámicas en JavaScript moderno (ES6+), incluyendo telemetría interactiva, carrito de equipamiento, notificaciones HUD en tiempo real, modal de presentación tecnológica y audio sintetizado mediante Web Audio API.

---

## 3. Público Objetivo (Target Audience)

- **Usuarios Corporativos y Gobiernos:** Organizaciones en búsqueda de infraestructura energética limpia (Arc Technology) y computación con cifrado cuántico.
- **Entusiastas de la Tecnología y Domótica:** Consumidores interesados en asistentes inteligentes autónomos para el hogar impulsados por redes neuronales (J.A.R.V.I.S. Smart Hub) y visores de realidad aumentada (Stark Vision Lens AR).
- **Profesionales de Campo y Seguridad:** Equipos tácticos y de rescate que requieren equipamiento ultraligero de alta resistencia en aleación titanio-carbono y audio de aislamiento espacial.

---

## 4. Funcionalidades Previstas e Implementadas

- [x] **Barra de Navegación Global (Header Sticky):**
  - Isotipo oficial de Stark Industries en vectores SVG.
  - Navegación fluida con desplazamiento suave hacia las secciones (*Products*, *Innovations*, *Legacy / Origins*, *Affiliates*).
  - Buscador predictivo interactivo integrado.
  - Indicador de nivel de autorización de usuario (`LVL-4 ACCESS`).
  - Contador dinámico de equipamiento en carrito con badge en tiempo real.
  - Testigo de telemetría en vivo con animación de pulso (`SYS: ONLINE`).
  - Menú hamburguesa responsivo para dispositivos móviles.

- [x] **Hero Section Inmersivo:**
  - Visor de cabina de mando con perspectiva de túnel y retículas HUD.
  - Badge de prelanzamiento: `[ LAUNCHING 2026 HORIZON-X ]`.
  - Titular principal con resplandor neón: `THE FUTURE IS NOW`.
  - Llamada a la acción doble:
    - *Explore Products Catalog >* (Scroll automático al catálogo).
    - *Watch Tech Keynote* (Apertura de ventana modal interactiva con briefing holográfico).
  - Barra de telemetría en tiempo real:
    - `DEFENSE CLEARANCE: 100%`
    - `AI CORE SYSTEM: J.A.R.V.I.S.`
    - `ACTIVE NODES: 42,900+` (con animación de conteo numérico progresivo).

- [x] **Catálogo de Innovaciones Destacadas (Featured Innovations):**
  - Grid responsivo de 5 productos de grado civil con filtros y badges de estado:
    1. **Stark Vision Lens AR** (`$2,499`) — Badge `MOST POPULAR`.
    2. **J.A.R.V.I.S. Smart Hub** (`$899`) — Badge `AI POWERED`.
    3. **Nanotech Laptop** (`$3,200`) — Computación cuántica de 128-Qbit.
    4. **Arc Reactor Power Bank** (`$299`) — Batería de energía de punto cero (100,000 mAh).
    5. **Reactor Earbuds** (`$349`) — Cápsulas acústicas de telemetría táctica.
  - Botones interactivos (`EQUIP >`, `ORDER >`, `ACQUIRE >`) con confirmación acústica HUD y mensaje Toast flotante.

- [x] **Módulo de Diagnóstico y Especificaciones (Tech Specs):**
  - Visor holográfico interactivo con diagrama rotativo del reactor Arc (`DIAGNOSTIC // STARK-04`).
  - Presentación del legado de innovación con tarjetas de *Arc Technology* y *Double-Armor Versatility*.

- [x] **Testimonios de Campo (Trusted by Global Enclaves):**
  - Citas de alto mando validadas por Virginia "Pepper" Potts (CEO) y Happy Hogan (Jefe de Seguridad Global).

- [x] **Protocolo de Lanzamiento Anticipado (Drop 03 Protocol):**
  - Formulario de reserva con validación de correo electrónico corporativo y respuesta visual con autorización de protocolo.

- [x] **Footer Corporativo:**
  - Resumen de misión, enlaces rápidos a laboratorios de I+D, portal de desarrolladores, API & SDK y cláusulas legales de confidencialidad.

---

## 5. Estructura Obligatoria del Proyecto

```text
mi-proyecto-web/ (c:\xampp\htdocs\interfas\proyecto\)
│
├── assets/                          # Recursos gráficos optimizados
│   ├── icons/                       # Iconos y logotipos en formato SVG
│   │   ├── stark-logo.svg           # Isotipo oficial de Stark Industries
│   │   ├── icon-search.svg          # Icono de búsqueda
│   │   ├── icon-user.svg            # Icono de perfil de seguridad
│   │   ├── icon-cart.svg            # Icono de carrito de equipamiento
│   │   ├── icon-shield.svg          # Icono de armadura y protección
│   │   ├── icon-arc.svg             # Icono de reactor Arc
│   │   ├── icon-mail.svg            # Icono de mensajería y drops
│   │   ├── icon-play.svg            # Icono de reproducción de keynote
│   │   └── icon-arrow.svg           # Icono de flecha directriz
│   └── images/                      # Renders vectoriales y capturas de Figma
│       ├── hero-hud-cockpit.svg     # Fondo de cabina HUD del Hero
│       ├── stark-vision-lens.svg    # Render de alta definición Vision Lens AR
│       ├── jarvis-smart-hub.svg     # Render de alta definición J.A.R.V.I.S. Hub
│       ├── nanotech-laptop.svg      # Render de alta definición Nanotech Laptop
│       ├── arc-power-bank.svg       # Render de alta definición Arc Power Bank
│       ├── reactor-earbuds.svg      # Render de alta definición Reactor Earbuds
│       ├── arc-diagnostic.svg       # Diagrama holográfico de diagnóstico Arc
│       ├── avatar-pepper.svg        # Avatar corporativo de Pepper Potts
│       ├── avatar-happy.svg         # Avatar de seguridad de Happy Hogan
│       └── [crops originales]       # Archivos .jpg exportados del mockup
│
├── design/                          # Diseños y mockups de Figma
│   ├── stark-industries-figma-mockup.jpg # Captura completa del diseño Figma
│   └── figma-mockup-specs.md        # Especificaciones técnicas de Figma
│
├── src/                             # Código fuente para desarrollo web
│   ├── css/
│   │   └── style.css                # Hoja de estilos con variables CSS3
│   └── js/
│       └── main.js                  # Lógica interactiva en JavaScript ES6+
│
├── index.html                       # Estructura semántica HTML5 de la página
├── README.md                        # Documentación técnica general del proyecto
└── style-guide.md                   # Guía de estilos, tokens HEX y componentes
```

---

## 6. Instalación y Ejecución en Servidor Local (XAMPP)

1. **Ubicación en el Servidor:**
   Asegúrese de que el proyecto se encuentre alojado dentro de la carpeta raíz de documentos de Apache:
   ```text
   C:\xampp\htdocs\interfas\proyecto\
   ```

2. **Iniciar Servicios:**
   - Abra el panel de control de **XAMPP** (`XAMPP Control Panel`).
   - Inicie el módulo **Apache** haciendo clic en **Start**.

3. **Acceder desde el Navegador Web:**
   Abra cualquier navegador moderno (Google Chrome, Firefox, Edge, Safari) e ingrese a la siguiente dirección URL:
   ```text
   http://localhost/interfas/proyecto/
   ```

4. **Compatibilidad:**
   - El proyecto no requiere conexión a base de datos externa ni preprocesadores.
   - Carga instantánea con soporte de fuentes web de Google Fonts (*Orbitron*, *Rajdhani*, *Inter*, *Share Tech Mono*).

---

## 7. Paquete Comprimido para Entrega (.zip)

En cumplimiento con la **Consigna y Entregable** de la actividad académica, se incluye en el directorio el archivo comprimido:
- `proyecto-stark-industries.zip`

El archivo `.zip` contiene la estructura íntegra, recursos gráficos, mockups de Figma, documentación técnica (`README.md`, `style-guide.md`) y la implementación completa de código listo para calificar.

---

© 2026 Stark Industries Inc. Desarrollado para evaluación académica de Interfaz y Diseño Web.
#   p r o y e c t o - 1 . 1  
 