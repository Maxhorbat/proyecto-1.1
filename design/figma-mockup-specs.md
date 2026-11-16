# Especificaciones de Diseño - Figma Mockups & Prototipos

## 1. Información General del Archivo Figma
- **Nombre del Proyecto:** Stark Industries - Consumer Tech Portal & Defense Innovations
- **Diseñador:** UI/UX Engineering Team
- **Herramienta:** Figma Desktop / Web
- **Frame Principal:** `Desktop - 1440px x 4200px` (Auto-Layout habilitado)
- **Modo de Color:** sRGB
- **Estado del Prototipo:** Interactivo (Micro-interacciones en botones, estados hover, modal de keynote y flujo de reserva).

---

## 2. Mockups Disponibles en esta Carpeta
1. `stark-industries-figma-mockup.jpg`: Exportación a pantalla completa del diseño oficial creado en Figma.

---

## 3. Retícula y Layout (Grid System)
- **Tipo de Grid:** 12 Columnas Desktop
  - Ancho de columna: 72px
  - Medianil (Gutter): 24px
  - Márgenes laterales: 144px (Ancho de contenedor máximo: 1240px)
- **Espaciado Base (Spatial System):** Múltiplos de 8px (8px, 16px, 24px, 32px, 48px, 64px, 96px, 120px)

---

## 4. Secciones Definidas en el Mockup
1. **Global Header & Navigation:**
   - Logotipo Stark Industries (Isotipo poligonal en oro `#FFB800` + Tipografía Orbitron/Rajdhani).
   - Menú de navegación principal: *Products*, *Innovations*, *Legacy / Origins*, *Affiliates*.
   - Barra de utilidades: Buscador, Acceso de Usuario (`LVL-4 ACCESS`), Carrito de equipamiento y Testigo LED de estado (`SYS: ONLINE`).

2. **Hero Section:**
   - Badge superior: `[ LAUNCHING 2026 HORIZON-X ]` en marco dorado con micro-brillo.
   - Titular de Alto Impacto: `THE FUTURE IS NOW` con tipografía de alto peso y resplandor cian `#00E5FF`.
   - Subtitular descriptivo de ingeniería de propulsión civil y defensa desmilitarizada.
   - Botón Primario: `EXPLORE PRODUCTS CATALOG >` (Relleno cian neón `#00E5FF`).
   - Botón Secundario: `Watch Tech Keynote` (Borde sutil `#FFFFFF` con icono de reproducción).
   - Fondo de cabina de comando / HUD holográfico con retículas concéntricas y líneas de perspectiva.
   - Barra de telemetría inferior: `DEFENSE CLEARANCE 100%`, `AI CORE SYSTEM J.A.R.V.I.S.`, `ACTIVE NODES 42,900+`.

3. **Catálogo de Innovaciones Destacadas (Featured Innovations):**
   - Etiqueta técnica: `// CIVIL INNOVATION CATALOG`
   - Encabezado con enlace lateral `VIEW ALL PRODUCTS (5 SELECTIONS) ->`.
   - Grid de 5 productos de grado militar adaptados a consumo civil:
     - **Card 1:** *Stark Vision Lens AR* ($2,499) - Badge `MOST POPULAR`. Botón `EQUIP >` dorado.
     - **Card 2:** *J.A.R.V.I.S. Smart Hub* ($899) - Badge `AI POWERED`. Botón `EQUIP >` cian.
     - **Card 3:** *Nanotech Laptop* ($3,200) - Botón `EQUIP >` cian.
     - **Card 4:** *Arc Reactor Power Bank* ($299) - Botón `ORDER >` dorado.
     - **Card 5:** *Reactor Earbuds* ($349) - Botón `ACQUIRE >` cian.

4. **Especificaciones Técnicas / Legado de Poder (Tech Specs):**
   - Lado izquierdo: Holograma 3D interactivo / diagrama de diagnóstico del Arc Reactor con caja de estado `DIAGNOSTIC // STARK-04`.
   - Lado derecho: Titular `Legacy of Unmatched Power & Integrity` con 2 tarjetas de características clave:
     - *Arc Technology* (Células de energía de cero emisiones).
     - *Double-Armor Versatility* (Aleación aeroespacial carbono-titanio).

5. **Testimonios de Alto Mando (Trusted by Global Enclaves):**
   - Etiqueta: `// FROM OUR FIELD TESTERS`
   - Testimonial de Virginia "Pepper" Potts (CEO, Stark Enterprises).
   - Testimonial de Happy Hogan (Head of Global Security).

6. **Protocolo Drop 03 / Registro Anticipado (Access Upcoming Armor Drops):**
   - Módulo de transmisión con fondo de malla hexagonal y resplandor cian.
   - Campo de entrada corporativo con botón `GET EARLY ACCESS`.

7. **Footer Institucional:**
   - Visión corporativa, enlaces rápidos, acceso global a APIs y Quantum Licensing.
   - Barra de copyright, clasificación de defensa y protocolos de privacidad y seguridad.

---

## 5. Estados de Componentes y Prototipado
- **Default:** Superficies oscuras `#0B0F17` con bordes sutiles `#1E293B`.
- **Hover:** Elevación con sombra de resplandor `box-shadow: 0 0 25px rgba(0, 229, 255, 0.25)` y borde activo cian `#00E5FF`.
- **Active / Pressed:** Escala leve `scale(0.98)` y confirmación táctil con pulso acústico HUD.
