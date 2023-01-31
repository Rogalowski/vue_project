<script setup>
import {ref} from 'vue'
const msgr = ref("Hello World")
</script>

<template>
  <div  >
    <h1  >{{ msgr }}</h1>
<input v-model="msgr">
  </div>
</template>

<style>
 h1 {
    min-height: 100vh;
    display: flex;
    align-items: center;
    color: white;
  }

</style>
