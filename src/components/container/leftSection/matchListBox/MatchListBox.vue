<template>
  <div :class="$style.matchListBox">
    <div :class="$style.matchListHeaderBox">
      <ul :class="$style.matchListTab">
        <li
          :class="{ gameTabActive: gameTabFlag === '전체' }"
          @click="gameTabFnc('전체')"
        >
          <a href="javascript:void(0);">전체</a>
        </li>
        <li
          :class="{ gameTabActive: gameTabFlag === '솔랭' }"
          @click="gameTabFnc('솔랭')"
        >
          <a href="javascript:void(0);">솔로게임</a>
        </li>
        <li
          :class="{ gameTabActive: gameTabFlag === '자유 5:5 랭크' }"
          @click="gameTabFnc('자유 5:5 랭크')"
        >
          <a href="javascript:void(0);">자유랭크</a>
        </li>
      </ul>
      <div :class="$style.matchListGraphBox">
        <div :class="$style.matchListGraph">
          <p :class="$style.topText">
            {{ games.length }}전 {{ summary.wins }}승 {{ summary.losses }}패
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
                    }}승 {{ champion.losses }}패)
                  </span>
                  <span
                    :class="`${$style.box2} ${kdaColor(
                      kda(champion.kills, champion.assists, champion.deaths)
                    )}`"
                  >
                    {{ kda(champion.kills, champion.assists, champion.deaths) }}
                    평점
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
              <span :class="$style.noneChampionText">
                챔피언 정보가 없습니다.
              </span>
            </li>
          </ul>
        </div>
        <div :class="$style.matchListPositionsBox">
          <p>선호 포지션 (랭크)</p>
          <div v-for="position in positions" :key="position.index">
            <div :class="$style.matchListPositionItem">
              <img :src="postionImageFnc(position.position)" alt="" />
              <div :class="$style.matchListPositionItemText">
                <h3>{{ position.positionName }}</h3>
                <span>{{ winsAvg(position.games, games.length) }}%</span>
                <span> | </span>
                <span
                  >승률
                  <b>{{ winsAvg(position.wins, position.games) }}%</b></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.matchListListBox">
        <MatchListItem
          v-for="game in gamesCapyData"
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
  data() {
    return {
      gameTabFlag: "전체",
      gamesData: [],
    };
  },
  computed: {
    champions() {
      return this.$store.state.champions || [];
    },
    games() {
      return this.$store.state.games || [];
    },
    gamesCapyData: {
      get() {
        return this.$store.state.gamesCapyData;
      },
      set(newValue) {
        this.$store.state.gamesCapyData = newValue;
      },
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
      return require(`../../../../assets/img/icon-${position.toLowerCase()}.png`);
    },
    gameTabFnc(type) {
      this.gameTabFlag = type;
      if (type === "전체") {
        this.gamesCapyData = this.games;
      } else {
        const gameList = this.games.filter((item) => item.gameType === type);
        this.gamesCapyData = gameList;
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
.matchListListBox {
  padding-top: 8px;
}
</style>