<script setup>
import {ref} from 'vue'
const msgr = ref("Hello World")
</script>


<template>
  asd

    <h1  >asdsd{{ msgr }}</h1>
<input v-model="msgr">

  <main>
  <div class="about">
    <h1>This is an about page</h1>

  </div>
</main>
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
