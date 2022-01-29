<template>
  <div :class="$style.TierBox">
    <div :class="$style.TierImageBox">
      <img
        :src="leagues.tierRank.imageUrl"
        :class="
          division == 'solo' ? $style.tierImageSolo : $style.tierImageTeam
        "
        alt="tierImage"
      />
    </div>
    <div class="TierTextBox">
      <p :class="$style.divisionText">{{ divisionText }}</p>
      <p :class="division == 'solo' ? $style.tierSolo : $style.tierTeam">
        {{ leagues.tierRank.tier }}
      </p>
      <p :class="$style.winText">
        <b>{{ leagues.tierRank.tierRankPoint }} LP </b>/
        <span>{{ leagues.wins }}W {{ leagues.losses }}L</span>
      </p>
      <p :class="$style.winRate">Win Ratio {{ winRate }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    division: { type: String },
    leagues: { type: Object },
  },
  computed: {
    divisionText() {
      return this.division === "solo" ? "솔로랭크" : "자유 5:5 랭크";
    },
    winRate() {
      return Math.floor(
        (this.leagues.wins / (this.leagues.wins + this.leagues.losses)) * 100
      );
    },
  },
};
</script>

<style module>
.TierBox {
  margin-top: 8px;
  padding: 8px 0;
  color: #879292;
  display: flex;
  justify-self: start;
  border: 1px solid #cdd2d2;
  background-color: #f2f2f2;
}
.TierImageBox {
  width: 120px;
  display: flex;
  align-items: center;
}
.tierImageSolo {
  width: 104px;
  display: block;
  margin: 0 auto;
}

.tierImageTeam {
  width: 64px;
  display: block;
  margin: 0 auto;
}
.divisionText {
  font-size: 11px;
  margin-top: 10px;
}
.tierSolo {
  font-size: 15px;
  font-weight: 900;
  color: #1f8ecd;
  margin-top: 3px;
}
.tierTeam {
  font-size: 13px;
  font-weight: 900;
  color: #1f8ecd;
  margin-top: 3px;
}
.winText {
  font-size: 12px;
  margin-top: 2px;
}
.winRate {
  font-size: 12px;
  color: #879292;
  margin-top: 2px;
}
</style>