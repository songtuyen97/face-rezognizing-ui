<template>
  <div>
    <v-btn @click="setCount(jumpCount)">router view</v-btn>
    <span>{{count}}</span>
    <v-btn class="ma-2" outlined large fab color="indigo">
      <v-img src="@/assets/images/logo.png" aspect-ratio="1" fab class="round"></v-img>
    </v-btn>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
  export default {
    name: 'HelloWorld',

    data: () => ({
      jumpCount: 2
    }),
    methods: {
      ...mapActions('test', ['setCount']),
      incrementCount() {
        this.$store.dispatch('incrementCounterAction', 3);
      }
    },
    computed: {
      ...mapGetters('test', ['count'])
    }
  }
</script>
<style scoped>
.round {
  border-radius: 30px
}
</style>