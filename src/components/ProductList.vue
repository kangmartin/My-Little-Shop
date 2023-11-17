
<template>
    <div class="container">
    <div class="product-list">
        <div v-for="product in products" :key="product.id">
            <product :title="product.title" :image="product.image" :originalPrice="product.originalPrice" :currentPrice="product.currentPrice" :rating="product.rating" :showAddToCart="product.showAddToCart"  />
        </div>
    </div>
    </div>
</template>

<script>
import Product from "./Product.vue";

export default {
    components: {
        Product,
    },
    data() {
        return {
            products: [
                {
                    title: "AGH University Campus",
                    image: "./src/assets/images/agh.jpg",
                    originalPrice: 2000000,
                    currentPrice: 1500000,
                    rating: 2,
                },
                {
                    title: "Shampooing",
                    image: "./src/assets/images/geldouche.jpg",
                    originalPrice: 9.99,
                    currentPrice: 9.99,
                    rating: 2.5,
                },
                {
                    title: "Macbook Pro 16",
                    image: "./src/assets/images/macbook.jpg",
                    originalPrice: 2500,
                    currentPrice: 1999,
                    rating: 5,
                },
                {
                    title: "PS5 Controller",
                    image: "./src/assets/images/manette.jpg",
                    originalPrice: 69.99,
                    currentPrice: 59.99,
                    rating: 1,
                },
                {
                    title: "Tesla Model 3",
                    image: "./src/assets/images/tesla.webp",
                    originalPrice: 50000,
                    currentPrice: 40000,
                    rating: 5,
                },
                {
                    title: "Rolex Snow Edition",
                    image: "./src/assets/images/watch.png",
                    originalPrice: 6500,
                    currentPrice: 6500,
                    rating: 5,
                    showAddToCart: false,
                },
                {
                    title: "Villa in the countryside",
                    image: "./src/assets/images/villa.jpg",
                    originalPrice: 2000000,
                    currentPrice: 1300000,
                    rating: 4,
                },
                {
                    title: "Villa in the countryside",
                    image: "./src/assets/images/villa.jpg",
                    originalPrice: 2000000,
                    currentPrice: 1300000,
                    rating: 4,
                },
                {
                    title: "Villa in the countryside",
                    image: "./src/assets/images/villa.jpg",
                    originalPrice: 2000000,
                    currentPrice: 1300000,
                    rating: 4,
                },
                {
                    title: "Villa in the countryside",
                    image: "./src/assets/images/villa.jpg",
                    originalPrice: 2000000,
                    currentPrice: 1300000,
                    rating: 4,
                },
                
            ],
        };
    },
};
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
