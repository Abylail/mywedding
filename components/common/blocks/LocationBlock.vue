<template>
  <div class="location-block wrapper">
<!-- wedding -->
    <div v-if="weddingAccess">
      <div class="location-block__title" v-if="bothAccess">{{ $content[lang].restaurantPlaceLabel }}</div>
      <div class="location-block__title" v-else>{{ $content[lang].place }}</div>

      <div class="location-block__info">
        <label>{{ $content[lang].restaurantNameLabel }}:</label>
        <strong>{{ $content[lang].restaurantName }}</strong>
      </div>

      <div class="location-block__info">
        <label>{{ $content[lang].restaurantAddressLabel }}:</label>
        <strong>{{ $content[lang].restaurantAddress }}</strong>
      </div>

      <a class="location-block__open-app" :href="$conf.weddingMapUrl" target="_blank">{{ $content[lang].tapToOpen2Gis }}</a>

      <div id="map" class="location-block__map"/>
    </div>

<!-- uzatu -->
    <div v-if="uzatuAccess">
      <div class="location-block__title" v-if="bothAccess">{{ $content[lang].uzatuRestaurantPlaceLabel }}</div>
      <div class="location-block__title" v-else>{{ $content[lang].place }}</div>

      <div class="location-block__info">
        <label>{{ $content[lang].restaurantNameLabel }}:</label>
        <strong>{{ $content[lang].uzatuRestaurantName }}</strong>
      </div>

      <div class="location-block__info">
        <label>{{ $content[lang].restaurantAddressLabel }}:</label>
        <strong>{{ $content[lang].uzatuRestaurantAddress }}</strong>
      </div>

      <a class="location-block__open-app" :href="$conf.uzatuMapUrl" target="_blank">{{ $content[lang].tapToOpen2Gis }}</a>

      <div id="uzatuMap" class="location-block__map"/>
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DG from "2gis-maps";

export default {
  name: "LocationBlock",
  computed: {
    ...mapGetters({
      lang: "getLang",
      weddingAccess: "auth/getAccessWedding",
      uzatuAccess: "auth/getAccessUzatu",
      bothAccess: "auth/getAccessBoth"
    })
  },
  methods: {
    initWeddingMap() {
      const coordinates = this.$conf.weddingCoordinates;
      const DG = require("2gis-maps");
      // console.log(DG);
      DG.then(function() {
        let map = DG.map('map', {
          center: coordinates,
          zoom: 16
        });
        DG.marker(coordinates).addTo(map).bindPopup('Здесь будет наше торжество!');
      });
    },
    initUzatuMap() {
      const coordinates = this.$conf.uzatuCoordinates;
      const DG = require("2gis-maps");
      // console.log(DG);
      DG.then(function() {
        let map = DG.map('uzatuMap', {
          center: coordinates,
          zoom: 16
        });
        DG.marker(coordinates).addTo(map).bindPopup('Здесь будет наше торжество!');
      });
    },
  },
  mounted() {
    if(this.weddingAccess) this.initWeddingMap();
    if(this.uzatuAccess) this.initUzatuMap();
  }
}
</script>

<style lang="scss" scoped>
.location-block {
  margin: 20px auto;

  &__title {
    margin: 20px 0;
    font-size: 30px;
    font-weight: bold;
  }

  &__info {
    margin-bottom: 10px;
  }

  &__open-app {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    background: rgb(41, 148, 0);
    color: white;
    text-decoration: none;
  }

  &__map {
    margin-top: 30px;
    height: 400px;
    //max-width: 600px;
  }

}
</style>
