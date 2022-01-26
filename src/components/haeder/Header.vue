<template>
  <header :class="$style.header">
    <div :class="$style.headerBox">
      <span :class="$style.headerInput">
        <input
          type="text"
          placeholder="소환사명,챔피언..."
          @click="showPopupFnc()"
          @keyup="hidePopupFnc()"
          @keyup.enter="submitFnc($event.target.value)"
          ref="headerInput"
        />
        <img
          src="//opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
          alt="opgglogo"
          width="30px"
        />
        <div v-show="popupFlag" :class="$style.searchPopup">
          <ul>
            <li :class="$style.active">최근검색</li>
            <li>즐겨찾기</li>
          </ul>
          <div :class="$style.searchPopupItem">
            <div v-show="recentSearchList.length === 0">
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
                  @click="submitFnc(item.name)"
                  >{{ item.name }}</a
                >
                <span>
                  <a
                    :class="$style.recentSearchCloseBtn"
                    href="javascript:void(0);"
                    @click="deleteSearchFnc(index)"
                  ></a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      popupFlag: false,
      recentSearchList: [],
    };
  },
  methods: {
    showPopupFnc() {
      if (!this.userName) {
        this.popupFlag = !this.popupFlag;
        return;
      }
    },
    hidePopupFnc() {
      this.popupFlag = false;
    },
    submitFnc(value) {
      if (!value) return;
      this.$store.dispatch("getSummonerFnc", value);
      this.$refs.headerInput.value = "";
      this.hidePopupFnc();
      this.recentSearchFnc(value);
    },
    recentSearchFnc(value) {
      const getSearchData = localStorage.getItem("recent-search");
      if (!getSearchData) {
        const data = [{ name: value }];
        this.saveRecentSearch(data);
        return;
      }
      const searchData = JSON.parse(getSearchData);
      const searchArrayData = this.overlapSearchData(searchData, value);
      searchArrayData.unshift({ name: value });
      this.saveRecentSearch(searchArrayData);
    },
    createdRecentSearch() {
      const getSearchData = localStorage.getItem("recent-search");
      if (!getSearchData) return;
      const searchData = JSON.parse(getSearchData);
      this.recentSearchList = searchData;
    },
    deleteSearchFnc(index) {
      const getSearchData = localStorage.getItem("recent-search");
      const searchData = JSON.parse(getSearchData);
      searchData.splice(index, 1);
      this.saveRecentSearch(searchData);
    },
    overlapSearchData(arr, value) {
      const searchData = [...arr];
      for (let i = 0; i < searchData.length; i++) {
        if (searchData[i].name === value) {
          searchData.splice(i, 1);
        }
      }
      return searchData;
    },
    saveRecentSearch(value) {
      this.recentSearchList = value;
      localStorage.setItem("recent-search", JSON.stringify(value));
    },
  },
  created() {
    this.createdRecentSearch();
  },
};
</script>

<style module>
.header {
  width: 100%;
  height: 97px;
  background-color: #1ea1f7;
}
.headerBox {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
.headerInput {
  width: 260px;
  height: 32px;
  display: block;
  background-color: #fff;
  border-radius: 1px;
  margin-top: 53px;
  position: relative;
}
.headerInput input[type="text"] {
  border: none;
  width: 80%;
  height: 100%;
  padding: 0 14px;
  font-size: 12px;
  color: #727272;
}
.headerInput input[type="text"]:focus {
  outline: none;
}
.headerInput img {
  position: absolute;
  top: 10px;
  right: 10px;
}
.searchPopup {
  position: absolute;
  width: 100%;
  top: 36px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
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
  position: relative;
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