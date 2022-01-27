<template>
  <div :class="$style.contentHeader">
    <div :class="$style.contentHeaderBox">
      <div :class="$style.userTierBox">
        <ul v-if="previousTiers">
          <li v-for="tier in previousTiers.slice().reverse()" :key="tier.index">
            <span :class="$style.tierNumber"> S{{ tier.season }} </span>
            <span>
              {{ tier.tierDivision }}
            </span>
          </li>
        </ul>
      </div>

      <div :class="$style.profile" v-show="userInfo">
        <div
          :class="$style.profileImgBox"
          :style="{
            'background-image': 'url(' + userInfo.profileBorderImageUrl + ')',
          }"
        >
          <img
            :class="$style.profileImg"
            :src="userInfo.profileImageUrl"
            alt="userImage"
          />
          <span :class="$style.profileLevel">{{ userInfo.level }}</span>
        </div>

        <div :class="$style.profileTextBox">
          <h1>
            {{ userInfo.name }}
          </h1>
          <p>
            Ladder Rank <b>{{ ladderRank.rank | makeComma }}</b> (
            {{ ladderRank.rankPercentOfTop }}% of top)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo || [];
    },
    ladderRank() {
      return this.$store.state.ladderRank || [];
    },
    previousTiers() {
      return this.$store.state.previousTiers || [];
    },
  },
};
</script>

<style module>
.contentHeader {
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 20px;
}
.contentHeaderBox {
  width: 970px;
  margin: 0 auto;
}
.userTierBox ul {
  margin-top: 15px;
  display: flex;
  justify-self: start;
}
.userTierBox ul li {
  height: 20px;
  color: #657070;
  background-color: #e0e3e3;
  border: 1px solid #d0d3d4;
  font-size: 11px;
  padding: 2px;
  box-sizing: border-box;
  margin-right: 7px;
}
.userTierBox ul li:last-child {
  margin-right: 0;
}
.tierNumber {
  font-weight: 700;
}

.profile {
  display: flex;
  justify-self: start;
}
.profileImgBox {
  width: 120px;
  height: 120px;
  margin-top: 15px;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}
.profileImg {
  width: 100px;
  position: absolute;
  top: 10px;
  left: 10px;
}

.profileLevel {
  width: 44px;
  height: 24px;
  background-image: url("https://opgg-static.akamaized.net/images/site/summoner/bg-levelbox.png");
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
  bottom: -4px;
  left: 38px;
  color: #eabd56;
  text-align: center;
  font-size: 14px;
  padding-top: 2px;
  box-sizing: border-box;
}
.profileTextBox {
  margin: 20px 0 0 20px;
}
.profileTextBox h1 {
  margin: 0;
  color: #242929;
  font-size: 20px;
}
.profileTextBox p {
  margin-top: 5px;
  color: #657070;
  font-size: 11px;
}
</style>