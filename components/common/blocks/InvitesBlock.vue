<template>
  <div class="invites-block">

    <div class="invites-block__card">
      <div class="invites-block__card__flowers"/>

      <div class="invites-block__card__name" v-if="haveSpouse && isMale">{{$content[lang].dear}} <base-name :info="userInfo"/> {{$content[lang].and}} <base-name :info="spouseInfo"/>!</div>
      <div class="invites-block__card__name" v-else-if="haveSpouse && !isMale">{{$content[lang].dear}} <base-name :info="spouseInfo"/> {{$content[lang].and}} <base-name :info="userInfo"/>!</div>
      <div class="invites-block__card__name" v-else-if="isMale">{{$content[lang].dearMale}} <base-name :info="userInfo"/>!</div>
      <div class="invites-block__card__name" v-else>{{$content[lang].dearFemale}} <base-name :info="userInfo"/>!</div>

      <div class="invites-block__card__text">{{ $content[lang].inviteText1 }}</div>
      <div class="invites-block__card__text">{{ $content[lang].inviteText2 }}</div>
      <div class="invites-block__card__text" v-if="weedingAccess">{{ $content[lang].inviteText3 }}</div>
      <div class="invites-block__card__text" v-if="uzatuAccess">{{ $content[lang].inviteText4 }}</div>
      <div class="invites-block__card__text" v-if="onlyWeedingAccess">{{ $content[lang].inviteText5 }}</div>
      <div class="invites-block__card__text" v-if="onlyUzatuAccess">{{ $content[lang].inviteText6 }}</div>
      <div class="invites-block__card__flowers reverse"/>
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import BaseName from "../../base/BaseName";
export default {
  name: "InvitesBlock",
  components: {BaseName},
  computed: {
    ...mapGetters({
      haveSpouse: "auth/getHaveSpouse",
      userInfo: "auth/getUserInfo",
      spouseInfo: "auth/getSpouseInfo",
      isMale: "auth/getIsMale",
      lang: "getLang",
      uzatuAccess: "auth/getAccessUzatu",
      onlyUzatuAccess: "auth/getAccessOnlyUzatu",
      weedingAccess: "auth/getAccessWedding",
      onlyWeedingAccess: "auth/getAccessOnlyWedding",
      bothAccess: "auth/getAccessBoth"
    }),
  },
}
</script>

<style lang="scss" scoped>
.invites-block {
  position: relative;
  height: 100vh;
  background: url("~assets/images/inviteBackground.JPG");
  background-position-y: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 550px;
    width: calc(95% - 40px);
    max-width: 400px;
    margin: 0 auto;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, .5);
    box-shadow: 0px 0px 18px 4px rgba(34, 60, 80, 0.2);

    & > * {padding: 0 10px}

    &__text {
      font-size: 17px;
      text-align: center;
    }

    &__name {
      font-size: 26px;
      text-align: center;
    }

    &__flowers {
      padding: 0;
      height: 70px;
      width: 100%;
      background-image: url("~assets/images/inviteFlowers.png");
      background-size: cover;
      background-position-x: 50%;
      &.reverse {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
