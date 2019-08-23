<template>
    <div class="seat">
        <div class="seat-header">2019-08-01 工位分布图</div>
        <div class="seat-img">
            <img :src="seatUrl">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      seatUrl: require("../../../assets/image/seat.png")
    };
  }
};
</script>

<style lang="scss">
.seat {
  &-header {
  }
  &-img {
    img {
      width: 700px;
      height: 450px;
    }
  }
}
</style>


