<template>
  <v-app dark>
    <v-toolbar app>
      <v-menu offset-y min-width="100%" v-if="$vuetify.breakpoint.smAndDown">
        <template v-slot:activator="{ on }">
          <v-toolbar-side-icon v-on="on" aria-label="barra de navegación" />
        </template>
        <v-list>
          <v-list-tile
            v-for="item in navItems"
            aria-label="item.title"
            :key="item.title"
            :to="item.to"
            exact
          >
            <v-list-tile-title class="text-uppercase text-truncate">{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <template v-for="item in navItems">
          <v-btn aria-label="item.title" flat :key="item.title" :to="item.to" exact>{{ item.title }}</v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer app height="64px" class="pr-4 pl-4">
      <v-spacer></v-spacer>
      <v-btn outline href="mailto:olga@traductordepolaco.eu" aria-label="Envía un correo">Contacto</v-btn>
      <linked-in-link />
      <facebook-link />
    </v-footer>
  </v-app>
</template>

<script>
import FacebookLink from "~/components/FacebookLink.vue";
import LinkedInLink from "~/components/LinkedInLink.vue";

export default {
  components: {
    "facebook-link": FacebookLink,
    "linked-in-link": LinkedInLink
  },
  data() {
    return {
      mobileMenuOpen: false,
      title: "TRADUCTOR E INTÉRPRETE DE POLACO",
      navItems: [
        {
          title: "Inicio",
          to: "/"
        },
        {
          title: "Servicios",
          to: "/servicios"
        },
        {
          title: "Especialidades",
          to: "/especialidades"
        },
        {
          title: "Trabajos realizados",
          to: "/trabajos-realizados"
        },
        {
          title: "Contacto",
          to: "/contacto"
        }
      ]
    };
  }
};
</script>