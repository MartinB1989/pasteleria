# 00 · Plan general — Gisela Pastelera

## Objetivo
Conseguir más consultas por WhatsApp mejorando la estructura de la landing y el SEO local.

## Decisiones fijas
- Marca: **Gisela Pastelera** (hoy el sitio dice "Dulces Sueños"; buscar también "Dulce Sueños" y variantes sin tilde).
- Servicios: los mismos de "Nuestros Servicios Especializados". No agregar ni quitar.
- **Diseño plano: sin degradados ni colores pastel degradados.** Solo colores sólidos. Hoy `styles.css` y `promociones.css` usan `linear-gradient` (variables `--gradient-*` y fondos `rgba` con tres tonos); deben eliminarse por completo.
- No inventar datos (reseñas, precios, dirección, horarios).
- Sitio estático (HTML/CSS/JS); sin frameworks nuevos.

## Orden de ejecución
| # | Documento | Agente | Resumen |
|---|-----------|--------|---------|
| 01 | `01-marca.md` | marca-gisela | Renombrar a Gisela Pastelera, preparar espacio de logo. |
| 02 | `02-estructura-conversion.md` | estructura-landing | Reordenar secciones, CTAs a WhatsApp, paleta plana sin degradados. |
| 03 | `03-seo.md` | seo-pasteleria | Meta, schema, imágenes, sitemap/robots. |
| 04 | `04-revision-cruzada.md` | todos | Cada agente revisa el trabajo de los otros; lista de pendientes. |

Cada agente lee los documentos anteriores, hace su trabajo y deja su documento con: cambios hechos, decisiones, pendientes y **notas para el siguiente agente**.

## Pendientes del dueño
- Archivo del nuevo logo (SVG o PNG transparente).
- Ciudad/zona de cobertura, horarios, redes sociales, confirmar número de WhatsApp.
- Reseñas reales de clientes (si existen).
