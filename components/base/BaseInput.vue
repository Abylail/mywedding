<template>
  <div class="base-input">

    <input
      class="base-input__input"
      :value="value"
      :placeholder="placeholder"
      @input="inputHandle($event)"
    />

  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  methods: {
    inputHandle(event) {
      this.$emit("input", event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input + .base-input {margin-top: 10px}
.base-input {

  &__input {
    padding: 0 10px;
    height: 40px;
    min-width: 200px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
  }

}
</style>
