<template>
  <div :class="$style.mostInfoBox">
    <ul>
      <li
        :class="{ tabActive: activeFlag === 'championsTab' }"
        @click="activeFnc('championsTab')"
      >
        <a href="javascript:void(0);">챔피언승률</a>
      </li>
      <li
        :class="{ tabActive: activeFlag === 'weekTab' }"
        @click="activeFnc('weekTab')"
      >
        <a href="javascript:void(0);">7일간 랭크 승률 </a>
      </li>
    </ul>

    <div v-show="activeFlag === 'championsTab'">
      <ChampionsinfoItem
        v-for="champions in championsList"
        :key="champions.index"
        :champions="champions"
      />
    </div>
    <div v-show="activeFlag === 'weekTab'">
      <RecentWinRateItem
        v-for="recentWinRateItem in recentWinRate"
        :key="recentWinRateItem.index"
        :recentWinRateItem="recentWinRateItem"
      />
    </div>
  </div>
</template>

<script>
import ChampionsinfoItem from "../ChampionsinfoItem.vue";
import RecentWinRateItem from "../mostInfoBox/RecentWinRateItem.vue";
export default {
  components: { ChampionsinfoItem, RecentWinRateItem },
  data() {
    return {
      activeFlag: "championsTab",
    };
  },
  computed: {
    championsList() {
      return this.$store.state.mostInfo.champions || [];
    },
    recentWinRate() {
      return this.$store.state.mostInfo.recentWinRate || [];
    },
  },
  methods: {
    activeFnc(value) {
      this.activeFlag = value;
    },
  },
};
</script>

<style module>
.mostInfoBox {
  margin-top: 8px;
}
.mostInfoBox ul {
  display: flex;
  justify-content: flex-start;
}
.mostInfoBox ul li {
  width: 50%;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #cdd2d2;
  background-color: #f2f2f2;
  cursor: pointer;
}
.mostInfoBox ul li a {
  width: 100%;
  height: 100%;
  display: block;
  font-size: 12px;
  color: #879292;
}
</style>