<template>
  <span class="base-name">{{ info.name }} <span v-if="info.fullName">{{ info.patronymic }}</span></span>
</template>

<script>
export default {
  name: "BaseName",
  props: {
    info: {
      type: Object,
    }
  }
}
</script>

<style scoped>

</style>
