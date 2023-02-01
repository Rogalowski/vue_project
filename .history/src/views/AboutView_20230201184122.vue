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
const saveItem = (input) => {
  listArray.value.push(input)
  inputText.value = ""

}
const countInput = computed(() =>{
  return inputText.value.length
})
</script>


<template>
   <div class="about">
      <form

      @submit.prevent="saveItem(inputText)"
      >

  <div ><input type="text" v-model="inputText"> <p>{{ countInput }}/100</p>
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
