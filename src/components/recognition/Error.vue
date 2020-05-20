<template>
  <div>
    <div class="overlay--black"></div>
    <div class="error-container">
      <v-card class="mx-auto" :width="tabletDisplay ? 300 : 400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>{{error.message}}</v-card-title>
        </v-img>

        <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text> -->

        <v-card-actions>
          <v-btn color="orange" text @click="hideError">OKE</v-btn>

          <!-- <v-btn color="orange" text>Explore</v-btn> -->
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  props: {
    error: Object,
    tabletDisplay: Boolean
  },
  methods: {
    hideError() {
      this.$emit("hideError", null);
    }
  }
};
</script>

<style scoped>
.overlay--black {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: black;
  opacity: 0.5;
}
.error-container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -400px;
  margin-left: -200px;
  background-color: white;
  z-index: 2;
}
@media screen and (max-width: 768px) {
  .error-container {
    margin-top: -300px;
    margin-left: -150px;
  }
}
</style>