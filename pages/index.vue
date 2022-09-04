<template>
  <div class="main-page">

    <first-block/>

    <slide>
      <login-block v-if="!isAuth"/>
    </slide>

    <slide>
      <div class="main-page__for-auth" v-if="isAuth">
        <invites-block/>
        <gallery-block/>
        <date-block/>
        <location-block/>
        <friends-block v-show="isYoung"/>
      </div>
    </slide>

    <footer-block/>
  </div>
</template>

<script>
import FirstBlock from "../components/common/blocks/FirstBlock";
import LoginBlock from "../components/common/blocks/LoginBlock";
import Slide from "../components/transitions/Slide";
import InvitesBlock from "../components/common/blocks/InvitesBlock";
import GalleryBlock from "../components/common/blocks/GalleryBlock";
import FriendsBlock from "../components/common/blocks/FriendsBlock";
import LocationBlock from "../components/common/blocks/LocationBlock";
import DateBlock from "../components/common/blocks/DateBlock";
import {mapGetters} from "vuex";
import FooterBlock from "../components/common/blocks/FooterBlock";
export default {
  name: 'IndexPage',
  components: {
    FooterBlock,
    DateBlock, LocationBlock, FriendsBlock, GalleryBlock, InvitesBlock, Slide, LoginBlock, FirstBlock},
  computed: {
    ...mapGetters({
      isYoung: "auth/getIsYoung",
      isAuth: "auth/getIsAuth",
    }),
  },
  beforeCreate() {
    this.$store.commit("setLang", (this.$route.query?.lang || "ru"));
    const userId = this.$cookies.get("userId");

    if (Number.isInteger(userId)) {
      this.$store.dispatch("auth/loginById",userId)
    }
  }
}
</script>
<style lang="scss">
.main-page {

}
</style>
