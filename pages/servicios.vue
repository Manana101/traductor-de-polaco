<template>
  <v-container grid-list-xl>
    <v-layout align-center mt-4 mb-4>
      <v-flex>
        <h2 class="display-2 font-weight-bold">{{ title }}</h2>
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "Servicios",
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