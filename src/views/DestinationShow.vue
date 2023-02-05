<script>
// import dataJson from "../data/data.json"
export default  {
    data(){
        return {
            destination: null,
        }
    },
    computed: {
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        // destination(){
        //     return dataJson.destinations.find(destination => destination.id === this.destinationId)
        // }
    },
    methods:{
        async initData(){
        const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
        this.destination = await response.json()
        }
    },
    async created(){
        this.initData()



        //watch is alternetive to rerender the componnets in App.vue <router-view :key="$route.path"></router-view>
        this.$watch(
            () => this.$route.params,this.initData
            // async()=>{ // rerun request response after clikc on other destination
            //code of initData method
            // }
        )
    }
}
</script>

<template>
    <section v-if="destination" class="destination"  >

    Hello Destiantion {{ $route.params.id }}
     <h1>{{ destination.name }}</h1>
     <div class="destination-details">
        <img :src="`/src/assets/images/${destination.image}`" :alt="destination.name" />"
    <p> {{ destination.description }}</p>
    </div>


   </section>

 </template>