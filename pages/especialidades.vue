<template>
  <v-container fluid pa-0>
    <v-layout align-center wrap row reverse>
      <v-flex xs12 lg6 :class="['content', {'mobile-height': $vuetify.breakpoint.mdAndDown }]">
        <h1>{{ h1 }}</h1>
        <p>{{ text1 }}</p>
        <p><strong>{{ text2 }}</strong></p>
        <v-btn
          light
          outline
          href="mailto:olga@traductordepolaco.eu"
          aria-label="Envía un correo"
        >Contacto</v-btn>
      </v-flex>
      <v-flex
        xs12
        lg6
        :class="['with-image', {'desktop-height': $vuetify.breakpoint.lgAndUp }, {'mobile-height': $vuetify.breakpoint.mdAndDown }]"
      />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Interpretación consecutiva y traducciones técnicas en español',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Interpretación consecutiva y traducción especializada en múltiples sectores y documentos oficiales. Traducciones técnicas por profesionales en español y polaco'
        },
      link: [
        { rel: "canonical", href: "http://traductordepolaco.eu/especialidades" }
      ]
    };
  },
  data() {
    return {
      h1: "Solicita presupuesto para interpretación o traducción especializada",
      text1: "Nos especializamos en interpretación consecutiva y traducciones técnicas adaptadas a sectores como medicina, derecho, marketing, comercio, ciencia, administración, arte y más. Nuestro equipo domina la traducción especializada, la interpretación simultánea, la traducción de documentos oficiales y las traducciones jurídicas con precisión lingüística.",
      text2: "Contáctanos y solicita tu presupuesto según la modalidad que necesites."
    };
  }
};
</script>

<style lang="scss" scoped>
$footer-height: 64px;
$header-height: 64px;
$mobile-header-height: 56px;

.mobile-height {
  min-height: calc(50vh - #{$footer-height/2} - #{$mobile-header-height/2});
}

.desktop-height {
  height: calc(100vh - #{$footer-height} - #{$header-height});
}

.layout {
  color: black;
  background-color: white;
}

.with-image {
  background-image: url("~assets/images/especialidades.jpg");
  background-size: cover;
}

.content {
  margin: 0 auto;
  padding: 60px;
}

p {
  margin-bottom: 30px;
  font-size: 18px;
}

.v-btn {
  margin: 0;
}
</style>
