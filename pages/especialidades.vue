<template>
  <v-container fluid pa-0>
    <v-layout align-center wrap row reverse>
      <v-flex xs12 lg6 :class="['content', {'mobile-height': $vuetify.breakpoint.mdAndDown }]">
        <p>{{ text1 }}</p>
        <p>{{ text2 }}</p>
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
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Traducción e interpretación de polaco comercial, de márketing, jurídica, médica, técnica, sector de construcción, científica."
        }
      ],
      link: [
        { rel: "canonical", href: "http://traductordepolaco.eu/especialidades" }
      ]
    };
  },
  data() {
    return {
      text1:
        "Nos especializamos en medicina, derecho, márketing, comercio, ciencia, Unión Europea, administración, humanidades, arte, construcción, cosmética, etc...",
      text2: "Pide el presupuesto según la modalidad."
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