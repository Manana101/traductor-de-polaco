<template>
  <v-container fluid pa-0>
    <v-layout align-center class="jumbotron" pa-2>
      <v-flex>
        <h2 class="mb-3">{{ h2 }}</h2>
        <p class="cities">{{ cities }}</p>
      </v-flex>
    </v-layout>
    <v-carousel class="custom-carousel" :hide-controls="$vuetify.breakpoint.xsOnly">
      <v-carousel-item
        v-for="(item,i) in upperCarouselItems"
        :key="i"
        :src="item.src"
      >
      <v-layout align-center justify-center class="carousel-content" pa-2>
        <v-flex xs10 lg6 :class="['carousel-text', {'carousel-text-xs': $vuetify.breakpoint.xsOnly }]">
          <p>{{ item.text }}</p>
        </v-flex>
      </v-layout>
      </v-carousel-item>
    </v-carousel>

    <v-layout align-center class="jumbotron jumbotron-white">
      <v-flex class="headline font-weight-medium pl-4 pr-4">
        {{ jumbotronText2 }}
      </v-flex>
    </v-layout>

    <v-carousel class="custom-carousel" :hide-controls="$vuetify.breakpoint.xsOnly" height="600px">
      <v-carousel-item
        v-for="(item,i) in lowerCarouselItems"
        :key="i"
        :src="item.src"
      >
      <v-layout align-center justify-center class="carousel-content" pa-2>
        <v-flex xs10 lg6 :class="['carousel-text', {'carousel-text-xs': $vuetify.breakpoint.xsOnly }]">
          <h2 class="mb-3">{{ item.title }}</h2>
          <p>{{ item.text }}</p>
          <v-layout justify-center mt-4>
            <v-btn depressed large href="mailto:olga@traductordepolaco.eu">Contacto</v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      h2: 'Olga Niebieszczańska',
      cities: 'Valencia Alicante Castellón Murcia Burgos Madrid Barcelona Sevilla Cádiz Córdoba Granada',
      upperCarouselItems: [
        {
          text: 'Somos un equipo de traductores e intérprestes profesionales de polaco y español con experiencia en múltiples trabajos especializados. Realizamos traducciones escritas o interpretación durante conferencias, congresos, ferias, reuniones de negocios, compra-venta de inmuebles, negociaciones y mucho más.',
          src: require('~/assets/images/inicio1.jpg')
        },
        {
          text: 'Ofrecer un servicio profesional, confiable y entregado a tiempo es parte de nuestro compromiso de trabajo como traductores de polaco en España.',
          src: require('~/assets/images/inicio2.jpg')
        },
        {
          text: 'Si necesitas una traducción de polaco profesional en un campo especializado, mándanos tu documento para traducir al o del polaco para recibir presupuesto.',
          src: require('~/assets/images/inicio3.jpg')
        }
      ],
      jumbotronText2: '¿En qué destacamos?',
      lowerCarouselItems: [
        {
          title: 'Servicios',
          text: 'Si necesitas una traducción de polaco profesional en un campo especializado, mándanos tu documento para traducir al o del polaco para recibir presupuesto. Contamos con todo el equipo y habilidades necesarias para realizar cualquier tipo de traducción de polaco, independientemente de su tamaño y complejidad.',
          src: require('~/assets/images/inicio4.jpg')
        },
        {
          title: 'Traducción e Interpretación de polaco en toda España',
          text: 'Ofrecemos servicios de traducción de documentos de polaco a castellano y de castellano a polaco. Traducimos textos técnicos, médicos, sociales, comerciales, académicos redactados tanto en polaco como en español.',
          src: require('~/assets/images/inicio5.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
  h2, p {
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