<template>
  <v-container grid-list-xl>
    <v-layout align-center mt-4 mb-4>
      <v-flex>
        <h2 class="display-2 font-weight-bold">{{ seccion1titulo1 }}</h2>
        <p>{{ seccion1parrafo1 }}</p>
      </v-flex>
    </v-layout>
    <v-layout wrap fill-height row>
      <template v-for="(card, i) in cards">
        <v-flex :key="i" xs12 sm6>
          <v-card height="100%" light>
            <v-img :src="card.src" aspect-ratio="1.7" />
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ card.title }}</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <div>{{ card.text }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
    <v-layout align-center mt-4 mb-4>
      <v-flex>
        <h2 class="display-2 font-weight-bold">{{ seccion2titulo1 }}</h2>
        <p>{{ seccion2parrafo1 }}</p>
        <h2 class="display-2 font-weight-bold">{{ seccion2titulo2 }}</h2>
        <p>{{ seccion2parrafo2 }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Servicio de interpretación simultánea y traducción profesional',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Servicio de interpretación simultánea y traducción en Valencia por expertos bilingües. Traducciones técnicas y de documentos para empresas y eventos.'
        }
      ],
      link: [
        { rel: "canonical", href: "http://traductordepolaco.eu/servicios" }
      ]
    };
  },
  data() {
    return {
      seccion1titulo1: "Solicita servicio de interpretación simultánea en Valencia",
      seccion1parrafo1: "Ofrecemos servicio de interpretación simultánea y traducciones técnicas precisas para empresas y particulares. Nuestros intérpretes profesionales trabajan en eventos, conferencias y reuniones. También realizamos traducciones de documentos especializadas, desde textos técnicos hasta jurídicos. Operamos desde Valencia y brindamos servicios de traducción Valencia para toda España, con resultados de alta calidad.",
      seccion2titulo1: "Beneficios de nuestros servicios de traducción Valencia",
      seccion2parrafo1: "Nuestros servicios de traducción Valencia garantizan entregas precisas y adaptadas a cada sector. Traducimos documentos técnicos, médicos, académicos y comerciales de polaco a español y viceversa. Cada proyecto es tratado con atención al detalle por traductores expertos. La fidelidad del texto original y la comprensión cultural aseguran una traducción útil y eficaz.",
      seccion2titulo2: "Técnicas de traducción aplicadas en cada especialidad",
      seccion2parrafo2: "Utilizamos técnicas de traducción profesionales que se ajustan al contexto de cada documento. Nuestro equipo domina las mejores prácticas lingüísticas para adaptar contenidos técnicos o especializados. Gracias a su experiencia en traducciones técnicas, ofrecemos resultados de alta precisión. Las traducciones de documentos se entregan siempre revisadas y listas para su uso inmediato.", 
      cards: [
        {
          title: "Traducción de polaco",
          src: require("~/assets/images/servicios-traduccion.jpg"),
          text:
            "Ofrecemos servicios de traducción de documentos de polaco a castellano y de castellano a polaco. Traducimos textos técnicos, médicos, sociales, comerciales, académicos redactados tanto en polaco como en español. Trabajamos para los clientes que buscan alta calidad de traducciones de polaco técnicas, especializadas, jurídicas, etc. Mándanos tu texto para traducir del o al polaco para recibir el presupuesto y plazo de entrega. Siempre cumplimos los plazos acordados con el cliente de finalizar su traducción de polaco."
        },
        {
          title: "Interpretación de polaco",
          src: require("~/assets/images/servicios-interpretacion.jpg"),
          text:
            "Te acompañamos durante las reuniones de negocios en Polonia y España proporcionando intérpretes profesionales de polaco y castellano. Ofrecemos interpretación de polaco simultánea en cabina, interpretación consecutiva de polaco, interpretación de enlace durante eventos, ferias, conferencias y congresos. Contáctanos para recibir el presupuesto de tu interpretación en polaco y español."
        }
      ]
    };
  }
};
</script>
