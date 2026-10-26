// Configuración de WhatsApp
const WHATSAPP_NUMBER = "541144261182"; // Número de WhatsApp de Gisela Pastelera
const WHATSAPP_BASE_URL = "https://wa.me/";

// Función principal para abrir WhatsApp
function openWhatsApp(message = "Hola! Vi su web y quiero consultar por un pedido para mi evento.") {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Abrir en nueva ventana/pestaña
    window.open(whatsappUrl, '_blank');
    
    // Tracking de conversión (opcional)
    trackWhatsAppClick(message);
}

// Función para tracking de clics en WhatsApp
function trackWhatsAppClick(message) {
    // Aquí puedes agregar tu código de analytics
    console.log('WhatsApp clicked:', message);
    
    // Ejemplo con Google Analytics (si lo tienes configurado)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'contact',
            'event_label': message,
            'value': 1
        });
    }
}

// Navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu móvil
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            const open = navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // Cerrar menu al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    initWhatsAppLinks();

    // Inicializar animaciones de scroll
    initScrollAnimations();
    
    // Header scroll effect
    initHeaderScroll();
    
    // Inicializar carrusel de galería
    setTimeout(initCarousel, 100); // Pequeño delay para asegurar que el DOM esté listo
});

// Función de filtros removida por solicitud del usuario

// Funcionalidad de modal removida por solicitud del usuario

// Animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observar elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.service-card, .product-card, .contact-card');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Efecto del header al hacer scroll (clase; los colores viven en styles.css)
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
}

// Enlaces de WhatsApp: el HTML trae https://wa.me/<numero> y el mensaje en data-wa.
// Aqui se completa el href con el mensaje prellenado (sin JS el enlace abre el chat igualmente).
function initWhatsAppLinks() {
    document.querySelectorAll('a.wa-link').forEach(link => {
        const message = link.dataset.wa;
        if (message) {
            link.href = `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        }
        link.addEventListener('click', () => trackWhatsAppClick(message || ''));
    });
}

// Funciones para diferentes tipos de consulta por WhatsApp
function consultarTortaInfantil() {
    openWhatsApp("¡Hola! Me interesa una torta temática para el cumpleaños de mi niño/a. ¿Podrían ayudarme con los diseños y precios?");
}

function consultarMesaDulceInfantil() {
    openWhatsApp("¡Hola! Necesito una mesa dulce para cumpleaños infantil. ¿Podrían enviarme información sobre sus montajes temáticos?");
}

function solicitarCotizacionInfantil() {
    openWhatsApp("Hola Gisela, vi tu web y quiero cotizar una fiesta infantil. ¿Me pasás una propuesta?");
}

// Función para manejar formularios de contacto (si los agregas en el futuro)
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const nombre = formData.get('nombre');
    const evento = formData.get('evento');
    const fecha = formData.get('fecha');
    const mensaje = formData.get('mensaje');
    
    const whatsappMessage = `¡Hola! Mi nombre es ${nombre}. 
    
Detalles de mi consulta:
- Tipo de evento: ${evento}
- Fecha: ${fecha}
- Mensaje: ${mensaje}
    
¡Espero su respuesta!`;
    
    openWhatsApp(whatsappMessage);
}

// Lazy loading para imágenes (mejora el rendimiento)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Función para compartir en redes sociales (opcional)
function compartirEnRedes(plataforma, texto = '', url = window.location.href) {
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(texto + ' ' + url)}`
    };
    
    if (urls[plataforma]) {
        window.open(urls[plataforma], '_blank', 'width=600,height=400');
    }
}

// Función para analytics de tiempo en página
let tiempoInicio = Date.now();

window.addEventListener('beforeunload', function() {
    const tiempoEnPagina = Math.round((Date.now() - tiempoInicio) / 1000);
    
    // Enviar a analytics si está configurado
    if (typeof gtag !== 'undefined') {
        gtag('event', 'tiempo_en_pagina', {
            'event_category': 'engagement',
            'value': tiempoEnPagina
        });
    }
});

// Preloader (opcional) - puedes agregar un preloader si quieres
function initPreloader() {
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }
    });
}

// Error handling para imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            console.log('Error cargando imagen:', this.src);
        });
    });
});

// Funciones del carrusel y modal de galería
function initCarousel() {
    document.querySelectorAll('.carousel-track').forEach(track => {
        // Duplicar las imágenes para hacer el efecto infinito
        const slides = track.innerHTML;
        track.innerHTML = slides + slides;

        // Pausar animación al hover
        track.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });

        track.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    });
}

// Función para abrir el modal con la imagen
function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalCaption.textContent = img.alt;
    
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    
    // Tracking de vista de imagen
    if (typeof gtag !== 'undefined') {
        gtag('event', 'gallery_image_view', {
            'event_category': 'engagement',
            'event_label': img.alt,
            'value': 1
        });
    }
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera de la imagen
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

console.log('🎂 Gisela Pastelera - Mesas Dulces cargado correctamente!');
console.log('🎈 WhatsApp integrado y listo para planificar eventos especiales');
console.log('🎨 Carrusel de galería activado con modal de ampliación'); 