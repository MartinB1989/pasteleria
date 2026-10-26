# 05 · Copy y comunicación — Gisela Pastelera

> Plan. El agente `copywriter-pasteleria` completa la sección "Resultado" al terminar.

## Por qué
Los pasos 01–04 resolvieron marca, estructura y SEO, pero el texto casi no cambió. El copy es lo que convence a alguien de escribir por WhatsApp.

## Alcance
Reescribir en `index.html` (y coherencia en `promociones.html`):
1. Hero: h1 (con keywords), subtítulo, CTA principal.
2. Servicios (los mismos): título, descripción orientada a beneficio y CTA de cada uno.
3. Productos: descripciones y CTA.
4. Cómo pedir en 3 pasos, FAQ (+ JSON-LD sincronizado), CTA final, footer/tagline.
5. Mensajes prellenados de WhatsApp (`data-wa`).
6. Meta title/description solo si el nuevo copy lo mejora (mantener ≤60 / ≤155 caracteres).

## Reglas
Voseo rioplatense, sin inventar datos, sin promesas no verificables, sin degradados ni cambios de estructura/CSS.

## Resultado
Agente: copywriter-pasteleria. Sin commit. Solo texto: estructura, clases, ids, CSS, rutas y comentarios LOGO-SLOT intactos; sin degradados.

### Criterio
- Cada bloque dice qué logra el cliente (mesa que luce, cero coordinación) y termina en una acción concreta por WhatsApp.
- CTAs con verbo y contexto ("Cotizar mi mesa dulce", "Consultar por brownies"), en lugar de "Consultar por WhatsApp" repetido 14 veces.
- Mensajes `data-wa` en primera persona, con "Hola Gisela, vi tu web...", producto/servicio y huecos `___` (tipo de evento, fecha, invitados) más una pregunta abierta. Se codifican por JS como antes.
- Sin datos inventados: no hay precios, plazos, señas, zonas, años ni reseñas. Descripciones de producto salen de los alt/textos previos (ej. cobertura de frutos rojos, enrejado de masa, frosting de queso crema).
- Keywords naturales: el h1 conserva "mesas dulces" y "tortas temáticas" y suma "personalizadas".

### Antes / después (index.html)
| Bloque | Antes | Después |
|---|---|---|
| h1 | Mesas dulces y tortas temáticas para tu celebración | Mesas dulces y tortas temáticas personalizadas para tu fiesta |
| Subtítulo hero | Armamos mesas dulces para bodas, cumpleaños... Contanos tu idea por WhatsApp y la hacemos realidad. | Diseñamos la mesa dulce de tu boda, cumpleaños, baby shower o evento de empresa, y la torta temática de tu cumpleaños. Vos contanos la idea y la fecha por WhatsApp; nosotros nos ocupamos del resto. |
| Puntos hero | Diseño personalizado / Productos artesanales / Atención directa por WhatsApp | Diseño a tu gusto: colores, temática y productos / Todo artesanal, hecho para tu fecha / Hablamos directo por WhatsApp, sin formularios |
| CTA hero | Pedir presupuesto por WhatsApp / Ver trabajos | Pedí tu cotización por WhatsApp / Mirá mesas que ya armamos |
| Servicio 1 | Nuestra especialidad. Diseños únicos para bodas... [Pedir mesa dulce] | Nuestra especialidad: una mesa pensada para lucirse, con tus colores y tu temática... y vos solo disfrutás. [Cotizar mi mesa dulce] |
| Servicio 2 | Creamos tortas personalizadas para cumpleaños... [Pedir torta temática] | La protagonista de tu cumpleaños, con el tema que elijas: contanos la idea o mandá una foto de referencia. No hacemos tortas de boda, pero sí la mesa dulce para tu casamiento. [Consultar por mi torta] |
| Servicio 3 | Mesa dulce + torta + diseño. Todo lo que necesitas para una celebración perfecta e inolvidable. [Pedir evento completo] | Mesa dulce, torta temática y diseño pensados juntos, para que todo combine y no coordines con varios lugares. [Cotizar mi evento completo] |
| Galería | Galería de Nuestras Mesas Dulces / Quiero una mesa dulce así | Mirá cómo quedan nuestras mesas dulces / Quiero una mesa así: cotizar |
| Productos (14) | Frases genéricas ("con amor", "pequeñas obras de arte") y botón "Consultar por WhatsApp" igual en todos | Cada uno con uso concreto en el evento (ej. Mini Tortas: "una porción individual por invitado, sin cortar ni repartir") y botón propio ("Consultar por trufas"); mensaje por producto con fecha, cantidad y "¿qué opciones y precios tienen?" |
| Cierre de productos | ¿Necesitas una mesa dulce completa? / Armar Mesa Dulce Completa | ¿Querés una mesa dulce completa? Elegí los productos que más te gusten y los combinamos... / Armar mi mesa dulce completa |
| 3 pasos | Escribinos / Recibí tu cotización / Coordinamos la entrega; CTA "Empezar mi pedido" | Contanos tu idea (con fotos de referencia) / Recibí tu propuesta / Confirmamos y coordinamos; CTA "Contanos tu idea por WhatsApp" |
| FAQ | 6 preguntas genéricas | Mismas 6 reformuladas más directas (ej. "¿Cómo reservo mi fecha?", "¿Hacen entregas o tengo que retirar?", boda: "No hacemos tortas de boda. Lo que sí hacemos es la mesa dulce para tu boda..."); cierre "¿Tu duda no está acá? Escribinos y te respondemos por WhatsApp" |
| JSON-LD FAQPage | 6 Q&A anteriores | Regenerado desde el HTML nuevo; verificado en el navegador 6/6 idéntico |
| CTA final | ¡Hablemos de tu evento especial! / ¡Planifiquemos tu Evento Perfecto! / Planificar mi evento | Contanos qué festejás y armamos tu mesa dulce / Empecemos por tu fecha / Quiero cotizar mi evento; features reescritos |
| Footer | Creando momentos especiales para cada celebración / Enviar Mensaje | Mesas dulces y tortas temáticas artesanales para tus celebraciones / Escribinos por WhatsApp |
| Flotante / header | Pedir por WhatsApp | Cotizá por WhatsApp (mensaje pregunta por disponibilidad de fecha) |
| Meta description (y OG/Twitter) | ...Pedí tu presupuesto por WhatsApp con Gisela Pastelera. (≈137) | ...Contanos tu idea y pedí tu cotización por WhatsApp. (133 car.). Title sin cambios (47). |

