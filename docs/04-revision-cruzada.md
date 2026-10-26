# 04 · Revisión cruzada — Gisela Pastelera

Sin commit. Revisión desde los tres roles (marca, estructura, SEO).

## Hallazgos

### Marca
- Sin restos de "Dulces Sueños" / "Dulce Sueños" / sin tilde en html, css, js, xml, txt (solo se menciona en docs 00 y 01, intencional).
- `LOGO-SLOT` intactos: 2 en `index.html` (header y footer), 2 en `promociones.html`, más una nota en `styles.css`. Clase `.logo` conservada.
- "gradient": 0 coincidencias en html/css/js/xml/txt (solo aparece en docs que describen la regla).

### Estructura
- Flujo a WhatsApp correcto: todos los CTA son `wa.me/541144261182` con `data-wa`, `target="_blank" rel="noopener"`; header, hero, cada servicio, productos, CTA de mesa completa, FAQ, CTA final y botón flotante.
- FAQ: 6 preguntas en `<details>`, respuestas genéricas sin datos inventados.
- **Defecto: `h3.gallery-title` ("Galería de Nuestras Mesas Dulces") aparecía antes del h2 "Nuestros Productos".** Corregido a `h2` (ver abajo). Jerarquía final: h1 hero, h2 servicios, h2 galería, h2 productos, h2 cómo pedir, h2 FAQ, h2 contacto.
- `promociones.html`: tiene sentido como página de combos, pero duplica el objetivo de index, no tiene precios y el dueño había quitado su enlace del nav de index. Un solo h1.

### SEO
- JSON-LD `FAQPage` coincide exactamente (6/6, pregunta y respuesta) con el FAQ visible; ambos bloques JSON-LD parsean.
- Todas las rutas `src="img/..."` de index y promociones existen (la única ausente, `img/logo-gisela-pastelera.svg`, está solo dentro de un comentario LOGO-SLOT). Los `.webp` de productos y hero existen.
- `sitemap.xml` y `robots.txt` coherentes entre sí (robots apunta al sitemap; mismo dominio placeholder).
- Detalle sin acción: `<img id="modalImage" src="">` del modal de la galería está vacío por diseño (oculto hasta abrir); no genera error.

## Decisión sobre promociones.html
Opción elegida, la más simple: **`noindex, follow` y fuera del sitemap**, sin enlazarla desde el nav de index. Motivo: respeta la decisión previa del dueño (enlace comentado), evita que una página sin precios ni zona compita con la home o diluya el SEO, y no exige cambios de diseño. Si el dueño quiere indexarla: volver a `index, follow, max-image-preview:large`, descomentar el `<li>` del nav en `index.html` (línea ~46) y restaurar la entrada en `sitemap.xml`.

## Correcciones aplicadas
1. `index.html`: `<h3 class="gallery-title">` -> `<h2 class="gallery-title">`. El CSS no requirió cambios: `.gallery-title` (clase) fija tamaño y margen y gana al selector `h2`; tamaño computado verificado en 24px (móvil), igual que antes.
2. `promociones.html`: `<meta name="robots" content="noindex, follow">`.
3. `sitemap.xml`: eliminada la URL de `promociones.html`.

## Verificación (Playwright, servidor http local temporal ya cerrado)
- 390px y 1280px, index y promociones: 0 errores y 0 advertencias de consola; sin scroll horizontal (scrollWidth == clientWidth); 0 imágenes rotas (con lazy forzado a eager, excepto el `modalImage` vacío mencionado).

## Pendientes del dueño (priorizados)
1. **Dominio real**: reemplazar `DOMINIO-A-DEFINIR.com.ar` en canonical, og:*, twitter:image, JSON-LD de `index.html`, `promociones.html`, `sitemap.xml`, `robots.txt`.
2. **Confirmar número de WhatsApp** (+54 11 4426-1182).
3. **Ciudad/zona de cobertura y dirección** (si atiende al público): es lo más valioso para SEO local; sumar a title, description, h1/párrafo y JSON-LD (`areaServed`, `address`).
4. **Crear Perfil de Empresa de Google** y registrar el sitio en Search Console.
5. **Logo** (SVG o PNG transparente) para header, footer, favicon e imagen OG 1200x630.
6. **Respuestas reales del FAQ**: anticipación mínima, seña/medios de pago, entregas. Si se editan, actualizar también el JSON-LD.
7. **Horarios y redes sociales** (footer tiene comentario PENDIENTE; luego `sameAs`/`openingHours`).
8. **Reseñas reales** de clientes, si existen (no hay sección de prueba social).
9. **Decidir sobre promociones.html**: seguir oculta (hoy) o publicarla con precios/condiciones reales.
10. Limpieza: borrar los 20 `img/IMG-20250707-WA00xx.jpg` sin uso y los `.jpg` de `img/productos/` ya reemplazados por webp; regenerar `favicon.ico` (267 KB); actualizar año del copyright (2024); confirmar tagline "Mesas Dulces Para Cada Ocasión".
11. Opcional: convertir la galería a WebP; `preconnect` para fuentes y Font Awesome.
