<template>
  <v-app>
    <div :style="{'height': heightOfHeaderComputed}">
      <Header @heightOfHeader="getHeightOfHeader"/>
    </div>
    <div>
      <router-view/>
    </div>
    <div :style="{'height': heightOfFooterComputed}">
      <Footer @heightOfFooter="getHeightOfFooter"/>
    </div>
  </v-app>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data() {
    return {
      heightOfFooter: 0,
      heightOfHeader: 0,
    }
  },

  methods: {
    getHeightOfFooter(value) {
      this.heightOfFooter = value;
    },
    getHeightOfHeader(value) {
      this.heightOfHeader = value;
    }
  },
  computed: {
    heightOfFooterComputed() {
      let height = this.heightOfFooter + 'px';
      return height;
    },
    heightOfHeaderComputed() {
      let height = this.heightOfHeader + 'px';
      return height;
    }
  }
};
</script>
<style scoped>
</style>
