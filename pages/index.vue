<template>
  <v-container fluid pa-0>
    <!-- Jumbotron -->
    <v-layout align-center class="jumbotron" pa-2>
      <v-flex>
        <h1 class="mb-3">{{ seccion1titulo1 }}</h1>
        <p class="cities">{{ cities }}</p>
      </v-flex>
    </v-layout>

    <!-- Upper carousel -->
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

    <!-- Sections -->
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

    <!-- Lower carousel -->
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
              <v-btn depressed large :href="'mailto:olga@traductordepolaco.eu'" aria-label="Envía un correo">Contacto</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>

    <!-- FAQ section -->
    <section class="py-8">
      <h2 class="text-h5 mb-4">Preguntas frecuentes sobre traducción e interpretación</h2>

      <div>
        <ul class="faq-list">
          <li v-for="(item, i) in faqs" :key="i">
            <p>{{ item.q }}</p>
            <span class="mb-0">{{ item.a }}</span>
          </li>
        </ul>
      </div>

    </section>
  </v-container>
</template>

<script>
import inicio1 from '~/assets/images/inicio1.jpg'
import inicio2 from '~/assets/images/inicio2.jpg'
import inicio3 from '~/assets/images/inicio3.jpg'
import inicio4 from '~/assets/images/inicio4.jpg'
import inicio5 from '~/assets/images/inicio5.jpg'

export default {
  name: 'HomePage',
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
          src: inicio1
        },
        {
          text:
            "Ofrecer un servicio profesional, confiable y entregado a tiempo es parte de nuestro compromiso de trabajo como traductores de polaco en España.",
          src: inicio2
        },
        {
          text:
            "Si necesitas una traducción de polaco profesional en un campo especializado, mándanos tu documento para traducir al o del polaco para recibir presupuesto.",
          src: inicio3
        }
      ],
      lowerCarouselItems: [
        {
          title: "Servicios",
          text:
            "Si necesitas una traducción de polaco profesional en un campo especializado, mándanos tu documento para traducir al o del polaco para recibir presupuesto. Contamos con todo el equipo y habilidades necesarias para realizar cualquier tipo de traducción de polaco, independientemente de su tamaño y complejidad.",
          src: inicio4
        },
        {
          title: "Traducción e Interpretación de polaco en toda España",
          text:
            "Ofrecemos servicios de traducción de documentos de polaco a castellano y de castellano a polaco. Traducimos textos técnicos, médicos, sociales, comerciales, académicos redactados tanto en polaco como en español.",
          src: inicio5
        }
      ],

      faqs: [
        // ... your faqs array (same as original)
        {
          q: '¿Qué servicios incluye la traducción e interpretación profesional?',
          a: 'Ofrecemos traducción de textos técnicos, traducciones especializadas e interpretación simultánea en eventos, conferencias o reuniones...'
        },
        // add the rest here
      ]
    }
  },
  head() {
    // build FAQ LD-JSON
    const mainEntity = this.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))

    return {
      title: 'Traducción e interpretación profesional en toda España',
      meta: [
        { hid: 'description', name: 'description', content: 'Servicios expertos de traducción e interpretación para empresas en España. Atención en Valencia y otras ciudades | Traductordepolaco' },
        { hid: 'keywords', name: 'keywords', content: 'traductor de polaco en España, intérprete profesional de polaco' }
      ],
      script: [
        {
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
/* your styles unchanged */
h1, h2, p { text-align: center; }
p { font-size: 18px; }
.jumbotron { height: 200px; }
.cities { word-spacing: 12px; }
.carousel-content { height: 100%; }
.carousel-text { border: 3px solid white; padding: 60px; }
.carousel-text-xs { padding: 20px; }
section { max-width: 900px; margin: 0 auto; }
.faq-list li { margin-bottom: 20px; list-style-type: none }
</style>
