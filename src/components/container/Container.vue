<template>
  <main>
    <ContentHeader />
    <div class="content">
      <div class="SideContent">
        <template v-if="leagues.length > 0">
          <TierBox :division="'solo'" :leagues="leagues[0]" />
          <TierBox :division="'team'" :leagues="leagues[1]" />
        </template>
        <MostInfoBox />
      </div>
      <div></div>
    </div>
  </main>
</template>

<script>
import ContentHeader from "./ContentHeader.vue";
import MostInfoBox from "./MostInfoBox.vue";
import TierBox from "./TierBox.vue";
export default {
  components: { ContentHeader, TierBox, MostInfoBox },
  computed: {
    userInfo() {
      return this.$store.state.userInfo || [];
    },
    ladderRank() {
      return this.$store.state.ladderRank || [];
    },
    leagues() {
      return this.$store.state.leagues || [];
    },
  },
  methods: {},
};
</script>

<style>
.content {
  width: 970px;
  margin: 0 auto;
}
.SideContent {
  width: 300px;
}
</style>