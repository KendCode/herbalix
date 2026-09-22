/* =====================================================
   HERBALIX — script.js
   Catálogo dinámico + interacciones del sitio
   ===================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------
     1. DATOS DEL CATÁLOGO
     Cada categoría se numera como una entrada de ledger
     de herbolario (Nº de archivo botánico).
  --------------------------------------------------- */

  const CATALOG = [

    {
      id: "cosmetica",
      number: "Archivo N.º 01",
      icon: "bi-droplet",
      title: "Cosmética natural",
      desc: "Rutinas de cuidado formuladas con activos botánicos, libres de ingredientes agresivos.",
      products: [

        {
          name: "Shampoo natural",
          desc: "Limpieza suave a base de extractos herbales, sin sulfatos agresivos.",
          image: "../assets/img/CosmeticaNatural/Shampoo.jpeg"
        },

        {
          name: "Bálsamos labiales",
          desc: "Hidratación profunda con manteca vegetal y aceites esenciales.",
          image: "assets/img/CosmeticaNatural/Balsamos.jpeg",
          badge: "Favorito"
        },

        /*{
          name: "Crema de sebo de res “Phthalo”",
          desc: "Fórmula nutritiva tradicional para piel muy seca.",
          image: "assets/img/productos/crema-sebo-phthalo.jpg"
        },*/

        {
          name: "Jabones terapéuticos",
          desc: "Barras artesanales con plantas medicinales según necesidad de piel.",
          image: "assets/img/CosmeticaNatural/Jabones.jpeg"
        },

        {
          name: "Lash Serum",
          desc: "Sérum botánico para crecimiento de pestañas y cejas.",
          image: "assets/img/CosmeticaNatural/LashSerum.jpeg",
          badge: "Nuevo"
        }

      ]
    },


    {
      id: "aromaterapia",
      number: "Archivo N.º 02",
      icon: "bi-flower2",
      title: "Aromaterapia",
      desc: "Aromas botánicos para equilibrar cuerpo y espacio, en distintos formatos.",
      products: [

        {
          name: "Perfume botánico 50 ml",
          desc: "Fragancia natural de mayor duración, formato de uso diario.",
          image: "../assets/img/Aromaterapia/PerfumeBotanico50ml.jpeg"
        },

        {
          name: "Perfume botánico 15 ml",
          desc: "Formato intermedio, ideal para llevar contigo.",
          image: "../assets/img/Aromaterapia/PerfumeBotanico15ml.jpeg"
        },

        /*{
          name: "Perfume botánico 10 ml",
          desc: "Formato compacto para descubrir tu esencia favorita.",
          image: "../assets/img/Aromaterapia/PerfumeBotanico10ml.jpeg"
        },

        {
          name: "Velas aromáticas decorativas",
          desc: "Piezas artesanales que combinan diseño y aromaterapia.",
          image: "assets/img/productos/velas-aromaticas-decorativas.jpg"
        },*/

        {
          name: "Velas perfumadas",
          desc: "Cera natural con aceites esenciales para ambientar cualquier espacio.",
          image: "assets/img/Aromaterapia/velasPerfumadas.jpeg"
        },

        /*{
          name: "Difusores de aroma",
          desc: "Difusión constante de aceites esenciales para el hogar.",
          image: "assets/img/productos/difusores-aroma.jpg"
        },*/

        {
          name: "Aceites esenciales",
          desc: "Extractos puros para difusión, masajes o uso terapéutico.",
          image: "assets/img/Aromaterapia/aceites.jpeg"
        },

        {
          name: "Colgante aromatizador",
          desc: "Accesorio personal que libera aroma botánico durante el día.",
          image: "assets/img/Aromaterapia/ColganteAromatizador.jpeg"
        },

        {
          name: "Difusor de ambiente con palillos",
          desc: "Aromatización pasiva y continua en frasco de vidrio.",
          image: "assets/img/Aromaterapia/DifusorPalillos.jpeg"
        }

      ]
    },

/*MEDICINA TRADICIONAL */
    {
      id: "medicina",
      number: "Archivo N.º 03",
      icon: "bi-capsule",
      title: "Medicina tradicional",
      desc: "El corazón de Herbalix: fórmulas herbolarias para dolencias cotidianas y bienestar profundo.",
      products: [

        {
          name: "Jarabes herbales",
          desc: "Preparados naturales para malestares respiratorios comunes.",
          image: "assets/img/MedicinaTradicional/jarabes-herbales.jpg"
        },

        {
          name: "Pomada analgésica, expectorante, relajante",
          desc: "Alivio tópico para dolores musculares y articulares.",
          image: "assets/img/MedicinaTradicional/pomada-analgesica.jpg"
        },

        /*{
          name: "Pomada expectorante",
          desc: "Uso en pecho y espalda para despejar vías respiratorias.",
          image: "assets/img/MedicinaTradicional/pomada-expectorante.jpg"
        },

        {
          name: "Pomada relajante",
          desc: "Formulada con plantas calmantes para tensión y estrés físico.",
          image: "assets/img/MedicinaTradicional/pomada-relajante.jpg"
        },*/

        {
          name: "Blend herbal para infusiones",
          desc: "Mezcla de plantas seleccionadas según propiedad terapéutica.",
          image: "assets/img/MedicinaTradicional/blendHerbal.jpeg"
        },

        {
          name: "Tintura hidroalcohólica",
          desc: "Concentrado herbal 70% alcohol / 30% agua, alta potencia.",
          image: "assets/img/MedicinaTradicional/Tintura.jpeg"
        },

        {
          name: "Sales de baño para pies",
          desc: "Alivio de pesadez y dolores musculares al final del día.",
          image: "assets/img/MedicinaTradicional/SalesPies.jpeg"
        },

        {
          name: "Bombas efervescentes de baño",
          desc: "Ritual relajante con aceites esenciales y sales minerales.",
          image: "assets/img/MedicinaTradicional/bombas-efervescentes.jpg"
        },

        {
          name: "Miel con propóleo, limón y jengibre",
          desc: "Combinado natural para defensas y bienestar general.",
          image: "assets/img/MedicinaTradicional/miel-propoleo-limon-jengibre.jpg"
        },

        {
          name: "Propóleo puro",
          desc: "Resina de abeja con propiedades antibacterianas naturales.",
          image: "assets/img/MedicinaTradicional/propoleo-puro.jpg"
        },

        {
          name: "Miel pura",
          desc: "Miel 100% natural, sin procesos industriales.",
          image: "assets/img/MedicinaTradicional/MielPura.jpeg"
        },

        {
          name: "Cigarrillos herbales",
          desc: "Mezcla de hierbas libres de tabaco y nicotina.",
          image: "assets/img/MedicinaTradicional/cigarrillos-herbales.jpg"
        },

        {
          name: "Botiquín herbolario",
          desc: "Selección esencial de remedios naturales para el hogar.",
          image: "assets/img/MedicinaTradicional/botiquin-herbolario.jpg"
        }

      ]
    },


    {
      id: "esoterica",
      number: "Archivo N.º 04",
      icon: "bi-moon-stars",
      title: "Esotérica",
      desc: "Elementos rituales y energéticos que acompañan tu práctica espiritual.",
      products: [

        {
          name: "Inciensos",
          desc: "Variedad de aromas para limpieza energética y meditación.",
          image: "assets/img/Esoterica/Incienso.jpeg"
        },

        /*{
          name: "Jabones rituales",
          desc: "Barras artesanales asociadas a intenciones específicas.",
          image: "assets/img/productos/jabones-rituales.jpg"
        },*/

        {
          name: "Bombitas de defumación",
          desc: "Preparados listos para sahumar espacios rápidamente.",
          image: "assets/img/productos/bombitas-defumacion.jpg"
        },

        /*{
          name: "Amuletos",
          desc: "Piezas simbólicas para protección y buena energía.",
          image: "assets/img/productos/amuletos.jpg"
        },*/

        {
          name: "Agua Florida",
          desc: "Loción tradicional utilizada en rituales de limpieza energética.",
          image: "assets/img/productos/agua-florida.jpg"
        }

      ]
    },


    {
      id: "insumos",
      number: "Archivo N.º 05",
      icon: "bi-box-seam",
      title: "Insumos",
      desc: "Materia prima para quienes elaboran sus propios productos naturales.",
      products: [

        {
          name: "Glicerina vegetal",
          desc: "Base humectante para jabonería y cosmética artesanal.",
          image: "assets/img/Insumos/glicerina.jpeg"
        },

        {
          name: "Cera de miel",
          desc: "Cera natural de abeja para bálsamos, velas y cosmética.",
          image: "assets/img/Insumos/ceraMiel.jpeg"
        },

        {
          name: "Esencias botánicas",
          desc: "Concentrados aromáticos para perfumería y jabonería.",
          image: "assets/img/productos/esencias-botanicas.jpg"
        },

        {
          name: "Insumos para shampoo",
          desc: "Base e ingredientes para elaboración artesanal de shampoo.",
          image: "assets/img/productos/insumos-shampoo.jpg"
        }

      ]
    },


    {
      id: "suplementos",
      number: "Archivo N.º 06",
      icon: "bi-heart-pulse",
      title: "Suplementos dietarios y terapéuticos",
      desc: "Apoyo nutricional natural para complementar tu rutina de bienestar.",
      products: [

        {
          name: "Colágeno",
          desc: "Soporte para piel, articulaciones y tejido conectivo.",
          image: "assets/img/Suplementos/colageno.jpeg"
        },

        {
          name: "Citrato de magnesio",
          desc: "Mineral esencial para energía y función muscular.",
          image: "assets/img/Suplementos/citrato-magnesio.jpg"
        },

        {
          name: "Maca",
          desc: "Raíz andina energizante, tradicionalmente usada para vitalidad.",
          image: "assets/img/Suplementos/maca.jpg"
        },

        {
          name: "Omega 3",
          desc: "Ácidos grasos esenciales para salud cardiovascular.",
          image: "assets/img/Suplementos/omega-3.jpg"
        },

        {
          name: "Aceite de coco",
          desc: "Uso interno y externo; propiedades antifúngicas naturales.",
          image: "assets/img/Suplementos/aceite-coco.jpg"
        },

        {
          name: "Aceite de orégano",
          desc: "Apoyo natural frente a hongos y molestias intestinales.",
          image: "assets/img/Suplementos/aceite-oregano.jpg"
        }

      ]
    },


    {
      id: "mascotas",
      number: "Archivo N.º 07",
      icon: "bi-paw",
      title: "Línea para mascotas",
      desc: "Cuidado natural también para los miembros peludos de la familia.",
      products: [

        {
          name: "Jabones para mascotas",
          desc: "Limpieza suave con ingredientes naturales aptos para su piel.",
          image: "assets/img/productos/jabones-mascotas.jpg"
        },

        {
          name: "Bálsamo para patitas",
          desc: "Protección e hidratación para almohadillas resecas o agrietadas.",
          image: "assets/img/productos/balsamo-patitas.jpg"
        }

      ]
    }

  ];


  const SERVICES = [

    {
      name: "Masoterapia express · Cuerpo entero",
      desc: "Sesión breve de 5 minutos para liberar tensión general.",
      icon: "bi-stopwatch",
      time: "5 min",
      image: "assets/img/Servicios/MasoterapiaCuerpoEntero.jpg"
    },

    {
      name: "Masoterapia express · Pies",
      desc: "Alivio rápido y focalizado para pies cansados.",
      icon: "bi-stopwatch",
      time: "5 min",
      image: "assets/img/Servicios/MasoterapiaPies.jpg"
    },

    {
      name: "Reflexología",
      desc: "Estimulación de puntos reflejos para equilibrar el organismo.",
      icon: "bi-hand-index-thumb",
      time: "A convenir",
      image: "assets/img/Servicios/Reflexiologia.jpeg"
    },

    {
      name: "Masajes antiestrés",
      desc: "Técnicas relajantes para reducir tensión física y mental.",
      icon: "bi-emoji-smile",
      time: "30–60 min",
      image: "assets/img/Servicios/MasajesAntiestres.jpg"
    },

    {
      name: "Masajes capilares",
      desc: "Estimulación del cuero cabelludo para salud del cabello.",
      icon: "bi-brush",
      time: "20 min",
      image: "assets/img/Servicios/MasajesCapilares.jpeg"
    },

    {
      name: "Sueroterapia",
      desc: "Hidratación y aporte de nutrientes vía intravenosa supervisada.",
      icon: "bi-droplet",
      time: "A convenir",
      image: "assets/img/Servicios/Sueroterapia.jpg"
    },

    {
      name: "Desintoxicación iónica",
      desc: "Terapia de pies para favorecer procesos de desintoxicación.",
      icon: "bi-lightning-charge",
      time: "30 min",
      image: "assets/img/Servicios/DesintoxicacionIonica.jpeg"
    },

    {
      name: "Escáner cuántico",
      desc: "Evaluación bioenergética no invasiva del estado general.",
      icon: "bi-cpu",
      time: "20 min",
      image: "assets/img/Servicios/EscanerCuantico.jpg"
    },

    /*{
      name: "Tratamientos personalizados",
      desc: "Planes con medicina tradicional adaptados a tu proceso.",
      icon: "bi-clipboard2-pulse",
      time: "A convenir",
      image: "assets/img/servicios/tratamientos-personalizados.jpg"
    }*/

  ];

  /* ---------------------------------------------------
     2. RENDER — Categorías + productos
  --------------------------------------------------- */
  function renderCatalog() {
    const main = document.getElementById("catalogo");
    if (!main) return;

    let globalIndex = 0;
    const html = CATALOG.map((cat) => {
      const cards = cat.products.map((p) => {
        globalIndex += 1;
        const code = "Nº " + String(globalIndex).padStart(3, "0");
        const badge = p.badge ? `<span class="hbx-product-badge">${p.badge}</span>` : "";
        return `
  <div class="col-6 col-sm-4 col-lg-4 col-xl-3" data-reveal>
    <article class="hbx-product-card" data-name="${p.name.toLowerCase()}">

      <div class="hbx-product-visual">

        <span class="hbx-product-index">${code}</span>

        ${badge}

        <img
          src="${p.image}"
          alt="${p.name}"
          class="hbx-product-image"
          loading="lazy"
        >

      </div>

      <div class="hbx-product-body">

        <h4>${p.name}</h4>

        <p>${p.desc}</p>

        <div class="hbx-product-foot">
          <span>${cat.title}</span>
          <i class="bi bi-arrow-up-right-circle"></i>
        </div>

      </div>

    </article>
  </div>`;

      }).join("");

      return `
        <section class="hbx-category" id="${cat.id}">
          <div class="container">
            <div class="hbx-category-head" data-reveal>
              <div>
                <span class="hbx-category-number">${cat.number}</span>
                <h2 class="hbx-category-title"><i class="bi ${cat.icon}"></i> ${cat.title}</h2>
                <p class="hbx-category-desc">${cat.desc}</p>
              </div>
            </div>
            <div class="row g-3 g-md-4">${cards}</div>
          </div>
        </section>`;
    }).join("");

    main.innerHTML = html;
  }

  /* ---------------------------------------------------
     3. RENDER — Servicios
  --------------------------------------------------- */
  function renderServices() {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;

    grid.innerHTML = SERVICES.map((s) => `
    <div class="col-6 col-lg-4" data-reveal>

      <article class="hbx-service-card">

        <div class="hbx-service-visual">

          ${s.image
        ? `<img
                  src="${s.image}"
                  alt="${s.name}"
                  class="hbx-service-image"
                  loading="lazy"
                >`
        : `<div class="hbx-service-icon">
                  <i class="bi ${s.icon}"></i>
                </div>`
      }


        </div>

        <div class="hbx-service-body">

          <h4>${s.name}</h4>

          <p>${s.desc}</p>

          <div class="hbx-service-foot">
            <span>Servicio Herbalix</span>
            <i class="bi bi-arrow-up-right-circle"></i>
          </div>

        </div>

      </article>

    </div>
  `).join("");
  }

  /* ---------------------------------------------------
     4. NAVBAR — sombra al hacer scroll + cierre en móvil
  --------------------------------------------------- */
  function initNavbar() {
    const nav = document.getElementById("mainNav");
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Cerrar menú colapsado al elegir un link (móvil)
    const collapseEl = document.getElementById("navMenu");
    if (collapseEl && window.bootstrap) {
      const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false });
      collapseEl.querySelectorAll(".nav-link, .dropdown-item").forEach((link) => {
        link.addEventListener("click", () => {
          if (collapseEl.classList.contains("show")) bsCollapse.hide();
        });
      });
    }
  }

  /* ---------------------------------------------------
     5. REVEAL ON SCROLL
  --------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    items.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------
     6. BACK TO TOP
  --------------------------------------------------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      btn.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------------------------------------------
     7. WHATSAPP FLOTANTE — mensaje precargado
  --------------------------------------------------- */
  function initWhatsapp() {
    const link = document.querySelector(".hbx-whatsapp");
    if (!link) return;
    const phone = "59171265932";
    const message = encodeURIComponent("Hola Herbalix, me gustaría más información sobre sus productos.");
    link.href = `https://wa.me/${phone}?text=${message}`;
    link.target = "_blank";
    link.rel = "noopener";
  }

  /* ---------------------------------------------------
     8. FORMULARIO DE CONTACTO (validación + feedback UI)
  --------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const success = document.getElementById("formSuccess");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      form.classList.remove("was-validated");
      success.classList.remove("d-none");
      form.reset();

      setTimeout(() => success.classList.add("d-none"), 6000);
    });
  }

  /* ---------------------------------------------------
     9. NEWSLETTER (feedback simple)
  --------------------------------------------------- */
  function initNewsletter() {
    const form = document.getElementById("newsletterForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input");
      const btn = form.querySelector("button");
      const icon = btn.querySelector("i");
      icon.className = "bi bi-check2";
      input.value = "";
      input.placeholder = "¡Gracias por suscribirte!";
      setTimeout(() => {
        icon.className = "bi bi-arrow-right";
        input.placeholder = "tu@email.com";
      }, 3500);
    });
  }

  /* ---------------------------------------------------
     10. AÑO EN FOOTER
  --------------------------------------------------- */
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------
     INIT
  --------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
    renderServices();
    initNavbar();
    initBackToTop();
    initWhatsapp();
    initContactForm();
    initNewsletter();
    initYear();
    // Reveal se inicializa después de que el catálogo y los servicios
    // ya insertaron sus nodos [data-reveal] en el DOM.
    initReveal();
  });
})();