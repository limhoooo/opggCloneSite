<template>
  <div v-show="popupFlag" :class="$style.searchPopup">
    <ul>
      <li :class="$style.active">최근검색</li>
      <li>즐겨찾기</li>
    </ul>
    <div :class="$style.searchPopupItem">
      <div :class="$style.noneText" v-show="recentSearchList.length === 0">
        최근에 본 소환사가 없습니다.
      </div>
      <div v-show="recentSearchList.length !== 0">
        <div
          v-for="(item, index) in recentSearchList"
          :key="item.index"
          :class="$style.recentSearchItem"
        >
          <a
            href="javascript:void(0);"
            :class="$style.recentSearchText"
            @click="emitSubmitFnc(item.name)"
            >{{ item.name }}</a
          >
          <span>
            <a
              :class="$style.recentSearchCloseBtn"
              href="javascript:void(0);"
              @click="emitDeleteSearchFnc(index)"
            ></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recentSearchList: { type: Array },
    popupFlag: { type: Boolean },
  },
  methods: {
    emitSubmitFnc(value) {
      this.$emit("submitFnc", value);
    },
    emitDeleteSearchFnc(index) {
      this.$emit("deleteSearchFnc", index);
    },
  },
};
</script>

<style module>
.searchPopup {
  position: absolute;
  width: 100%;
  top: 36px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
}
.noneText {
  font-size: 14px;
  text-align: center;
  color: #666;
}
.searchPopup ul {
  display: table;
  width: 100%;
  line-height: 40px;
  font-size: 14px;
  background: #e3e3e3;
  color: #9c9c9c;
}
.searchPopup ul li {
  display: table-cell;
  width: 50%;
  text-align: center;
}
.active {
  background: #fff;
  color: #4a4a4a;
}
.searchPopupItem {
  padding: 20px;
}
.recentSearchText {
  color: #666;
  font-size: 12px;
}
.recentSearchItem {
  margin-top: 15px;
  position: relative;
}
.recentSearchItem:first-child {
  margin-top: 0;
}
.recentSearchCloseBtn {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 16px;
  height: 16px;
  background-image: url("https://opgg-static.akamaized.net/images/site/icon-history-delete.png");
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>