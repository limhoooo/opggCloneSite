<template>
  <main>
    <ContentHeader />
    <div :class="$style.content">
      <div :class="$style.sideContent">
        <template v-if="leagues.length > 0">
          <TierBox :division="'solo'" :leagues="leagues[0]" />
          <TierBox :division="'team'" :leagues="leagues[1]" />
        </template>
        <MostInfoBox />
      </div>
      <MatchListBox />
    </div>
  </main>
</template>

<script>
import ContentHeader from "./ContentHeader.vue";
import MatchListBox from "./leftSection/matchListBox/MatchListBox.vue";
import MostInfoBox from "./leftSection/mostInfoBox/MostInfoBox.vue";
import TierBox from "./leftSection/mostInfoBox/TierBox.vue";
export default {
  components: { ContentHeader, TierBox, MostInfoBox, MatchListBox },
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

<style module>
.content {
  width: 970px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
}
.sideContent {
  width: 300px;
}
</style>