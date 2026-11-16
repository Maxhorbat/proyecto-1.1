# Guía de Estilos Visuales (Style Guide) — Stark Industries Web Portal

Esta guía documenta exhaustivamente los fundamentos visuales, tokens de diseño, paleta cromática, tipografía, retícula, componentes de interfaz y efectos desarrollados en Figma para la plataforma web de **Stark Industries**.

---

## 1. Identidad de Marca y Concepto Visual
El portal de **Stark Industries** proyecta alta ingeniería aeroespacial, tecnología cuántica de defensa adaptada al uso civil y sofisticación minimalista. El lenguaje visual combina una paleta oscura y profunda con acentos luminiscentes en **Cian Eléctrico** y **Oro Stark**, acompañados de gráficos vectoriales de telemetría HUD (*Heads-Up Display*).

---

## 2. Paleta de Colores Oficial (Color Palette)

### 2.1 Colores Principales y Acentos Neón
| Muestra | Nombre del Token | Código HEX | RGB | Rol / Aplicación en Interfaz |
|:---:|:---|:---|:---|:---|
| 🟦 | `--color-cyan-primary` | `#00E5FF` | `rgb(0, 229, 255)` | Color primario de acción, resplandor HUD, enlaces activos y botones principales. |
| 🩵 | `--color-cyan-glow` | `#38BDF8` | `rgb(56, 189, 248)` | Color secundario de soporte lumínico y halos de dispersión. |
| 🟨 | `--color-gold-stark` | `#FFB800` | `rgb(255, 184, 0)` | Acento institucional de Stark Industries, badges "Most Popular" e isotipo. |
| ⚡ | `--color-gold-bright` | `#FFE600` | `rgb(255, 230, 0)` | Hover en acentos dorados y elementos de advertencia o diagnóstico. |

### 2.2 Fondos y Superficies (Dark Theme Hierarchy)
| Muestra | Nombre del Token | Código HEX | RGB | Rol / Aplicación en Interfaz |
|:---:|:---|:---|:---|:---|
| ⬛ | `--color-bg-base` | `#06080C` | `rgb(6, 8, 12)` | Fondo general del documento (canvas principal de máxima absorción). |
| 🌑 | `--color-bg-surface` | `#0B0F17` | `rgb(11, 15, 23)` | Superficie de tarjetas de producto, secciones secundarias y navbar. |
| 🛸 | `--color-bg-card` | `#0E1420` | `rgb(14, 20, 32)` | Superficie elevada de tarjetas destacadas y contenedor de diagnóstico. |
| 🔘 | `--color-bg-card-hover` | `#131C2D` | `rgb(19, 28, 45)` | Estado de elevación al interactuar (hover) con elementos clickeables. |
| 🪟 | `--color-bg-glass` | `rgba(11, 15, 23, 0.82)` | `rgba(...)` | Efecto de vidrio esmerilado con `backdrop-filter: blur(14px)`. |

### 2.3 Bordes y Divisores Técnicos
| Muestra | Nombre del Token | Código HEX / RGBA | Rol / Aplicación |
|:---:|:---|:---|:---|
| 🔲 | `--color-border-subtle` | `#1E293B` | Bordes pasivos de tarjetas y separadores estructurales. |
| 💠 | `--color-border-cyan` | `rgba(0, 229, 255, 0.35)` | Bordes activos, marcos de foco y retículas HUD. |
| 🟡 | `--color-border-gold` | `rgba(255, 184, 0, 0.40)` | Marcos de badges VIP y botones de compra especial. |

### 2.4 Tipografía y Contrastes de Texto (WCAG 2.1 AAA)
| Nombre del Token | Código HEX | Rol de Legibilidad |
|:---|:---|:---|
| `--color-text-heading` | `#FFFFFF` | Titulares principales, precios y valores numéricos de telemetría. |
| `--color-text-body` | `#CBD5E1` | Párrafos descriptivos, textos informativos y etiquetas secundarias. |
| `--color-text-muted` | `#64748B` | Metadatos técnicos, créditos de pie de página y textos en estado inactivo. |
| `--color-text-cyan` | `#00E5FF` | Enlaces, subtítulos de telemetría y llamadas a la acción. |
| `--color-text-gold` | `#FFB800` | Etiquetas de estado, advertencias de diagnóstico y marcas corporativas. |

