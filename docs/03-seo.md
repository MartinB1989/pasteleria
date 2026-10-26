# 03 · SEO — Gisela Pastelera

Agente: seo-pasteleria. Sin commit. Sin degradados.

## Cambios por archivo
- `index.html`
  - `<title>` (47 car.): "Gisela Pastelera | Mesas Dulces y Tortas Temáticas". Meta description (~137 car.) con servicio + CTA WhatsApp. `lang="es"` ya estaba.
  - Añadidos: `canonical`, `robots`, `icon`, `theme-color`, Open Graph (`og:*`, locale es_AR) y Twitter Card (`summary_large_image`).
  - **h1**: pasó del header al hero ("Mesas dulces y tortas temáticas para tu celebración", `h2.hero-title` -> `h1.hero-title`). El header usa ahora `<p class="brand">Gisela Pastelera</p>`.
  - JSON-LD `Bakery` (nombre, descripción, url, teléfono +54 11 4426-1182, imagen, knowsAbout, 3 servicios en makesOffer) y `FAQPage` (6 preguntas, texto generado desde el HTML visible, idéntico).
  - Alts únicos y descriptivos en las 21 fotos de galería, 14 productos, hero y modal; `width`/`height` en todas; hero con `fetchpriority="high"` y sin lazy; el resto `loading="lazy"`.
  - Imágenes de producto y hero apuntan a `.webp` (ver abajo).
- `promociones.html`: title (~52), description (~128), canonical, robots, OG/Twitter. El header pasó a `<p class="brand">` (había dos h1). h1 único: "Combos y Promociones de Mesas Dulces" (antes "Promociones Especiales"). No tiene imágenes.
- `styles.css` (puntual): `.logo h1` -> `.logo h1, .logo .brand` (+ `.brand a` y móvil) con fuente/peso/margen explícitos; aspecto idéntico (verificado con Playwright en 1280px, sin errores de consola).
- Nuevos: `sitemap.xml`, `robots.txt`.

## Decisiones
- **h1 en el hero, marca en `<p>`**: el h1 captura la intención de búsqueda (mesas dulces + tortas temáticas) en vez de repetir el nombre, que ya está en title/OG/schema. Un solo h1 por página.
- **Dominio placeholder**: `https://DOMINIO-A-DEFINIR.com.ar` (buscar y reemplazar en: `index.html` canonical/og/twitter/JSON-LD, `promociones.html`, `sitemap.xml`, `robots.txt`).
- **JSON-LD sin** `address`, `openingHours`, `geo`, `areaServed`, `sameAs`, `priceRange`, `aggregateRating`: datos no confirmados; no se inventaron.
- **Zona en title/description**: no incluida porque no se conoce (clave para SEO local, ver pendientes).
- `promociones.html` queda indexable y en sitemap (prioridad 0.7); ya está en el nav de su propia página pero no desde index (decisión del dueño). Si no se quiere indexar, poner `noindex` y quitarla del sitemap.
- og:image provisoria: `img/mesa-dulce/IMG-20250707-WA0011.jpg` (ratio parecido al recomendado; no es ideal).

## Imágenes (Pillow instalado en carpeta temporal, no en el proyecto)
Generados WebP (calidad 78, máx. 800 px de ancho); **los .jpg originales siguen en su lugar** (no se borró nada):
- `img/productos/*.webp` (13 nuevos; `shots-dulces.webp` ya existía): de 3385 KB a 423 KB. Los dos peores: `cookies.jpg` 1063 KB -> 69 KB y `marroc.jpg` 988 KB -> 47 KB.
- `img/mesa-dulce/mesa-dulce-hero.webp` (37 KB vs 104 KB); la galería sigue usando el jpg original de esa foto.
- Galería (`img/mesa-dulce/*.jpg`, ~1,2 MB en total, la mayoría 576 px y 25-50 KB): no se convirtió; peso aceptable. Recomendado WebP más adelante.
- `img/IMG-20250707-WA00xx.jpg` (20 archivos, ~2,7 MB, hasta 1600 px): **no referenciados** en ningún HTML/CSS/JS. Recomendación: borrarlos o moverlos fuera del sitio.
- Los .jpg de `img/productos/` ya no se usan; pueden borrarse tras revisar.
- `favicon.ico` pesa 267 KB: recomendado regenerar (<10 KB, 32/48 px) junto con el logo.
- Nombres de archivo: los de WhatsApp (`IMG-2025...`) no son descriptivos; renombrar requiere cambiar rutas, se dejó para no romper nada.

## Pendientes
- Dueño: dominio real, ciudad/barrio/zona de cobertura, dirección (si atiende al público), horarios, redes sociales (para `sameAs`), logo, confirmar WhatsApp.
- Con esos datos: sumar zona a title/description/h1 o párrafo, `areaServed`, `address`/`openingHours`/`sameAs` en JSON-LD, y registrar el sitio en Google Search Console + Perfil de Empresa de Google (lo más importante para SEO local).
- Imagen OG 1200x630 con logo; favicon liviano.
- Fuentes/Font Awesome desde CDN bloquean render: considerar `preconnect` y subset de iconos (no tocado, fuera de alcance).
- Año de copyright (2024), sin cambiar.

## Notas para la revisión cruzada (04)
- **estructura-landing**: el h1 ahora es el del hero; si se cambia el texto del hero, mantener keywords. El h3 "Galería de Nuestras Mesas Dulces" va antes del h2 "Nuestros Productos" (jerarquía mejorable: pasarlo a h2 requiere ajustar CSS `.gallery-title`). Las respuestas del FAQ están duplicadas en el JSON-LD: si se editan en HTML, actualizar el script `application/ld+json` de `index.html`.
- **marca-gisela**: al llegar el logo, conservar `<p class="brand">` como texto (o link) junto a la imagen, con `alt="Gisela Pastelera"` y width/height; actualizar og:image y favicon.
- Verificación: JSON-LD y sitemap parsean OK; consola sin errores; 1 h1 por página. Servidor python del puerto 8765 detenido (ningún proceso escuchando).
