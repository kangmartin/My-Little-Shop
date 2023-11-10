<script setup>
import HeaderGuest from "./components/HeaderGuest.vue";
import Product from "./components/Product.vue";
</script>

<template>
      <HeaderGuest/>


      <Product
      title="Rolex RCV Edition"
      image="./src/assets/images/watch.png"
      :originalPrice="100"
      :currentPrice="50"
      :rating="3"/>
     
 

</template>

<style scoped>
</style>
