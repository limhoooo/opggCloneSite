<template>
  <div :class="$style.recentWinRateBox">
    <img
      :class="$style.recentWinRateImage"
      :src="recentWinRateItem.imageUrl"
      alt="championsImage"
    />
    <div :class="$style.recentWinRateTextBox">
      <h3 :class="$style.recentWinRateName">{{ recentWinRateItem.name }}</h3>
    </div>
    <div :class="$style.winRatio">{{ winRate }}%</div>
    <div :class="$style.graphBox">
      <div :class="$style.graph">
        <span :class="$style.winGraph" :style="{ width: `${winRate}%` }"></span>
        <span :class="$style.winText">{{ recentWinRateItem.wins }}승</span>
        <span :class="$style.loseText">{{ recentWinRateItem.losses }}패</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recentWinRateItem: { type: Object },
  },
  computed: {
    winRate() {
      return Math.floor(
        (this.recentWinRateItem.wins /
          (this.recentWinRateItem.wins + this.recentWinRateItem.losses)) *
          100
      );
    },
  },
};
</script>

<style module>
.recentWinRateBox {
  display: flex;
  justify-content: flex-start;
  padding: 5px 0 5px 15px;
  border: 1px solid #cdd2d2;
  border-top: none;
  background-color: #ededed;
}
.recentWinRateImage {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
}
.recentWinRateTextBox {
  display: flex;
  align-items: center;
}
.recentWinRateTextBox h3 {
  font-size: 13px;
  font-weight: 900;
  color: #5e5e5e;
  margin: 0;
}
.recentWinRateName {
  width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.winRatio {
  color: #879292;
  text-align: center;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 35px;
}
.graphBox {
  display: flex;
  align-items: center;
}
.graph {
  width: 130px;
  height: 20px;
  border-radius: 3px;
  background: #ee5a52;
  position: relative;
}
.graph .winGraph {
  height: 100%;
  background: #3d95e5;
  display: block;
  position: absolute;
}

.graph .winText {
  position: absolute;
  font-size: 11px;
  color: #f2f2f2;
  line-height: 22px;
  padding-left: 5px;
}
.graph .loseText {
  position: absolute;
  right: 0;
  padding-right: 5px;
  font-size: 11px;
  color: #f2f2f2;
  line-height: 22px;
}
</style>