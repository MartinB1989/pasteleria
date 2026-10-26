# 01 · Marca — Gisela Pastelera

Agente: marca-gisela. Sin commit.

## Cambios por archivo
- `index.html`: `<title>` ("Gisela Pastelera - Mesas Dulces y Tortas..."), h1 del header, h3 del footer, copyright. Añadidos 2 comentarios `LOGO-SLOT` (header y footer).
- `promociones.html`: `<title>`, h1 (con enlace a index.html), h3 del footer, copyright. Añadidos 2 comentarios `LOGO-SLOT`.
- `script.js`: comentario de la línea 2 (número de WhatsApp) y `console.log` final.
- `styles.css`, `promociones.css`: sin cambios (solo usan la clase `.logo`, que se conserva).

Hallazgos: no había "Dulce Sueños" en singular, ni variantes sin tilde, ni en alt, meta tags, JSON-LD ni Open Graph (no existen aún). Los mensajes de WhatsApp (`script.js`, `index.html`) no mencionan el nombre de la marca; no se tocaron. El número de WhatsApp no se modificó. Los textos "mesas dulces", "shots dulces" son productos, no marca, y se dejaron.

## Verificación
Grep insensible a mayúsculas (`dulces? sue`, `suenos`, `sueños`, `dulces-sue`) en html/css/js/json/xml/txt: **0 resultados**. Solo queda mención del nombre antiguo en `docs/00-plan-general.md` (descripción del plan, intencional).

## Logo: estado
No existe. El nombre queda como texto. Los lugares preparados son los comentarios `<!-- LOGO-SLOT (header|footer) -->` justo antes del h1/h3 dentro de `div.logo`. Plan al recibirlo: guardar como `img/logo-gisela-pastelera.svg` (o PNG/WebP), añadir `<img alt="Gisela Pastelera" width height>` y conservar el h1 como texto por accesibilidad/SEO.

## Pendientes
- Archivo del logo (SVG o PNG transparente), del dueño.
- Favicon actual (`favicon.ico`) y imagen Open Graph: pendientes de regenerar con el logo. No hay metas OG todavía (corresponde a seo-pasteleria).
- Paleta: proponer ajuste de variables de color en `styles.css` cuando llegue el logo (sin imponer).
- Año del copyright (2024): no se cambió.
- Tagline "Mesas Dulces Para Cada Ocasión" se mantiene; confirmar con el dueño.

## Notas para estructura-landing (siguiente)
- Header/footer: la estructura es `div.logo > h1|h3 + span|p`. Si reordenas o rehaces el header, conserva los comentarios `LOGO-SLOT` y la clase `.logo` (usada en `styles.css` líneas ~110-125).
- `promociones.html` tiene el h1 envuelto en un `<a>` con estilo inline; puedes pasarlo a CSS.
- El enlace de "Arma tu Pedido" a promociones está comentado en el nav de `index.html`.
- Recuerda: eliminar degradados (`--gradient-*`, `linear-gradient`) en `styles.css` y `promociones.css`; marca = texto "Gisela Pastelera" en todo lugar nuevo (CTAs, secciones, mensajes de WhatsApp si decides incluir el nombre).
- No edites `<title>`/meta salvo coordinar con seo-pasteleria.
