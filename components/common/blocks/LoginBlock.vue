<template>
  <div class="login-block">
    <div class="login-block__langs">
      <div class="login-block__lang" @click="selectLang('ru')">Рус</div>
      <div class="login-block__lang" @click="selectLang('kz')">Қаз</div>
    </div>
    <div class="login-block__main" @keyup.enter="loginHandle()">
      <div class="login-block__title">{{ $content[lang].enter }}</div>
      <div class="login-block__inputs">
        <base-input v-model="form.surname" :placeholder="$content[lang].surname"/>
        <base-input v-model="form.name" :placeholder="$content[lang].name"/>
      </div>
      <div class="login-block__error" v-if="error">{{ error }}</div>
      <button class="login-block__submit" @click="loginHandle()">{{ $content[lang].enterButton }}</button>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../base/BaseInput";
import Slide from "../../transitions/Slide";
import {mapGetters} from "vuex";
export default {
  name: "LoginBlock",
  components: {Slide, BaseInput},
  data: () => ({
    error: "",
    form: {
      name: "",
      surname: ""
    }
  }),
  computed: {
    ...mapGetters({
      lang: "getLang"
    })
  },
  methods: {
    loginHandle() {
      this.error = "";
      this.$nextTick(() => {
        if (this.form.surname && this.form.name) {
          this.$store.dispatch("auth/login", this.form);
          if (!this.$store.getters["auth/getIsAuth"]) {
            this.error = this.$content[this.lang].validateError;
          }
        }
      })
    },
    selectLang(lang) {
      if (this.lang === lang) return;
      this.$router.push({query: {lang}});
      this.$store.commit("setLang", lang);
    }
  }
}
</script>

<style lang="scss" scoped>
.login-block {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(52,10,11,0.15);

  &__title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  &__error {
    max-width: 220px;
    padding-top: 10px;
    color: red;
    font-size: 16px;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  }

  &__submit {
    margin-top: 20px;
    width: 100%;
    background: rgba(52,14,45,0.53);
    font-size: 16px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: none;
    transition: .15s;
    &:hover {
      opacity: .8;
    }
  }

  &__langs {
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
  }

  &__lang {
    margin-left: 20px;
    color: #00009a;
  }
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
