<template>
  <div :class="`${$style.matchListItem} ${winBgClassFnc}`">
    <div :class="$style.matchGameText">
      <div>
        <div :class="$style.gameTypeText">{{ gameInfo.gameType }}</div>
        <div>13일전</div>
      </div>
      <div>
        <div>
          <b :class="winTextClassFnc">{{ gameInfo.isWin ? "승리" : "패배" }}</b>
        </div>
        <div>
          {{ String(gameInfo.gameLength).substr(0, 2) }}분
          {{ String(gameInfo.gameLength).substr(2, 4) }}초
        </div>
      </div>
    </div>
    <div>
      <div :class="$style.matchImage">
        <img :src="gameInfo.champion.imageUrl" alt="championImage" />
        <div :class="$style.matchSkillsImage">
          <div>
            <div
              :class="$style.matchSpell"
              v-for="spell in gameInfo.spells"
              :key="spell.index"
            >
              <img :src="spell.imageUrl" alt="spellimage" />
            </div>
          </div>
          <div>
            <div
              :class="$style.matchSpell"
              v-for="peak in gameInfo.peak"
              :key="peak.index"
            >
              <img :src="peak" alt="peakimage" />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.matchNameText"></div>
    </div>
    <div :class="$style.kdaBox">
      <div>
        <h3>
          {{ gameInfo.stats.general.kill }} /
          <span class="red">{{ gameInfo.stats.general.death }}</span> /
          {{ gameInfo.stats.general.assist }}
        </h3>
        <span :class="$style.kdaString">
          <b class="black">{{ gameInfo.stats.general.kdaString }}</b>
          평점
        </span>
        <div :class="$style.msgBox">
          <span
            v-show="gameInfo.stats.general.largestMultiKillString"
            :class="$style.kill"
            >{{ gameInfo.stats.general.largestMultiKillString }}</span
          >
          <span
            v-show="gameInfo.stats.general.opScoreBadge"
            :class="$style.ace"
            >{{ gameInfo.stats.general.opScoreBadge }}</span
          >
        </div>
      </div>
    </div>
    <div :class="$style.matchInfoText">
      <p>레벨 {{ gameInfo.champion.level }}</p>
      <p>
        {{ gameInfo.stats.general.cs }} ({{ gameInfo.stats.general.csPerMin }})
        CS
      </p>
      <p class="red">
        킬관여 {{ gameInfo.stats.general.contributionForKillRate }}
      </p>
      <p>매치 평균</p>
      <p>
        <b>{{ gameInfo.tierRankShort }}</b>
      </p>
    </div>
    <div :class="$style.matchItem">
      <div :class="$style.matchItemBox">
        <img
          v-for="item in gameInfo.items"
          :key="item.index"
          :src="item.imageUrl"
          alt="itemImage"
        />
        <img
          v-for="index in itemNonelength"
          :key="index"
          src="https://opgg-static.akamaized.net/images/pattern/opacity.1.png"
          alt="itemNoneImage"
        />
      </div>
      <div
        v-show="gameInfo.stats.ward.visionWardsBought"
        :class="$style.wardBox"
      >
        <img
          v-show="gameInfo.isWin"
          src="https://opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png"
          alt="wardImage"
        />
        <img
          v-show="!gameInfo.isWin"
          src="https://opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png"
          alt="wardImage"
        />
        <p>제어 와드 {{ gameInfo.stats.ward.visionWardsBought }}</p>
      </div>
    </div>
    <div>
      <div :class="$style.teamBox" v-if="teamData.teams">
        <div>
          <div
            v-for="team in teamData.teams[0].players"
            :key="team.summonerId"
            :class="$style.team"
          >
            <img :src="team.champion.imageUrl" alt="championImage" />
            <span :class="$style.name">
              {{ team.summonerName }}
            </span>
          </div>
        </div>
        <div>
          <div
            v-for="team in teamData.teams[1].players"
            :key="team.summonerId"
            :class="$style.team"
          >
            <img :src="team.champion.imageUrl" alt="championImage" />
            <span :class="$style.name">
              {{ team.summonerName }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gameInfo: {
      type: Object,
    },
  },
  data() {
    return {
      teamData: [],
    };
  },
  computed: {
    winTextClassFnc() {
      return this.gameInfo.isWin ? "blue" : "red";
    },
    winBgClassFnc() {
      return this.gameInfo.isWin ? "blueBg" : "redBg";
    },
    itemNonelength() {
      return 8 - this.gameInfo.items.length;
    },
  },
  async created() {
    const data = {
      summonerName: this.gameInfo.summonerName,
      gameId: this.gameInfo.gameId,
    };
    this.teamData = await this.$store.dispatch("getMatchDetailFnc", data);
  },
};
</script>

<style module>
.matchListItem {
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: flex-start;
}
.matchGameText {
  width: 70px;
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
  padding: 20px 8px;
}
.gameTypeText {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.matchNameText {
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
}
.matchImage {
  display: flex;
  justify-content: flex-start;
  padding-top: 29px;
}
.matchImage > img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin-right: 5px;
}
.matchSkillsImage {
  display: flex;
  justify-content: flex-start;
}
.matchSkillsImage .matchSpell > img {
  width: 22px;
  height: 22px;
  display: inline-block;
}
.kdaBox {
  padding-top: 25px;
  width: 115px;
}
.kdaBox > div {
  text-align: center;
}
.kdaBox > div > h3 {
  color: #555e5e;
  font-size: 15px;
  margin: 0;
}
.kdaString {
  color: #555e5e;
  font-size: 12px;
  display: block;
}
.matchInfoText {
  width: 90px;
  font-size: 11px;
  text-align: center;
  line-height: 18px;
  color: #555e5e;
  padding: 10px;
}
.matchItem {
  padding: 15px;
}
.matchItemBox {
  width: 96px;
  margin: 0 auto;
}
.matchItemBox img {
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  overflow: hidden;
}
.wardBox {
  margin-top: 7px;
  color: #353a3a;
  line-height: 13px;
  font-size: 11px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.wardBox img {
  width: 16px;
  height: 16px;
  margin-right: 3px;
}
.team {
  display: flex;
  justify-content: flex-start;
  width: 80px;
  margin-top: 5px;
}
.team img {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.team .name {
  display: inline-block;
  max-width: 60px;
  vertical-align: middle;
  font-size: 11px;
  color: #555;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.teamBox {
  display: flex;
  justify-content: flex-start;
  padding: 0 10px;
}
.msgBox {
  display: inline-block;
  color: #fff;
  margin: 8px auto 0;
  font-size: 10px;
}
.msgBox .kill {
  display: inline-block;
  background: #ee5a52;
  border: 1px solid #c6443e;
  border-radius: 15px;
  padding: 2px 5px;
  margin-right: 3px;
  line-height: 1;
}
.msgBox .ace {
  display: inline-block;
  border-radius: 9px;
  background-color: #8c51c5;
  border: solid 1px #7f3590;
  padding: 2px 5px;
  line-height: 1;
}
</style>