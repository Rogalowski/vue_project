<script setup>
import {ref} from 'vue'
const msgr = ref("Hello World")
</script>

<template>
  asd
  <HelloWorld  >asd
    <h1  >asdsd{{ msgr }}</h1>
<input v-model="msgr">
  </HelloWorld>
</template>

<style>
 h1 {
    font-size: xx-large;
    color: white;
  }

</style>
