<template>
  <div :class="$style.matchListItem">
    <div :class="$style.matchGameText">
      <div>
        <div>{{ gameInfo.gameType }}</div>
        <div>13일전</div>
      </div>
      <div>
        <div>{{ gameInfo.isWin ? "승리" : "패배" }}</div>
        <div>28분 32초</div>
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
      <div :class="$style.matchNameText">리븐</div>
    </div>
    <div :class="$style.kdaBox">
      <div>
        <h3>
          {{ gameInfo.stats.general.kill }} /
          <span class="red">{{ gameInfo.stats.general.death }}</span> /
          {{ gameInfo.stats.general.assist }}
        </h3>
        <span>
          <b class="black">{{ gameInfo.stats.general.kdaString }}</b>
          평점
        </span>
      </div>
    </div>
    <div :class="$style.matchInfoText">
      <p>레벨14</p>
      <p>160 (5.6) CS</p>
      <p>킬관여 30%</p>
      <p>매치 평균</p>
      <p>Gold 3</p>
    </div>
    <div>
      <div :class="$style.matchItemBox">
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
      </div>
      <div :class="$style.wardBox">
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
        <p>제어 와드 3</p>
      </div>
    </div>
    <div>
      <div :class="$style.teamBox">
        <div :class="$style.team">
          <img
            src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
            alt=""
          />
          <span :class="$style.name">dssdsdsd</span>
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
};
</script>

<style module>
.matchListItem {
  width: 100%;
  background-color: #e2b6b3;
  border-color: #cea7a7;
  display: flex;
  justify-content: flex-start;
}
.matchGameText {
  width: 70px;
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
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
}
.matchImage > img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
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
  display: flex;
  align-items: center;
}
.kdaBox > div {
  text-align: center;
}
.kdaBox > div > h3 {
  color: #555e5e;
  font-size: 15px;
  margin: 0;
}
.kdaBox > div > span {
  color: #555e5e;
  font-size: 12px;
}
.matchInfoText {
  width: 90px;
  font-size: 11px;
  text-align: center;
  line-height: 18px;
  color: #555e5e;
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
}
.team {
  display: flex;
  justify-content: flex-start;
}
.team img {
  width: 12px;
  height: 12px;
}
.team .name {
  display: inline-block;
  max-width: 60px;
  vertical-align: middle;
  font-size: 11px;
  color: #555;
}
</style>