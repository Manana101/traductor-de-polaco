<script>
export default {
  head() {
    return {
      title: 'Traducción e interpretación profesional en toda España',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Servicios expertos de traducción e interpretación para empresas en España. Atención en Valencia y otras ciudades | Traductordepolaco'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'traductor de polaco en España, intérprete profesional de polaco'
        }
      ]
    }
  }
}
</script>

<template>
  <v-container fluid pa-0>
    <v-layout align-center class="jumbotron" pa-2>
      <v-flex>
        <h1 class="mb-3">{{ seccion1titulo1 }}</h1>
        <p class="cities">{{ cities }}</p>
      </v-flex>
    </v-layout>
    <v-carousel class="custom-carousel" :hide-controls="$vuetify.breakpoint.xsOnly">
      <v-carousel-item v-for="(item,i) in upperCarouselItems" :key="i" :src="item.src">
        <v-layout align-center justify-center class="carousel-content" pa-2>
          <v-flex
            xs10
            lg6
            :class="['carousel-text', {'carousel-text-xs': $vuetify.breakpoint.xsOnly }]"
          >
            <p>{{ item.text }}</p>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>

    <v-container fluid pa-0>
    <v-layout align-center wrap row>
      <v-flex lg12>
        <h2>{{ seccion2titulo1 }}</h2>
        <p>{{ seccion2parrafo1 }}</p>
      </v-flex>
    </v-layout>
  </v-container>

    <v-container fluid pa-0>
    <v-layout align-center wrap row>
      <v-flex lg12>
        <h2>{{ seccion3titulo1 }}</h2>
        <p>{{ seccion3parrafo1 }}</p>
      </v-flex>
    </v-layout>
  </v-container>

    <v-carousel class="custom-carousel" :hide-controls="$vuetify.breakpoint.xsOnly" height="600px">
      <v-carousel-item v-for="(item,i) in lowerCarouselItems" :key="i" :src="item.src">
        <v-layout align-center justify-center class="carousel-content" pa-2>
          <v-flex
            xs10
            lg6
            :class="['carousel-text', {'carousel-text-xs': $vuetify.breakpoint.xsOnly }]"
          >
            <h2 class="mb-3">{{ item.title }}</h2>
            <p>{{ item.text }}</p>
            <v-layout justify-center mt-4>
              <v-btn
                depressed
                large
                href="mailto:olga@traductordepolaco.eu"
                aria-label="Envía un correo"
              >Contacto</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<template>
  <section class="py-8">
    <h2 class="text-h5 mb-4">Preguntas frecuentes sobre traducción e interpretación</h2>

    <!-- Si usas Vuetify -->
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="(item, i) in faqs" :key="i">
        <v-expansion-panel-header>
          {{ item.q }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p class="mb-0">{{ item.a }}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script>
export default {
  name: 'FaqTraduccion',
  data() {
    return {
      faqs: [
        {
          q: '¿Qué servicios incluye la traducción e interpretación profesional?',
          a: 'Ofrecemos traducción de textos técnicos, traducciones especializadas e interpretación simultánea en eventos, conferencias o reuniones. También cubrimos interpretación de conferencias, negociaciones comerciales y ferias. Nuestros traductores profesionales trabajan tanto en polaco como en español, asegurando precisión lingüística. Los servicios están disponibles en Valencia y en cualquier parte de España, tanto de forma presencial como online.'
        },
        {
          q: '¿Cuál es la diferencia entre traducción e interpretación?',
          a: 'La traducción es el proceso de convertir textos escritos entre dos idiomas. La interpretación es oral y se realiza en tiempo real. Ambas requieren habilidades distintas. En eventos como ferias, congresos o negociaciones, la interpretación simultánea o consecutiva garantiza comunicación eficaz. Ofrecemos ambos servicios, adaptados a cada necesidad, tanto en Valencia como en otras ciudades.'
        },
        {
          q: '¿Qué es la interpretación simultánea y cuándo se utiliza?',
          a: 'La interpretación simultánea se utiliza en conferencias, congresos y reuniones multilingües. El intérprete traduce mientras el orador habla, usando equipos técnicos. Este servicio requiere formación específica y rapidez mental. Es ideal para eventos de gran escala donde se necesita traducción inmediata. Nuestro equipo profesional asegura fluidez y precisión en cada intervención con total confidencialidad y profesionalismo.'
        },
        {
          q: '¿Qué tipo de documentos se traducen normalmente?',
          a: 'Trabajamos con traducciones técnicas, documentos jurídicos, académicos, médicos y comerciales. Traducimos del polaco al español y viceversa. Los textos se adaptan al contexto cultural y al público objetivo. También realizamos traducción de páginas web, manuales y contratos. Garantizamos fidelidad al texto original y entregas puntuales. Todos los documentos pasan por revisión para asegurar calidad lingüística.'
        },
        {
          q: '¿Cuánto cuesta un servicio de traducción o interpretación?',
          a: 'El coste depende del tipo de servicio, número de palabras o duración del evento. Las traducciones técnicas o la interpretación simultánea requieren tarifas personalizadas. Ofrecemos presupuestos a medida sin compromiso. La calidad profesional está garantizada en cada proyecto. Atendemos empresas y particulares en Valencia y otras ciudades de España, adaptándonos a necesidades y presupuestos.'
        },
        {
          q: '¿Dónde ofrecéis vuestros servicios de traducción e interpretación?',
          a: 'Nuestros servicios están disponibles en toda España. Atendemos en Valencia, Madrid, Barcelona, Sevilla y otras ciudades. Podemos ofrecer traducción escrita online y también interpretación presencial u online. Colaboramos con empresas, instituciones y particulares. Nuestro equipo se adapta al formato y necesidades del cliente. También acompañamos en eventos, ferias o negociaciones donde se requiera interpretación profesional.'
        }
      ]
    }
  },
  head() {
    // Construye JSON-LD para FAQPage desde los datos
    const mainEntity = this.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))

    return {
      script: [
        {
          // IMPORTANTE: 'hid' evita duplicados
          hid: 'ldjson-faq-traduccion',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Ajustes mínimos; Vuetify ya aporta estilos */
section { max-width: 900px; margin: 0 auto; }
</style>

<script>
export default {
  data() {
    return {
      seccion1titulo1: "Solicita servicios de traducción e interpretación en Valencia",
      cities:
        "Valencia Alicante Castellón Murcia Burgos Madrid Barcelona Sevilla Cádiz Córdoba Granada",
      seccion2titulo1: "Interpretación simultánea y traducciones especializadas",
      seccion2parrafo1: "Somos un equipo profesional con amplia experiencia en traducción e interpretación, interpretación simultánea y traducciones especializadas. Ofrecemos soluciones para empresas, particulares y eventos en toda España.",
      seccion3titulo1: "Servicios de traducción técnica y eventos profesionales",
      seccion3parrafo1: "Nos destacamos por ofrecer traducciones técnicas precisas y servicios de interpretación en eventos como conferencias, ferias, reuniones empresariales o negociaciones. Nuestro equipo domina tanto el polaco como el español con excelencia profesional.",
      upperCarouselItems: [
        {
          text:
            "Somos un equipo de traductores e intérprestes profesionales de polaco y español con experiencia en múltiples trabajos especializados. Realizamos traducciones escritas o interpretación durante conferencias, congresos, ferias, reuniones de negocios, compra-venta de inmuebles, negociaciones y mucho más.",
          src: require("~/assets/images/inicio1.jpg")
        },
        {
          text:
            "Ofrecer un servicio profesional, confiable y entregado a tiempo es parte de nuestro compromiso de trabajo como traductores de polaco en España.",
          src: require("~/assets/images/inicio2.jpg?lazy")
        },
        {
          text:
            "Si necesitas una traducción de polaco profesional en un campo especializado, mándanos tu documento para traducir al o del polaco para recibir presupuesto.",
          src: require("~/assets/images/inicio3.jpg?lazy")
        }
      ],
      lowerCarouselItems: [
        {
          title: "Servicios",
          text:
            "Si necesitas una traducción de polaco profesional en un campo especializado, mándanos tu documento para traducir al o del polaco para recibir presupuesto. Contamos con todo el equipo y habilidades necesarias para realizar cualquier tipo de traducción de polaco, independientemente de su tamaño y complejidad.",
          src: require("~/assets/images/inicio4.jpg")
        },
        {
          title: "Traducción e Interpretación de polaco en toda España",
          text:
            "Ofrecemos servicios de traducción de documentos de polaco a castellano y de castellano a polaco. Traducimos textos técnicos, médicos, sociales, comerciales, académicos redactados tanto en polaco como en español.",
          src: require("~/assets/images/inicio5.jpg?lazy")
        }
      ]
    };
  }
};
</script>

<style scoped>
h1,
h2,
p {
  text-align: center;
}

p {
  font-size: 18px;
}

.jumbotron {
  height: 200px;
}

.jumbotron-white {
  background-color: white;
  color: black;
}

.cities {
  word-spacing: 12px;
}

.carousel-content {
  height: 100%;
}

.carousel-text {
  border: 3px solid white;
  padding: 60px;
}

.carousel-text-xs {
  padding: 20px;
}
</style>
