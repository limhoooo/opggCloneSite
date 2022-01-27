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
      <h3 :class="kdaColor()">{{ kda }}:1 KDA</h3>
      <span>
        {{ killsAvg }} / {{ assistsAvg }} /
        {{ deathsAvg }}
      </span>
    </div>
    <div :class="`${$style.mostinfoTextBox} ${$style.textCenter}`">
      <h3>{{ winsAvg }}%</h3>
      <span> {{ champions.games }} Played </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    champions: { type: Object },
  },
  computed: {
    kda() {
      return (
        Math.floor(
          ((this.champions.kills + this.champions.assists) /
            this.champions.deaths) *
            100
        ) / 100
      );
    },
    killsAvg() {
      return (
        Math.floor((this.champions.kills / this.champions.games) * 10) / 10
      );
    },
    assistsAvg() {
      return (
        Math.floor((this.champions.assists / this.champions.games) * 10) / 10
      );
    },
    deathsAvg() {
      return (
        Math.floor((this.champions.deaths / this.champions.games) * 10) / 10
      );
    },
    winsAvg() {
      return Math.floor((this.champions.wins / this.champions.games) * 100);
    },
  },
  methods: {
    kdaColor() {
      const kdaNumber = this.kda;
      if (Math.floor(kdaNumber) === 3) {
        return "green";
      } else if (Math.floor(kdaNumber) === 4) {
        return "blue";
      } else if (Math.floor(kdaNumber) >= 5) {
        return "orange";
      }
    },
  },
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
  margin-right: 5px;
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
  width: 88px;
}
</style>