<template>
  <footer class="footer-block">
    <div class="footer-block__text">{{ $content[lang].haveQuestions }}</div>
    <div class="footer-block__text">{{ $content[lang].writeMe }} <strong class="footer-block__phone" @click="goWA()">+7 (705) 670 78 91</strong></div>
  </footer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "FooterBlock",
  computed: {
    ...mapGetters({
      lang: "getLang"
    })
  },
  methods: {
    goWA() {
      window.location = this.$conf.writeMyWA;
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-block {
  border-top: 1px solid #e1e1e1;
  font-size: 14px;
  padding: 20px 5% 10px;

  &__text {
    text-align: center;
    margin-bottom: 20px;
  }

  &__phone {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }

}
</style>
