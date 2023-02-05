<script>
import dataJson from "../data/data.json"
export default  {
    computed: {
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return dataJson.destinations.find(destination => destination.id === this.destinationId)
        }
    }
}
</script>

<template>
    <section class="destination"  >

    Hello Destiantion {{ $route.params.id }}
     <h1>{{ destination.name }}</h1>
     <div class="destination-details">
        <img :src="`/src/assets/images/${destination.image}`" :alt="destination.name" />"
    <p> {{ destination.description }}</p>
    </div>


   </section>

 </template>