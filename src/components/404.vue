<template>
    <div class="notfound">
        <span class="notfound-btns">
            <span class="blue" @click="tohome">首页</span>
            <span class="blue" @click="toPrev">上一页</span>
        </span>
    </div>
</template>

<script>
export default {
  methods: {
    tohome() {
      this.$router.push("/enter");
    },
    toPrev() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.notfound {
  width: 100%;
  height: 100%;
  background-image: url("../assets/image/404.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-btns {
    margin-top: 30%;
    .blue {
      margin: 10px;
      cursor: pointer;
    }
  }
}
</style>

