<template>
  <div class="gallery-block">

    <div class="gallery-block__title">{{ $content[lang].gallery }}</div>

    <div class="swiper gallery-block__main">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div
          class="swiper-slide gallery-block__image"
          v-for="picture in gallery" :key="picture.fileName"
          v-lazy:background-image="picture.src"
        />
      </div>
      <!-- pagination -->
<!--      <div class="swiper-pagination"/>-->

      <!-- scrollbar -->
      <div class="swiper-scrollbar"/>

      <!-- navigation buttons -->
      <div class="swiper-button-prev"/>
      <div class="swiper-button-next"/>
    </div>

  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.css';
import {mapGetters} from "vuex";

// Swiper.use([ Navigation, Pagination ]);

export default {
  name: "GalleryBlock",
  data: () => ({
    gallery: []
  }),
  computed: {
    ...mapGetters({
      lang: "getLang"
    })
  },
  methods: {
    getGallery() {
      const images = require.context('@/assets/images/slider', true).keys();
      this.gallery = images.map(url => ({
          fileName: url.replace(".", ""),
          src: require(`@/assets/images/slider${url.replace(".", "")}`)
        })
      );
    },
    initSwiper() {
      new Swiper('.gallery-block__main', {
        // pagination: {
        //   el: '.swiper-pagination',
        // },
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  },
  mounted() {
    this.getGallery();
    // this.initSwiper();
    this.$nextTick(() => {
      this.initSwiper();
    })
  }
}
</script>

<style lang="scss" scoped>
.gallery-block {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  &__title {
    margin: 20px 0;
    font-size: 30px;
    font-weight: bold;
    width: 90%;
  }

  &__main {
    position: relative;
    height: 70vh;
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
  }

  &__image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 50%;
  }
}

.swiper-wrapper {
  height: 70vh;
}
.swiper-button-prev, .swiper-button-next {
  color: green;
}
</style>
