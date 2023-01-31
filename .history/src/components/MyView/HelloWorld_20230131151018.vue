<script setup>
import {ref} from 'vue'
const msg = ref("Hello World")
</script>

<template>
  <div  >
    <h1  >{{ msg }}</h1>
<input v-model="msg">
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

</style>
