<template>
  <div id="app">
    <Header />
    <Container />
  </div>
</template>

<script>
import Container from "./components/container/Container.vue";
import Header from "./components/haeder/Header.vue";
export default {
  name: "App",
  components: { Header, Container },
  created() {
    this.$store.dispatch("getSummonerFnc", "임호");
    this.$store.dispatch("getMostInfoFnc", "임호");
    this.$store.dispatch("getMatchListFnc", "임호");
  },
};
</script>
<style scoped>
@import "./assets/css/basic.css";
@import "./assets/css/style.css";
</style>