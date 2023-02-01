<script setup>
import {ref} from 'vue'
const msgr = ref("Hello, Here is List")
const listArray = ref([
  "1 One",
  "2 Two",
  "3 Three",
  "4 Four",
])
const inputText = ref("")
</script>


<template>

<div class="about"><input type="text" v-model.trim="inputText">
  <div class="about">
    <h1>  {{ msgr }} {{ inputText }}</h1>
  </div>

    <ul>
  <li v-for="ele in listArray" :key="ele">{{ele}}</li>
</ul>
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
