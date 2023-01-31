<script setup>
import {ref} from 'vue'
const msgr = ref("Hello, Here is List")
const listArray = ref([
  "1 One",
  "2 Two",
  "3 Three",
  "4 Four",
])
</script>


<template>

<div><input v-model="msgr"></div>
  <div class="about">
    <h1>  {{ msgr }}</h1>


  </div>

<ul>
  <li v-for="ele in listArray" v-bind:key="ele">{{ele}}</li>
</ul>





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
