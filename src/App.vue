<template>
  <v-app>
    <v-main class="bg-grey-lighten-5">
      <HeaderBar />
      <HeaderBackground />
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
            <!-- <RecentBlogs /> -->
          </v-sheet>
        </v-col>>
      </v-row>
      <CompanyFooter />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
//
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