### promociones.html
Subtítulo y highlights con datos reales de los combos ("Desde 15 hasta 80 personas", "Armamos uno a tu medida"); descripciones de los 6 combos basadas en su contenido real (sin adjetivos vacíos como "del bueno" o "VIP"); botones "Solicitar Combo" -> "Cotizar este combo"; CTA final "¿Ningún combo se ajusta a tu evento?" / "Pedir un combo a medida"; footer y tagline alineados con index; `orderCombo()` ahora pregunta precio y disponibilidad con campo de fecha. Voseo corregido ("Descubre", "Elige", "Necesitas"). Meta description: "Pedilo" -> "Consultalo" (135 car.), porque no hay precios.

### Verificación
Playwright, servidor temporal en puerto 8777 (cerrado al final): index y promociones a 390px y 1280px, sin scroll horizontal, sin elementos con texto desbordado, 0 errores/advertencias de consola, 1 h1 en index, JSON-LD FAQ idéntico al visible, href de WhatsApp con mensaje codificado correcto.

### Pendientes del dueño
- Confirmar que "Gisela" es el nombre con el que quiere ser saludada en los mensajes ("Hola Gisela, ...") y el voseo en plural ("nosotros").
- Plazos reales de anticipación, seña y medios de pago, zona de entrega o retiro: el FAQ sigue siendo deliberadamente genérico en esas tres respuestas.
- Confirmar que los tipos de decoración/sabores de los productos (cobertura, frosting, etc.) son los que ofrece; el texto se limitó a lo visible en las fotos/textos previos.
- Ciudad/zona (para sumarla al h1 y title), reseñas reales, tagline "Mesas Dulces Para Cada Ocasión" y año del copyright siguen pendientes.
- `script.js` conserva mensajes viejos en `openWhatsApp()` por defecto y en `consultarTorta()`/similares (no usados por los HTML actuales): se dejaron por ser JS fuera de alcance.

## Ajuste posterior: primer contacto sin fricción
Decisión del dueño: el sitio solo busca abrir la conversación por WhatsApp; las preguntas (fecha, invitados, temática, zona) las hace Gisela en el chat.
- Mensajes prellenados (`data-wa`): sin campos `___` ni pedidos de datos; solo producto/servicio y una pregunta general.
- Copy visible (hero, servicios, productos, pasos, FAQ + JSON-LD, CTA final, promociones): ya no pide fecha, cantidad, invitados ni fotos por adelantado; invita a "escribinos" y aclara que "nosotros te hacemos las preguntas".
