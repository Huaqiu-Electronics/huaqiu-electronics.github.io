<template>
  <div class="f-container">
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-0 ma-2 bg-grey-lighten-5">
          <LibraryCard />
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-0 ma-2 bg-grey-lighten-5">
          <DFMCard />
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-0 ma-2 bg-grey-lighten-5">
          <FabCard />
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-0 ma-2 bg-grey-lighten-5">
          <PluginCard />
        </v-sheet>
      </v-col>
    </v-row>
  </div>

</template>
<style scoped>
.v-card {
  width: 15vw;
  height: 45vh;
}

.f-container {
  position: relative;
  top: -8vh;
}
</style>
