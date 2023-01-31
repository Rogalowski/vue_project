<script setup>
import {ref} from 'vue'
const msgr = ref("Hello World ")
</script>


<template>


  <div class="about">
    <h1>This is an about page
    {{ msgr }}</h1>

    <input v-model="msgr">
 </div>



</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
