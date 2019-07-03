<template>
  <v-container fluid pa-0>
    <v-layout
      :class="['layout', { 'layout-with-image': $vuetify.breakpoint.lgAndUp }]"
      justify-end
      align-center
    >
      <v-flex xs12 lg8 class="content">
        <p class="title">{{ text1 }}</p>
        <p class="title">{{ text2 }}</p>
        <v-btn light outline href="mailto:olga@traductordepolaco.eu">Contacto</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      src: require('~/assets/images/especialidades.jpg'),
      text1: 'Nos especializamos en medicina, derecho, márketing, comercio, ciencia, Unión Europea, administración, humanidades, arte, construcción, cosmética, etc...',
      text2: 'Pide el presupuesto según la modalidad.'
    }
  }
}
</script>

<style lang="scss" scoped>
$footer-height: 64px;
$header-height: 64px;

.layout {
  height: calc(100vh - #{$footer-height} - #{$header-height});
  color: black;
  background-color: white;
}

.layout-with-image {
  background-image: url('~assets/images/especialidades.jpg');
  background-size: cover;
}

.content {
  padding: 60px;
}

p {
  margin-bottom: 30px;
}

.v-btn {
  margin: 0;
}
</style>