---

## 3. Tipografía (Typography)

Se implementan fuentes de Google Fonts optimizadas para entornos web futuristas y alta legibilidad:

1. **Orbitron** (`display-font`): Tipografía geométrica de alto impacto para logotipos, titulares principales y valores de telemetría.
2. **Rajdhani** (`heading-font`): Tipografía de corte técnico y condensado para subtítulos, nombres de producto y botones.
3. **Inter / Segoe UI** (`body-font`): Tipografía neutra, humanista y de óptima legibilidad en pantallas retina para párrafos y descripciones.
4. **Share Tech Mono / JetBrains Mono** (`mono-font`): Tipografía monoespaciada para coordenadas, códigos de estado y prefijos de interfaz (`// CIVIL INNOVATION CATALOG`).

### 3.1 Escala Tipográfica (Type Scale)

| Nivel Jerárquico | Fuente | Tamaño (px / rem) | Peso (Weight) | Altura de Línea | Espaciado (Tracking) | Caso de Uso |
|:---|:---|:---|:---:|:---:|:---:|:---|
| **Display Hero** | Orbitron | 52px / 3.25rem | 900 (Black) | 1.15 | 2.5px | Titular principal `"THE FUTURE IS NOW"` |
| **Heading 1 (H1)** | Orbitron | 36px / 2.25rem | 800 (ExtraBold) | 1.25 | 1.5px | Títulos de sección ("Featured Innovations") |
| **Heading 2 (H2)** | Rajdhani | 26px / 1.625rem | 700 (Bold) | 1.30 | 1.0px | Títulos de producto ("Stark Vision Lens AR") |
| **Heading 3 (H3)** | Rajdhani | 20px / 1.25rem | 600 (SemiBold) | 1.35 | 0.8px | Títulos de especificaciones y testimonios |
| **Body Large** | Inter | 16px / 1.0rem | 400 (Regular) | 1.65 | 0.2px | Párrafos introductorios del Hero |
| **Body Regular** | Inter | 14px / 0.875rem | 400 (Regular) | 1.60 | 0.2px | Descripciones de productos y testimonios |
| **Price / Value** | Orbitron | 20px / 1.25rem | 800 (ExtraBold) | 1.20 | 1.0px | Precios numéricos (`$2,499`, `$899`) |
| **Tech Monospace** | Share Tech Mono | 12px / 0.75rem | 500 (Medium) | 1.40 | 1.5px | Badges de diagnóstico (`// STAY AHEAD`, `DIAGNOSTIC //`) |
| **Caption / Legal** | Inter | 11px / 0.6875rem | 400 (Regular) | 1.50 | 0.5px | Copyright y enlaces de protocolo en el footer |

---

## 4. Retícula y Espaciado (Spatial Grid & Spacing)

### 4.1 Sistema de Espaciado Base 8px
- `4px` (`--space-2xs`): Micro-espaciados entre iconos y texto.
- `8px` (`--space-xs`): Relleno interno de badges y botones pequeños.
- `12px` (`--space-sm`): Espacio entre elementos compactos de listas.
- `16px` (`--space-md`): Relleno estándar de inputs y separador básico.
- `24px` (`--space-lg`): Relleno interno de tarjetas de producto y espaciado de grids.
- `32px` (`--space-xl`): Separación entre títulos y bloques de contenido.
- `48px` (`--space-2xl`): Margen vertical entre módulos secundarios.
- `64px` (`--space-3xl`): Espacio de respiro entre secciones principales.
- `96px - 120px` (`--space-4xl`): Separación de macro-bloques del portal.

### 4.2 Contenedor y Puntos de Quiebre (Breakpoints)
- **Contenedor Máximo:** `1240px` centrado horizontalmente con `margin: 0 auto; padding: 0 24px;`.
- **Breakpoints Responsivos:**
  - `Mobile Portrait (< 640px)`: Grid de 1 columna para productos, menú hamburguesa desplegable.
  - `Tablet / Laptop (< 1024px)`: Grid de 2 columnas para productos, adaptación de telemetría.
  - `Desktop Standard (1024px - 1440px)`: Layout idéntico al mockup (Grid de 3 + 2 columnas).
  - `Ultra-Wide (> 1440px)`: Enfoque centrado con fondos inmersivos expandidos.

