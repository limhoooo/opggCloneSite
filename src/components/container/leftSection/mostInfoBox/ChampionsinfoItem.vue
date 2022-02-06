<template>
  <div :class="$style.mostinfoListItemBox">
    <img
      :class="$style.mostinfoImage"
      :src="champions.imageUrl"
      alt="championsImage"
    />
    <div :class="$style.mostinfoTextBox">
      <h3 :class="$style.championsName">{{ champions.name }}</h3>
      <span> CS {{ champions.cs }} </span>
    </div>
    <div
      :class="`
            ${$style.mostinfoTextBox} ${$style.textCenter} ${$style.mostinfoKdaBox}`"
    >
      <h3
        :class="
          kdaColor(kda(champions.kills, champions.assists, champions.deaths))
        "
      >
        {{ kda(champions.kills, champions.assists, champions.deaths) }}:1 평점
      </h3>
      <span>
        {{ killsAvg(champions.kills, champions.games) }} /
        {{ assistsAvg(champions.assists, champions.games) }} /
        {{ deathsAvg(champions.deaths, champions.games) }}
      </span>
    </div>
    <div :class="`${$style.mostinfoTextBox} ${$style.textCenter}`">
      <h3 :class="{ red: winsAvg(champions.wins, champions.games) >= 60 }">
        {{ winsAvg(champions.wins, champions.games) }}%
      </h3>
      <span> {{ champions.games }}게임 </span>
    </div>
  </div>
</template>

<script>
import calculateMixin from "../../../../common/calculateMixin.js";
export default {
  props: {
    champions: { type: Object },
  },
  mixins: [calculateMixin],
};
</script>

<style module>
.mostinfoListItemBox {
  display: flex;
  justify-content: flex-start;
  padding: 5px 0 5px 15px;
  border: 1px solid #cdd2d2;
  border-top: none;
  background-color: #ededed;
}
.mostinfoImage {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
}
.mostinfoTextBox {
  margin-top: 5px;
}
.mostinfoTextBox:last-child {
  margin-right: 0;
}
.mostinfoTextBox h3 {
  font-size: 13px;
  font-weight: 900;
  color: #5e5e5e;
  margin: 0;
}
.mostinfoTextBox span {
  font-size: 11px;
  color: #879292;
}
.textCenter {
  text-align: center;
}
.championsName {
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mostinfoKdaBox {
  width: 90px;
  margin-right: 5px;
}
</style>