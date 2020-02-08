<template lang="pug">
  div
    h1 ini adalah homepage
    ul
      li first
      li second
      li third
    child
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";

Vue.component("child", Child);

export default {
  name: "home-box"
};
</script>

<style lang="sass">
h1
  font-size: 35px
  font-family: arial
</style>