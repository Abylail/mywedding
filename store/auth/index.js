import guests from "../../config/guests";

export const state = () => ({
  isAuth: false,
  userInfo: {},
  spouseInfo: null
})

export const getters = {
  getIsAuth: state => state.isAuth,
  getUserInfo: state => state.userInfo,
  getSpouseInfo: state => state.spouseInfo,
  getHaveSpouse: state => !!state.spouseInfo,
  getIsMale: state => state.userInfo.sex.toUpperCase() === "M",
  getIsYoung: state => state.userInfo.isYoung,
  getIsFullName: state => state.fullName,

  getAccessUzatu: state => !!state.userInfo.uzatu,
  getAccessOnlyUzatu: state => !!state.userInfo.uzatu && !state.userInfo.wedding,

  getAccessWedding: state => !!state.userInfo.wedding,
  getAccessOnlyWedding: state => !!state.userInfo.wedding && !state.userInfo.uzatu,

  getAccessBoth: state => !!state.userInfo.uzatu && !!state.userInfo.wedding,
}

export const mutations = {
  set(state, [namespace, value]) {
    state[namespace] = value;
  }
}

export const actions = {
  login({ commit, dispatch }, {name, surname}) {
    const index = guests.findIndex(guest => guest.name.toUpperCase() === name.replace(/\s/g, "").toUpperCase() && guest.surname.toUpperCase() === surname.replace(/\s/g, "").toUpperCase());
    if (index > -1) {
      commit("set", ["isAuth", true]);
      commit("set", ["userInfo", guests[index]]);
      if (guests[index].spouse) dispatch("getSpouseInfo", guests[index].spouse);
      this.$cookies.set("userId", guests[index].id);
    }
    // commit("set", ["isAuth", true]);
    // commit("set", ["userInfo", {name, surname, kyzUzaty: true, weeding: true}])
  },
  loginById({ commit, dispatch }, id) {
    const index = guests.findIndex(user => +user.id === +id);
    if (index > -1 && guests[index]) {
      commit("set", ["isAuth", true]);
      commit("set", ["userInfo", guests[index]]);
      if (guests[index].spouse) dispatch("getSpouseInfo", guests[index].spouse);
    }
    else {
      this.$cookies.remove("userId");
    }
  },
  getSpouseInfo({ commit }, id) {
    const index = guests.findIndex(user => +user.id === +id);
    if (index > -1 && guests[index]) {
      commit("set", ["spouseInfo", guests[index]]);
    }
  }
}
