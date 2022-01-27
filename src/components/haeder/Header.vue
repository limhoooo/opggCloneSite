<template>
  <header :class="$style.header">
    <div :class="$style.headerBox">
      <span :class="$style.headerInput">
        <input
          type="text"
          placeholder="소환사명,챔피언..."
          @click="showPopupFnc()"
          @keyup="hidePopupFnc()"
          v-click-outside="hidePopupFnc"
          @keyup.enter="submitFnc($event.target.value)"
          ref="headerInput"
        />

        <img
          src="//opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
          alt="opgglogo"
          width="30px"
        />
        <SearchPopup
          :popupFlag="popupFlag"
          :recentSearchList="recentSearchList"
          @submitFnc="submitFnc"
          @deleteSearchFnc="deleteSearchFnc"
        />
      </span>
    </div>
  </header>
</template>

<script>
import vClickOutside from "v-click-outside";
import SearchPopup from "./SearchPopup.vue";
export default {
  components: { SearchPopup },
  data() {
    return {
      recentSearchList: [],
      popupFlag: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    // 최근검색 팝업 toggle
    showPopupFnc() {
      if (!this.userName) {
        this.popupFlag = !this.popupFlag;
        return;
      }
    },
    // 최근검샙 팝업 hide
    hidePopupFnc() {
      this.popupFlag = false;
    },
    // 소환사검색 Fnc
    async submitFnc(value) {
      if (!value) return;
      await this.$store.dispatch("getSummonerFnc", value);
      await this.$store.dispatch("getMostInfoFnc", value);
      this.$refs.headerInput.value = "";
      this.hidePopupFnc();
      this.recentSearchFnc(value);
    },
    // 최근검색 Fnc
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
    // 최근검색 초기데이터 Fnc
    createdRecentSearch() {
      const getSearchData = localStorage.getItem("recent-search");
      if (!getSearchData) return;
      const searchData = JSON.parse(getSearchData);
      this.recentSearchList = searchData;
    },
    // 최근검색 삭제 Fnc
    deleteSearchFnc(index) {
      const getSearchData = localStorage.getItem("recent-search");
      const searchData = JSON.parse(getSearchData);
      searchData.splice(index, 1);
      this.saveRecentSearch(searchData);
    },
    // 최근검색 중복제거 Fnc
    overlapSearchData(arr, value) {
      const searchData = [...arr];
      for (let i = 0; i < searchData.length; i++) {
        if (searchData[i].name === value) {
          searchData.splice(i, 1);
        }
      }
      return searchData;
    },
    // 최근검색 저장 Fnc
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
  width: 970px;
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
</style>