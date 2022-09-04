export const state = () => ({
  lang: "ru"
})
export const getters = {
  getLang: state => state.lang,
}
export const mutations = {
  setLang(state, lang) {
    state.lang = lang
  }
}
export const actions = {
  // nuxtServerInit({ dispatch }) {
  //   const userId = this.$cookies.get("userId");
  //   if (Number.isInteger(userId)) {
  //     dispatch("auth/loginById", userId, {root: true});
  //   }
  // }
}
