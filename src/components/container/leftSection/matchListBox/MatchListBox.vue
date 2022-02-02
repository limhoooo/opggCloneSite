<template>
  <div :class="$style.matchListBox">
    <div :class="$style.matchListHeaderBox">
      <ul :class="$style.matchListTab">
        <li>
          <a href="javascript:void(0);">Total</a>
        </li>
        <li>
          <a href="javascript:void(0);">Ranked Solo</a>
        </li>
        <li>
          <a href="javascript:void(0);">Total</a>
        </li>
      </ul>
      <div :class="$style.matchListGraphBox">
        <div :class="$style.matchListGraph">
          <p :class="$style.topText">
            {{ games.length }}G {{ summary.wins }}W {{ summary.losses }}L
          </p>
          <div :class="$style.boxContent">
            <div :class="$style.chartBox">
              <div
                :class="$style.pieChart"
                :style="{
                  background: `conic-gradient(#ee5a52 0% ${
                    (winsAvg(summary.wins, games.length) - 100) * -1
                  }%, #1f8ecd 0% 0%)`,
                }"
              >
                <span :class="$style.center"
                  >{{ winsAvg(summary.wins, games.length) }}%</span
                >
              </div>
            </div>
            <div :class="$style.kdaTextBox">
              <p :class="$style.kdaText1">
                {{ summary.kills / games.length }} /
                <span class="red">{{ summary.assists / games.length }}</span> /
                {{ summary.deaths / games.length }}
              </p>
              <p :class="$style.kdaText2">
                <span
                  :class="
                    kdaColor(
                      kda(summary.kills, summary.assists, summary.deaths)
                    )
                  "
                >
                  {{ kda(summary.kills, summary.assists, summary.deaths) }}:1
                </span>
                <span class="red">
                  ({{ winsAvg(summary.wins, games.length) }}%)
                </span>
              </p>
            </div>
          </div>
        </div>
        <div :class="$style.matchListChampion">
          <ul>
            <li
              :class="$style.matchListChampionItem"
              v-for="champion in champions"
              :key="champion.index"
            >
              <img :src="champion.imageUrl" alt="championImage" />
              <div :class="$style.matchListChampionTextBox">
                <h3>{{ champion.name }}</h3>
                <div :class="$style.matchListChampionText">
                  <span :class="$style.box1">
                    {{ winsAvg(champion.wins, champion.games) }}% ({{
                      champion.wins
                    }}W {{ champion.losses }}L)
                  </span>
                  <span
                    :class="`${$style.box2} ${kdaColor(
                      kda(champion.kills, champion.assists, champion.deaths)
                    )}`"
                  >
                    {{ kda(champion.kills, champion.assists, champion.deaths) }}
                    KDA
                  </span>
                </div>
              </div>
            </li>
            <li
              :class="$style.matchListChampionItem"
              v-show="champions.length < 3"
            >
              <img
                src="../../../../assets/img/group.png"
                alt="noneChampionImage"
              />
              <span :class="$style.noneChampionText"> Not found Champion </span>
            </li>
          </ul>
        </div>
        <div :class="$style.matchListPositionsBox">
          <p>Preferred Postion (Rank)</p>
          <div v-for="position in positions" :key="position.index">
            <div :class="$style.matchListPositionItem">
              <img
                v-show="position.position === 'MID'"
                src="../../../../assets/img/icon-mid.png"
                alt="postionMidImage"
              />
              <img
                v-show="position.position === 'SUP'"
                src="../../../../assets/img/icon-sup.png"
                alt="postionSupImage"
              />
              <img
                v-show="position.position === 'TOP'"
                src="../../../../assets/img/icon-top.png"
                alt="postionTopImage"
              />
              <img
                v-show="position.position === 'ADC'"
                src="../../../../assets/img/icon-adc.png"
                alt="postionAdcImage"
              />
              <img
                v-show="position.position === 'JNG'"
                src="../../../../assets/img/icon-jng.png"
                alt="postionJngImage"
              />
              <div :class="$style.matchListPositionItemText">
                <h3>{{ position.positionName }}</h3>
                <span>{{ winsAvg(position.games, games.length) }}%</span>
                <span> | </span>
                <span
                  >Win Rate
                  <b>{{ winsAvg(position.wins, position.games) }}%</b></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.matchListListBox">
        <MatchListItem
          v-for="game in games"
          :key="game.index"
          :gameInfo="game"
        />
      </div>
    </div>
  </div>
</template>




<script>
import calculateMixin from "@/common/calculateMixin.js";
import MatchListItem from "./MatchListItem.vue";
export default {
  components: { MatchListItem },
  mixins: [calculateMixin],
  computed: {
    champions() {
      return this.$store.state.champions || [];
    },
    games() {
      return this.$store.state.games || [];
    },
    positions() {
      return this.$store.state.positions || [];
    },
    summary() {
      return this.$store.state.summary || [];
    },
  },
  methods: {
    postionImageFnc(position) {
      if (position === "MID") {
        return "../../../../assets/img/icon-mid.png";
      }
    },
  },
};
</script>

<style module>
.matchListBox {
  width: 690px;
  margin-top: 8px;
  margin-left: 10px;
}
.matchListTab {
  border: 1px solid #cdd2d2;
  background-color: #f2f2f2;
  display: flex;
  justify-content: flex-start;
}
.matchListTab li {
  padding: 12px 16px;
}
.matchListTab li a {
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: #555555;
}
.matchListGraphBox {
  border: 1px solid #cdd2d2;
  border-top: none;
  display: flex;
  justify-content: flex-start;
  min-height: 160px;
}
.matchListGraphBox > div {
  border-right: 1px solid #cdd2d2;
}
.matchListGraphBox > div:last-child {
  border: none;
}
.topText {
  font-size: 12px;
  color: #666666;
  padding: 16px 0 14px 20px;
}

.boxContent {
  display: flex;
  justify-content: flex-start;
}
.kdaTextBox {
  margin: 10px 25px 0 30px;
}
.kdaText1 {
  font-size: 11px;
  color: #333333;
  margin-top: 5px;
}
.kdaText2 {
  font-size: 16px;
  color: #333333;
  margin-top: 5px;
  font-weight: 500;
}
.chartBox {
  padding-left: 24px;
}
.pieChart {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  transition: 0.3s;
}
.center {
  background: #eaeaea;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  font-size: 14px;
  color: #555;
  transform: translate(-50%, -50%);
}
.matchListChampion ul {
  margin: 16px;
}
.matchListChampionItem {
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
}
.matchListChampionItem:first-child {
  margin-top: 0;
}
.matchListChampionItem img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 5px;
}

.matchListChampionTextBox h3 {
  margin: 0;
  margin-bottom: 3px;
  line-height: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.matchListChampionText {
  font-size: 11px;
  line-height: 12px;
  color: #333;
}
.matchListChampionText .box1 {
  width: 80px;
  display: inline-block;
}
.matchListPositionItem {
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
}
.matchListPositionItem img {
  width: 32px;
  height: 32px;
  margin-right: 5px;
}
.matchListPositionItem > h3 {
  line-height: 16px;
  font-size: 14px;
  color: #333;
}
.matchListPositionItemText h3 {
  margin: 0;
  line-height: 16px;
  font-size: 14px;
  color: #333;
}
.matchListPositionItemText span {
  font-size: 11px;
}
.matchListPositionsBox {
  padding-left: 16px;
  box-sizing: border-box;
}
.matchListPositionsBox > p {
  font-size: 12px;
  margin-top: 15px;
  color: #666666;
}
.noneChampionText {
  font-size: 11px;
  color: #999;
  margin-top: 8px;
}
</style>