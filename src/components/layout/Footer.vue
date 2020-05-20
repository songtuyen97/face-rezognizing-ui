<template>
  <div class="container-foot">
      <v-card >
        <v-footer
        id="footer"
        absolute
        class="font-weight-medium"
        >
          <v-col
              class="text-center"
              cols="12"
          >
              {{ new Date().getFullYear() }} — <strong>Saitama</strong>
          </v-col>
        </v-footer>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    let heightOfFooter = document.getElementById("footer").offsetHeight;
    this.$emit("heightOfFooter", heightOfFooter);
  }
}
</script>

<style scoped>
.container-foot {
  position: fixed;
  bottom: 0;
  
  width: 100%;
  
  /* right: 0;top:0;left:0; */
  /* height: 60px; */
  background-color: #0282A8;
  z-index: 1;
}
</style>