---

## 5. Componentes de Interfaz de Usuario (UI Components)

### 5.1 Botones (Buttons)
1. **Botón de Acento Dorado (Stark Gold - e.g., "EQUIP >", "ORDER >"):**
   - Fondo: `#FFB800`
   - Color de Texto: `#06080C` (Alto contraste)
   - Tipografía: Rajdhani 700 Bold, Uppercase, Tracking 1.2px
   - Hover: Fondo `#FFE600`, sombra `box-shadow: 0 0 18px rgba(255, 184, 0, 0.6)`.
   - Borde: Biselado o radio compacto de `4px`.

2. **Botón Primario Neón Cian (e.g., "EXPLORE PRODUCTS CATALOG >", "ACQUIRE >"):**
   - Fondo: `#00E5FF`
   - Color de Texto: `#06080C`
   - Hover: Sombra luminiscente `box-shadow: 0 0 20px rgba(0, 229, 255, 0.7)`.

3. **Botón Secundario Outline (e.g., "Watch Tech Keynote", "EQUIP > Outline"):**
   - Fondo: `transparent`
   - Borde: `1.5px solid #00E5FF` (o `#FFFFFF` con icono play)
   - Color de Texto: `#00E5FF` (o `#FFFFFF`)
   - Hover: Fondo `rgba(0, 229, 255, 0.12)`, borde `#38BDF8`.

### 5.2 Tarjetas de Producto (Product Innovation Cards)
- **Estructura:**
  - Contenedor rectangular con fondo `#0E1420` y borde `#1E293B`.
  - Zona superior: Visor de producto con imagen optimizada o render SVG vectorial de alta fidelidad.
  - Etiqueta flotante en esquina superior derecha: Badge `MOST POPULAR` o `AI POWERED`.
  - Zona media: Nombre de producto en H2 blanco, descripción en gris slate `#CBD5E1`.
  - Zona inferior: Fila de precio (Orbitron Bold) y botón de equipamiento/adquisición.
- **Micro-interacciones:**
  - Elevación con `transform: translateY(-4px);`.
  - Borde reactivo que transiciona a cian `#00E5FF`.
  - Brillo sutil ambiental con `box-shadow: 0 8px 30px rgba(0, 229, 255, 0.12);`.

### 5.3 Badges e Indicadores Técnicos
- **Badge "MOST POPULAR":** Fondo `rgba(255, 184, 0, 0.15)`, borde `1px solid #FFB800`, texto `#FFB800`.
- **Badge "AI POWERED":** Fondo `rgba(0, 229, 255, 0.15)`, borde `1px solid #00E5FF`, texto `#00E5FF`.
- **Badge "LAUNCHING 2026 HORIZON-X":** Marco angular dorado con texto en oro brillante.
- **Status Dot (SYS: ONLINE):** Círculo de `8px` en verde neón `#22C55E` con animación de parpadeo suave (`pulse`).

### 5.4 Formularios e Inputs (Futuristic Field)
- **Campo de Correo Corporativo:**
  - Fondo: `#090E17`
  - Borde: `1px solid #1E293B`
  - Placeholder: `#64748B` ("Enter corporate email address")
  - Focus State: Borde cian `#00E5FF`, resplandor `box-shadow: 0 0 12px rgba(0, 229, 255, 0.4)`.
  - Icono prefijo: Sobre de correo vectorial SVG integrado en posición absoluta.

---

## 6. Efectos Visuales y Animaciones (Motion & Visual FX)

### 6.1 Resplandor Neón (Neon Bloom Effects)
```css
/* Resplandor Cian */
.glow-cyan {
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.5), inset 0 0 10px rgba(0, 229, 255, 0.2);
}

/* Resplandor Oro Stark */
.glow-gold {
  box-shadow: 0 0 20px rgba(255, 184, 0, 0.5), inset 0 0 10px rgba(255, 184, 0, 0.2);
}
```

### 6.2 Rotación de Radar y Scanline Holográfico
```css
@keyframes radar-scan {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 6px #00e5ff); }
  50% { opacity: 1; filter: drop-shadow(0 0 14px #00e5ff); }
}
```

### 6.3 Curvas de Transición (Easing)
- `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);` para elevación de tarjetas y botones.
