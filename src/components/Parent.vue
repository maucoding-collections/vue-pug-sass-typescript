<template>
  <div>
    ini adalah homepage
    <child />
  </div>
</template>
<script>
import Vue from "vue"
import Child from "./Child.vue"

Vue.component("child", Child)

export default {
  name: "home-box" 
}
</script>