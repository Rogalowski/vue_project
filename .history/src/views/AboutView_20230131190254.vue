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


  <div class="about">
    <h1>This is an about page
    {{ msgr }}</h1>
<ul>
  <li v-for="ele in listArray">{ele}</li>
</ul>
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
