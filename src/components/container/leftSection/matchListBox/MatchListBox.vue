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
        <div :class="$style.matchListGraphBox1">
          <p :class="$style.topText">20G 11W 9L</p>
          <div :class="$style.boxContent">
            <div :class="$style.chartBox">
              <div :class="$style.pieChart">
                <span :class="$style.center">80%</span>
              </div>
            </div>
            <div :class="$style.kdaText">
              <p>25.9 / 15.8 / 14.1</p>
              <p>3.45:1 (58%)</p>
            </div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.kdaText p:first-child {
  font-size: 11px;
  color: #333333;
}
.kdaText p:last-child {
  font-size: 16px;
  color: #333333;
}
.chartBox {
  padding-left: 24px;
}
.pieChart {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
  background: conic-gradient(#ee5a52 0% 20%, #1f8ecd 0% 0%);
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
</style>