<template>
  <v-container>

    <v-layout justify-center class="typeform">
      <v-flex xs12 lg8>
        <div class="typeform-widget" data-url="https://manana307418.typeform.com/to/zqdTJK" data-hide-headers=true data-hide-footer=true style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
      </v-flex>
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

    <v-layout justify-center class="buttons">
      <v-btn large depressed light href="mailto:olga@traductordepolaco.eu">Envía un correo</v-btn>
      <v-btn large outline href="tel:+34693592793">Llama</v-btn>
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
  h1, h3, p {
    text-align: center;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }

  .map {
    margin: 60px 0;
  }

  .typeform {
    margin-top: 20px;
    margin-bottom: 80px;
  }

  .buttons {
    margin-bottom: 40px;
  }
</style>