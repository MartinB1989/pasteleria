# 02 · Estructura y conversión — Gisela Pastelera

Agente: estructura-landing. Sin commit.

## Cambios por archivo

### `styles.css` (reescrito)
- **Cero degradados.** Eliminados `--gradient-*`, todos los `linear-gradient`, el texto con `background-clip: text` y el `!important` de WhatsApp. Eliminados también los emojis decorativos en `::before/::after` y animaciones asociadas.
- Paleta sólida en `:root`: `--primary-color #b0124f` (frambuesa), `--primary-dark #8c0d3e`, `--accent-color #8a6508`, `--success-color #0f7a40` (verde WhatsApp, texto blanco ~5,4:1), `--success-dark #0a5e31`, `--dark-color #2a1f2d`, `--text-color #3d3440`, `--muted-color #5c5360`, `--cream-color #fff8f3`, `--blush-color #fbe6ee`, `--line-color #eadfe3`. Se mantienen los nombres antiguos útiles (`--primary-color`, `--success-color`, `--dark-color`...). Se quitaron `--secondary/purple/blue/green`.
- Secciones alternan fondos sólidos (blanco / crema / rosa suave). Opacidades de texto reemplazadas por `--muted-color` (mejor contraste).
- Header blanco sólido; botón `.header-cta` siempre visible (en móvil solo el icono, 44px). Menú hamburguesa con área táctil 44px.
- Nuevos bloques: `.hero-points`, `.product-cta`, `.how/.steps/.step`, `.faq/.faq-item` (`<details>`), `.faq-more`, `.link-secondary`, `.whatsapp-float` como pastilla con texto.
- Móvil: `body{padding-bottom:84px}` para que el botón flotante no tape el footer; objetivos táctiles >= 44-48px; `prefers-reduced-motion` respetado; `scroll-margin-top` para el header fijo; `:focus-visible`.
- Conservada la clase `.logo` (`.logo h1`, `.logo span`).

### `promociones.css`
- Sin degradados ni `!important`. Cabeceras de combos en frambuesa sólida, botones verdes sólidos, CTA final frambuesa sólida, hero crema. Eliminados emojis decorativos y badges sin uso. Clase `.promo-features` del hero renombrada a `.promo-highlights` (chocaba con la lista de las tarjetas y rompía los iconos).

### `index.html` (reestructurado)
Orden: header -> hero -> servicios -> galería + CTA -> productos -> CTA de mesa completa -> cómo pedir -> FAQ -> CTA final -> footer -> botón flotante.
- Todos los CTA son enlaces reales `https://wa.me/541144261182` con `data-wa="mensaje"`; el JS completa `?text=` codificado (sin JS abre el chat igual). `target="_blank" rel="noopener"`.
- Cada servicio tiene su CTA y su mensaje prellenado (mesa dulce / torta temática / evento completo) con huecos `___` para tipo de evento, fecha, cantidad.
- Los 14 productos: el botón "Consultar" ya no depende de hover (en celular no existía); ahora hay un CTA visible por tarjeta.
- Nuevo "Cómo pedir en 3 pasos" y FAQ de 6 preguntas con respuestas genéricas (sin plazos, señas, precios ni zonas inventados).
- Se mantienen `.logo`, h1 de marca y los dos `LOGO-SLOT`. Servicios y productos sin cambios en lista. Galería intacta (+ `loading="lazy"`).
- El enlace a `promociones.html` en el nav sigue comentado (decisión previa del dueño).
- Copy en voseo argentino ("Escribinos", "Contanos"), coherente con el número +54 y con `promociones.html`. "Calidad Garantizada" cambiado a "Productos artesanales" (era una promesa no verificable).

### `promociones.html`
- Nav coherente con index (Combos activo), `.header-cta`, botón flotante, CTA final y footer como enlaces `wa-link`, estilo inline del h1 pasado a CSS, emojis del h1 quitados, "Calidad Garantizada" -> "Productos Artesanales". Corregido un dato en el mensaje del combo Elegante ("24 Alfajores de maicena" -> "24 Brownies", coherente con la lista). Los botones de combos siguen usando `orderCombo()` y ahora el mensaje empieza con "Vi su web".
- Sigue sin precios (no inventados).

### `script.js`
- Nueva `initWhatsAppLinks()` (href con mensaje + tracking). Header: efecto de scroll por clase `.scrolled` (ya no escribe `rgba` inline). Hamburguesa con `aria-expanded`. Eliminados: handler que hacía `preventDefault` a `.whatsapp-btn`, efecto touch y el opacity/scale del flotante. Mensaje por defecto de `openWhatsApp` ya no habla de "fiesta infantil". `openWhatsApp()` se conserva (la usa `orderCombo`).

## Verificación
- `grep -i gradient` en `*.css *.html *.js`: **0 resultados**. Sin `!important` en CSS salvo `.hidden` y `prefers-reduced-motion`/print (utilitarios, no de color).
- Playwright (390px y 1280px): sin errores de consola, sin scroll horizontal en móvil, hrefs de WhatsApp correctos con mensaje codificado, header/hero/botón flotante correctos. Imágenes ok.
- Observación: el h1 de marca sigue en el header y el hero usa h2.

## Decisiones
- Un CTA principal verde por pantalla; "Ver trabajos" es enlace secundario de texto.
- FAQ con `<details>` (sin JS, accesible, indexable).
- Botón flotante visible siempre (pastilla con texto), no solo en móvil: no tapa contenido gracias al padding inferior en móvil.

## Pendientes (dueño)
- Zona de cobertura, horarios, redes sociales (hay comentario `PENDIENTE` en el footer); confirmar número 54 11 4426-1182.
- Reseñas reales (no se creó sección de prueba social).
- Respuestas reales del FAQ: anticipación mínima, seña/medios de pago, entregas/zona. Hoy son genéricas.
- Confirmar si quiere volver a enlazar `promociones.html` en el nav; verificar tipografía/colores con el futuro logo.
- Copyright 2024 sin cambiar.

## Notas para seo-pasteleria
- Ids de sección en `index.html`: `#inicio`, `#servicios`, `#galeria`, `#productos`, `#como-pedir`, `#faq`, `#contacto`.
- Headings: h1 único "Gisela Pastelera" (header, texto de marca; considerar si prefiere h1 con propuesta de valor en el hero, hoy h2 "Mesas dulces y tortas temáticas para tu celebración"); h2: Nuestros Servicios Especializados, Nuestros Productos Artesanales, Cómo pedir en 3 pasos, Preguntas frecuentes, ¡Hablemos de tu evento especial!; h3: servicios, productos, pasos, "Galería de Nuestras Mesas Dulces".
- FAQ en `<details class="faq-item">` (6 preguntas) listo para `FAQPage` JSON-LD; el texto de cada respuesta está en el HTML (deben coincidir exactamente). No incluir datos no confirmados.
- Alts de galería son genéricos ("Mesa dulce especial", etc.) y repetidos: mejorar. Imágenes: sin `width/height`; hero con altura fija por CSS; galería y productos ya con `loading="lazy"`.
- Meta/title/description no tocados. No hay OG, canonical, schema, sitemap ni robots.
- Enlaces WhatsApp: `a.wa-link` con `data-wa`; href final lo arma JS (en HTML estático es `https://wa.me/541144261182`).
- `promociones.html` tiene `<h1>` propio ("Promociones Especiales") y sigue sin enlazarse desde index: decidir si indexar/`noindex`.
