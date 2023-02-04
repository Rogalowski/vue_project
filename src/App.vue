<script>
import dataJson from "./data/data.json"
export default ({
    data() {

    return{
        destiantionRouter: dataJson.destinations
      }
}
})
</script>




<template>

    <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div id="nav" class="wrapper">




        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/myview">MyView</router-link>
        <router-link
        v-for="destination in destiantionRouter"
        :key="destination.id"
        :to="destination.slug"
        >
        <h2>{{ destination.name}}</h2>
        <img :src="`src/assets/images/${destination.image}`" alt="destination.name">
        </router-link>

    </div>
  </header>
  <div class="container" >
        <router-view/>
    </div>
</template>



<style scoped>


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
