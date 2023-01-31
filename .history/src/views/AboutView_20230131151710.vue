<script>
import HelloWorld from '../components/MyView/HelloWorld.vue'
</script>


<template>
  <main>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld />
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
