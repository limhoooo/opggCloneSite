<template>
  <div :class="$style.matchListItem">
    <div :class="$style.matchGameText">
      <div>
        <div>솔랭</div>
        <div>13일전</div>
      </div>
      <div>
        <div>패배</div>
        <div>28분 32초</div>
      </div>
    </div>
    <div>
      <div :class="$style.matchImage">
        <img
          src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
          alt=""
        />
        <div :class="$style.matchSkillsImage">
          <div>
            <img
              src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
              alt=""
            />
            <img
              src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
              alt=""
            />
            <img
              src="https://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=q_auto&v=1591083841"
              alt=""
            />
          </div>
        </div>
      </div>
      <div :class="$style.matchNameText">리븐</div>
    </div>
    <div :class="$style.kdaBox">
      <div>
        <h3>2 / 7 / 1</h3>
        <span>0.42:1 평점</span>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {};
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
}
.matchSkillsImage > div > img {
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
</style>