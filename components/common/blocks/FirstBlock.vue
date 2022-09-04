<template>
  <div class="first-block">
    <div class="first-block__title-wrapper">
      <div class="first-block__title">{{ $conf.mainLabel }}</div>
      <div class="first-block__sub-title">{{ $content[lang].label }}</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "FirstBlock",
  computed: {
    ...mapGetters({
      lang: "getLang"
    })
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap');
.first-block {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url("~/assets/images/first.JPG");
  background-size: cover;
  background-position-x: 70%;
  background-position-y: 50%;
  box-shadow: 0 100vh 50px 20px rgba(34, 60, 80, 0.4) inset;

  &__title-wrapper {
    position: absolute;
    top: 21%;
    right: 10%;
  }

  &__title {
    font-family: 'Ms Madi', cursive;
    color: white;
    font-size: 40px;
  }

  &__sub-title {
    //text-align: center;
    color: white;
    font-size: 16px;
  }
}
</style>
