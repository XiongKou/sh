<template>
  <div class="akd-header">
    <van-icon
      name="arrow-left"
      @click="toBackUp"
      class="akd-header-icon"
      :class="{ 'akd-header-hidden': hideLeft }"
    />

    <div class="akd-header-center">
      <input
        type="text"
        v-model="value"
        class="akd-center-input"
        @keyup="search"
      />
      <van-icon
        name="cross"
        class="akd-center-icon akd-center-remove"
        v-if="showIcons"
        @click="elimi"
      />
      <van-icon
        name="search"
        class="akd-center-icon akd-center-search"
        v-if="showIcons"
        @click="souSuo"
      />
    </div>

    <div class="akd-header-icon">
      <slot name="right">
        <i class="akd-header-hidden"></i>
      </slot>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showIcons: false,
      value: "",
    };
  },
  props: ["hideLeft"],
  methods: {
    toBackUp() {
      this.$router.back();
    },
    search() {
      if (this.value.length > 0) {
        this.showIcons = true;
      } else {
        this.showIcons = false;
      }
    },
    elimi() {
      this.value = "";
      this.showIcons = false;
    },
    souSuo() {
      this.$emit("enlarge-text", this.value);
    },
  },
};
</script>

<style scoped lang="css">
.akd-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  line-height: 55px;
  background-color: goldenrod;
  text-align: center;
  color: white;
}
.akd-header-icon {
  width: 60px;
  /* 高度继承父级高度，也就是60 */
  height: inherit;
  line-height: inherit;
  /* 不会随着父级flex影响位置 */
  flex: none;
  font-size: 25px;
}
.akd-header-hidden {
  /* 隐藏此元素，但是继续占据位置 */
  visibility: hidden;
}
.akd-header-center {
  /* 自动占满剩余空间 */
  flex: auto;
  height: calc(100% - 17px);
  background-color: white;
  border-radius: 19px;
  overflow: hidden;
  display: flex;
  padding-right: 2px;
}
.akd-center-input {
  border: 0;
  /* 占据剩余空间 */
  flex: auto;
  text-indent: 20px;
  color: black;
}
.akd-center-icon {
  flex: none;
  width: 40px;
  line-height: 38px;
  font-weight: bold;
}
.akd-center-remove {
  color: black;
}
.akd-center-search {
  width: 34px;
  height: 34px;
  margin-top: 2px;
  background: goldenrod;
  border-radius: 50%;
}
</style>