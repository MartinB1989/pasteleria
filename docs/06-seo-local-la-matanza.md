# 06 · SEO local — Gregorio de Laferrere, La Matanza

## Decisión
La home (`index.html`) no se toca. El SEO local vive en una página aparte: `la-matanza.html`, copia de la home con señales locales.

## Qué tiene `la-matanza.html`
- **Title:** "Mesas Dulces y Tortas en Laferrere | Gisela Pastelera".
- **Meta description (144 car.):** menciona Gregorio de Laferrere, La Matanza, y el CTA a WhatsApp.
- **h1:** "Mesas dulces y tortas temáticas en Laferrere, La Matanza". Un solo h1.
- **Texto:** el hero y el subtítulo de servicios dicen "Gregorio de Laferrere, partido de La Matanza, Zona Oeste". El footer muestra la zona completa.
- **JSON-LD `Bakery`:** `address` con solo localidad/provincia/país (sin calle) y `areaServed` (Gregorio de Laferrere y La Matanza).
- **FAQ (8 preguntas, visible = JSON-LD `FAQPage`):** la de entregas ahora nombra la zona, y se agregaron "¿Hacen mesas dulces y tortas en Gregorio de Laferrere?" y "¿Atienden en otras zonas de La Matanza y de la Zona Oeste?".
- **Canonical y og:url** propios (`/la-matanza.html`); está en `sitemap.xml`.

## Promociones
`promociones.html` está abandonada: ya no hay enlaces hacia ella (se quitó el comentario de la home) ni figura en el sitemap, y tiene `noindex`. El archivo sigue en el repo.

## Pendientes
- **Enlace interno:** la página no está enlazada desde la home (por pedido). Sin enlaces, Google la descubre solo por el sitemap y le da menos peso. Opciones: un enlace discreto en el footer de la home, o usarla como destino de la ficha de Google y de anuncios locales.
- **Dominio real:** reemplazar `DOMINIO-A-DEFINIR.com.ar` en `la-matanza.html`, `index.html`, `sitemap.xml` y `robots.txt`.
- **Perfil de Empresa de Google:** lo que más pesa en SEO local. Categoría "Pastelería"/"Tienda de tortas", área de servicio Gregorio de Laferrere y La Matanza, enlace a esta página, fotos reales y reseñas.
- **Datos reales:** calle o punto de referencia (si atiende al público), horarios y redes (`openingHours`, `sameAs`).
- **Reseñas reales** de clientes de la zona; no se inventaron.
- **Contenido de la zona:** si se confirman otras localidades de La Matanza que atiende (ej. González Catán, Virrey del Pino), se pueden sumar a `areaServed` y al texto.
