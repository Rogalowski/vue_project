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
const saveItem = (input) => {
  listArray.push(input)
}

<template>
   <div class="about">
<form

@submit.prevent="saveItem"

>

  <div ><input type="text" v-model="inputText">
    <button type="submit"> Save</button>
  </div>
</form>


    <h1>  {{ msgr }} {{ inputText }}</h1>


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
