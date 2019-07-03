<template>
  <v-container>

    <v-layout align-center mb-4 class="jumbotron">
      <v-flex>
        <h1 class="display-2 font-weight-bold">{{ h1 }}</h1>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12 lg8>
        <v-img :src="image" aspect-ratio="1.7" />
        <p class="mt-4 pt-3">
          {{ data.address_line1 }}<br/>
          {{ data.address_line2 }}
        </p>
        <p class="mb-4 pb-2">
          {{ data.webpage }}<br/>
          {{ data.mail }}<br/>
          {{ data.tel }}
        </p>
        <v-layout justify-center>
          <v-btn large depressed light href="mailto:olga@traductordepolaco.eu">Envía un correo</v-btn>
          <v-btn large outline href="tel:+34693592793">Llama</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout fluid justify-center>
      <iframe
        class="map"
        width="100%"
        height="450px"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=calle%20Islas%20Baleares%202%2046388%20Godelleta%2C%20Valencia&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </v-layout>

    <v-layout justify-center wrap>
      <v-flex md12 lg4 mb-4>
        <h3>Dirección</h3>
        <p class="ma-3">
          {{ data.address_line1 }}<br/>
          {{ data.address_line2 }}
        </p>
      </v-flex>
      <v-flex md12 lg4 mb-4>
        <h3>Contacto</h3>
        <p class="ma-3">
          {{ data.tel }}<br/>
          {{ data.mail }}<br/>
          {{ data.webpage }}
        </p>
      </v-flex>
      <v-flex md12 lg4 mb-4>
        <h3>Horarios</h3>
        <p class="ma-3">
          {{ data.horarios_line1 }}<br/>
          <em>{{ data.horarios_line2 }}</em>
        </p>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      h1: 'Contacto',
      image: require('~/assets/images/contacto.jpg'),
      data: {
        address_line1: 'Calle Islas Baleares 2/11',
        address_line2: '46388 Godelleta, Valencia',
        webpage: 'www.traductordepolaco.eu',
        mail: 'olga@traductordepolaco.eu',
        tel: '(+34) 693592793',
        horarios_line1: 'lunes a viernes 9:00 - 20:30',
        horarios_line2: 'para la interpretación, consultar disponibilidad'
      }
    }
  }
}
</script>

<style scoped>
  h1,h3, p {
    text-align: center;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }

  .jumbotron {
    height: 120px;
  }

  .map {
    margin: 100px 0;
  }
</style>