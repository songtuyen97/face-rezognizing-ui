<template>
  <v-app>
    <v-card id="header" class="container-head">
      <v-toolbar 
        class="blue font-weight-bold white--text"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/images/logo.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-toolbar-title>Saitamas</v-toolbar-title>
          </v-list-item-content>
        </v-list-item>
        

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <!-- drawer -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
      ],
      group: null
    }
  },
  mounted() {
    let heightOfHeader = document.getElementById("header").offsetHeight;
    this.$emit("heightOfHeader", heightOfHeader);
  },
  watch: {
    group () {
        this.drawer = false
    },
  }
}
</script>

<style scoped>
.container-head {
  position: fixed;
  top: 0;
  width: 100%;
  /* height: 60px; */
  background-color: #0282A8;
  z-index: 1;
}
.header-custom {
  background-color: red;
}
</style>