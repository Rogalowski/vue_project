<script setup>
import {ref} from 'vue'
const msgr = ref("Hello World ")
</script>


<template>


  <div class="about">
    <h1>This is an about page</h1>
    <h1  > {{ msgr }}</h1>
 </div>
 <input v-model="msgr">


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
