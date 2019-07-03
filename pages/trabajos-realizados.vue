<template>
  <v-container>
    <template v-for="(content, index) in contents">
      <v-layout :key="index" justify-center class="content-block">
        <v-flex xs12 lg10 class="column-wrapper">
          <h3 class="pt-4">{{ content.title }}</h3>
          <img
            :src="content.src"
            :width="$vuetify.breakpoint.mdAndDown ? '100%' : '60%'"
            class="pt-4 centered-image"/>
          <div
            v-for="(trabajo, index) in content.trabajos"
            :key="index"
            class="text-wrapper py-4">
            {{ trabajo }}
          </div>
        </v-flex>
      </v-layout>
    </template>
    <v-layout align-center class="jumbotron" pa-2>
      <v-flex>
        <v-flex class="headline font-weight-medium pl-4 pr-4">
        {{ jumbotron }}
      </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          src: require('~/assets/images/trabajos-realizados-interpretaciones.jpg'),
          title: 'Interpretaciones de polaco y español',
          trabajos: [
            'interpretación simultánea, reunión del Muy Ilustre Colegio Oficial de Farmacéuticos de Valencia (MICOF) y la Consellería de Sanidad, Conseller de Sanidad Manuel Cervera y los tres Colegios de Farmacéuticos de la Comunidad Valenciana, Comité de las Regiones de la Unión Europea, Bruselas, Bélgica',
            'interpretación simultánea en el evento internacional de DHL',
            'interpretación consecutiva en la Misión Económica de empresas polacas en Madrid y Toledo',
            'interpretación consecutiva durante una visita de vinicultores polacos en una bodega en Toledo',
            'interpretación susurrada de la escritura de compraventa y de hipoteca ante notario, Provincia de Elche, Alicante',
            'interpretación consecutiva, susurrada y de enlace en el evento internacional de una marca polaca de cosméticos en Valencia',
            'interpretación susurrada y de enlace en la Jornada Bilateral de Oportunidades de Negocio entre Polonia y España, Instituto de Fomento, Murcia',
            'interpretación de enlace sobre cosméticos, negociaciones, Werita, Paterna',
            'interpretación consecutiva y de enlace, temática técnica, curso de servicio y mantenimiento de máquinas de café, CREM International, Gandía',
            'interpretación consecutiva y de enlace sobre cosméticos, comercio, negociación, Laboratorios Belloch, Paterna',
            'interpretación de enlace para la empresa de iluminación Alfa, Feria HABITAT, Valencia',
            'interpretación consecutiva en ceremonia de boda, Konin, Polonia',
            'interpretación consecutiva en la Conferencia de Márketing de ventas de una empresa de alimentación, hotel Kyriad, Varsovia, Polonia',
            'interpretación de enlace durante la caza, empresa Roble Verde, Polonia'
          ]
        },
        {
          src: require('~/assets/images/trabajos-realizados-traducciones.jpg'),
          title: 'Traducciones de polaco y español',
          trabajos: [
            'traducciones sobre impuestos, jurídicas',
            'traducciones de la web y blog sobre arquitectura y aislamiento',
            'traducciones sobre cosméticos y moda',
            'traducción y corrección de español del Manual de Mantenimiento de máquinas (cutter de carne, amasadora de alimentos, lavadora, inyectora de salmuera) de 45 mil palabras',
            'traducción de informes médicos, ecografías',
            'traducción de documentos hospitalarios del paciente',
            'traducción técnica de manual de uso y montaje de maquinaria de construcción',
            'traducciones sobre joyería y moda',
            'traducción de protocolo legal sobre construcción y del dossier de actividad, Industrias Epsai, España',
            'traducción del formulario de paciente, del informe clínico y descripción de la intervención quirúrgica, del texto comercial, del resumen de las características del medicamento',
            'traducción del programa informático de asistencia al paciente sobre medicina e informática de 60 mil palabras',
            'traducción y voz en off en la obra de teatro ¨La mujer de los fósforos¨ (Kobieta z zapałkami), dir. Aleksandra Konieczna, Teatr Narodowy, Varsovia, Polonia',
            'traducción de textos técnicos (electricidad)'
          ]
        }
      ],
      jumbotron: 'y mucho más...'
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  font-style: italic;
  font-size: 24px;
  font-weight: bold;
}

.column-wrapper {
  padding: 0 60px;
}

.text-wrapper {
  border-bottom: 1px solid white;
  text-align: center;
  font-size: 20px;
}

.content-block {
  margin-bottom: 50px;
}

.jumbotron {
  height: 160px;
  text-align: center;
}

.centered-image {
  display: block;
  margin: 0 auto;
}
</style>