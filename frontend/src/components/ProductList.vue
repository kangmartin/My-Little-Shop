<template>

    
    <div class="product-list">
        <Product/>
    </div>

    
</template>

<script>
import Product from "./Product.vue";

export default {
    components: {
        Product,
    },

  }
</script>

<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1%;
    margin: 60px 8%;

}

</style>
