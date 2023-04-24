<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div style="padding-top: 40px">
    <ul>
      <li><RouterLink to="/first-app">01. first-app</RouterLink></li>
      <li><RouterLink to="/graphics">02. graphics</RouterLink></li>
      <li><RouterLink to="/shape">03. shape</RouterLink></li>
      <li><RouterLink to="/sprite">04. sprite</RouterLink></li>
      <li><RouterLink to="/events">05. events</RouterLink></li>
      <li><RouterLink to="/load-resource">06. load-resource</RouterLink></li>
      <li><RouterLink to="/mask">07. mask</RouterLink></li>
      <li><RouterLink to="/filter">08. filter</RouterLink></li>
      <li><RouterLink to="/example1">09. example1</RouterLink></li>
      <li><RouterLink to="/example2">10. example2</RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
li {
  padding: 10px 0;
}
</style>
