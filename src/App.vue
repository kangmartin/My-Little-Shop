<script setup>
import HeaderGuest from "./components/HeaderGuest.vue";
import Product from "./components/Product.vue";
</script>

<template>
  <HeaderGuest/>


     <Product
      title="Rolex RCV Edition"
      image="./src/assets/images/watch.png"
      :originalPrice="85000"
      :currentPrice="60000"
      :rating="5"/>
 

</template>

<style scoped>
</style>
