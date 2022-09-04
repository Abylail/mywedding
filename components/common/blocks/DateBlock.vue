<template>
  <div class="date-block wrapper">
    <div class="date-block__title">{{ $content[lang].datesWedding }}</div>

    <!-- Свадьбы -->
    <div class="date-block__wrapper" v-if="weddingAccess">
      <div class="date-block__sub-title" v-if="bothAccess">{{ $content[lang].weddingDateLabel }}</div>
      <div class="date-block__date">{{ $content[lang].weddingDate }}</div>
      <div class="date-block__countdown" v-if="countdown">
        <div class="date-block__countdown-item">
          <label class="date-block__countdown-item-label">{{ $content[lang].daysLeft }}</label>
          <div class="date-block__countdown-item-value">{{ days }}</div>
        </div>
        <div class="date-block__countdown-item">
          <label class="date-block__countdown-item-label">{{ $content[lang].hoursLeft }}</label>
          <div class="date-block__countdown-item-value">{{ hours }}</div>
        </div>
        <div class="date-block__countdown-item">
          <label class="date-block__countdown-item-label">{{ $content[lang].minutesLeft }}</label>
          <div class="date-block__countdown-item-value">{{ minutes }}</div>
        </div>
        <div class="date-block__countdown-item">
          <label class="date-block__countdown-item-label">{{ $content[lang].secondsLeft }}</label>
          <div class="date-block__countdown-item-value">{{ seconds }}</div>
        </div>
      </div>
    </div>

    <!-- Узату -->
    <div class="date-block__wrapper" v-if="uzatuAccess">
      <div class="date-block__sub-title" v-if="bothAccess">{{ $content[lang].uzatuDateLabel }}</div>
      <div class="date-block__date uzatu">{{ $content[lang].uzatuDate }}</div>
      <div class="date-block__countdown" v-if="countdownUzatu">
        <div class="date-block__countdown-item uzatu">
          <label class="date-block__countdown-item-label">{{ $content[lang].daysLeft }}</label>
          <div class="date-block__countdown-item-value">{{ daysUzatu }}</div>
        </div>
        <div class="date-block__countdown-item uzatu">
          <label class="date-block__countdown-item-label">{{ $content[lang].hoursLeft }}</label>
          <div class="date-block__countdown-item-value">{{ hoursUzatu }}</div>
        </div>
        <div class="date-block__countdown-item uzatu">
          <label class="date-block__countdown-item-label">{{ $content[lang].minutesLeft }}</label>
          <div class="date-block__countdown-item-value">{{ minutesUzatu }}</div>
        </div>
        <div class="date-block__countdown-item uzatu">
          <label class="date-block__countdown-item-label">{{ $content[lang].secondsLeft }}</label>
          <div class="date-block__countdown-item-value">{{ secondsUzatu }}</div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {mapGetters} from "vuex";
import appConfig from "../../../config/appConfig";

const weddingDate = new Date(appConfig.weddingDate).getTime();
const uzatuDate = new Date(appConfig.uzatuDate).getTime();
export default {
  name: "DateBlock",
  data: () => ({
    countdown: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    countdownUzatu: null,
    daysUzatu: 0,
    hoursUzatu: 0,
    minutesUzatu: 0,
    secondsUzatu: 0,
  }),
  computed: {
    ...mapGetters({
      lang: "getLang",
      uzatuAccess: "auth/getAccessUzatu",
      weddingAccess: "auth/getAccessWedding",
      bothAccess: "auth/getAccessBoth"
    })
  },
  methods: {
    calculateCountdown() {
      this.countdown = weddingDate - new Date().getTime();
      this.days = Math.floor(this.countdown / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.countdown % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.countdown % (1000 * 60)) / 1000);
      this.countdownUzatu = uzatuDate - new Date().getTime();
      this.daysUzatu = Math.floor(this.countdownUzatu / (1000 * 60 * 60 * 24));
      this.hoursUzatu = Math.floor((this.countdownUzatu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutesUzatu = Math.floor((this.countdownUzatu % (1000 * 60 * 60)) / (1000 * 60));
      this.secondsUzatu = Math.floor((this.countdownUzatu % (1000 * 60)) / 1000);
      setTimeout(() => this.calculateCountdown(), 1000);
    }
  },
  mounted() {
    this.calculateCountdown();
  }
}
</script>

<style lang="scss" scoped>
.date-block {
  margin: 20px auto;

  &__title {
    margin: 20px 0;
    font-size: 30px;
    font-weight: bold;
  }

  &__sub-title {
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
    @media (min-width: 1000px) {
      display: none;
    }
  }

  &__info {
    margin-bottom: 10px;
  }

  &__wrapper {
    @media (min-width: 1000px) {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-column-gap: 30px;
      &>* {
        margin: 0 !important;
      }
    }
  }

  &__date {
    background: rgba(52,10,11,0.15);
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
    background-image: url("~/assets/images/inviteFlowers.png");
    background-size: cover;
    background-position-x: 50%;
    &.uzatu {
      background-image: url("~assets/images/inviteFlowersUzatu.PNG");
    }
  }

  &__countdown {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__countdown-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 17%;
    padding: 5px 10px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(52,10,11,0.15);
      z-index: -1;
      background-image: url("~/assets/images/inviteFlowers.png");
      background-size: cover;
      background-position-x: 50%;
      @media (max-width: 1000px) {
        transform: rotate(180deg);
      }
    }
    &.uzatu {
      &:before {
        background-image: url("~assets/images/inviteFlowersUzatu.PNG");
      }
    }
  }

  &__countdown-item-value {
    font-size: 40px;
    font-weight: bolder;
  }
}
</style>
