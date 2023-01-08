<template>
  <div class="akd-header">
    <van-icon
      name="arrow-left"
      @click="toBackUp"
      class="akd-header-icon"
      :class="{ 'akd-header-hidden': hideLeft }"
    />

    <h3 class="akd-header-center">
      <slot name="center"></slot>
    </h3>

    <div class="akd-header-icon">
      <slot name="right">
        <i class="akd-header-hidden"></i>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hideLeft"],
  methods: {
    toBackUp() {
      this.$router.back();
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
  flex: none;
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
  height: inherit;
}
</style>