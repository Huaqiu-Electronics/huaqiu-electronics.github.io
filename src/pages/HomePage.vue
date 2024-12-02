<template>
  <HeaderBackground />
  <v-main class="bg-grey-lighten-5">
    <v-row no-gutters>
      <v-col cols="2">
        <v-sheet class="pa-1 ma-2 bg-grey-lighten-5">
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-0 ma-2 bg-grey-lighten-5">
          <FeatureFunctions />
        </v-sheet>
      </v-col>
      <v-col cols="2">
        <v-sheet class="pa-0 ma-2 bg-grey-lighten-5">
        </v-sheet>
      </v-col>
    </v-row>
  </v-main>

  <CompanyFooter />

</template>

<script setup lang="ts">
//
</script>

<style scoped>
.maybe-higher {
  margin-top: -8vh;
}
</style>
