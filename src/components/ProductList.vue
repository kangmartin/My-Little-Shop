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
import aghImage from "../assets/images/agh.jpg";
import geldoucheImage from "../assets/images/geldouche.jpg";
import macbookImage from "../assets/images/macbook.jpg";
import manetteImage from "../assets/images/manette.jpg";
import teslaImage from "../assets/images/tesla.webp";
import watchImage from "../assets/images/watch.png";
import villaImage from "../assets/images/villa.jpg";

export default {
    components: {
        Product,
    },
    data() {
        return {
            products: [
                {
                    title: "AGH University Campus",
                    image: aghImage,
                    originalPrice: 2000000,
                    currentPrice: 1500000,
                    rating: 2,
                },
                {
                    title: "Shampooing",
                    image: geldoucheImage,
                    originalPrice: 9.99,
                    currentPrice: 9.99,
                    rating: 2.5,
                },
                {
                    title: "Macbook Pro 16",
                    image: macbookImage,
                    originalPrice: 2500,
                    currentPrice: 1999,
                    rating: 5,
                },
                {
                    title: "PS5 Controller",
                    image: manetteImage,
                    originalPrice: 69.99,
                    currentPrice: 59.99,
                    rating: 1,
                },
                {
                    title: "Tesla Model 3",
                    image: teslaImage,
                    originalPrice: 50000,
                    currentPrice: 40000,
                    rating: 5,
                },
                {
                    title: "Rolex Snow Edition",
                    image: watchImage,
                    originalPrice: 6500,
                    currentPrice: 6500,
                    rating: 5,
                    showAddToCart: false,
                },
                {
                    title: "Villa in the countryside",
                    image: villaImage,
                    originalPrice: 2000000,
                    currentPrice: 1300000,
                    rating: 4,
                },
                {
                    title: "Villa in the countryside",
                    image: villaImage,
                    originalPrice: 2000000,
                    currentPrice: 1300000,
                    rating: 4,
                },
                {
                    title: "Villa in the countryside",
                    image: villaImage,
                    originalPrice: 2000000,
                    currentPrice: 1300000,
                    rating: 4,
                },
                {
                    title: "Villa in the countryside",
                    image: villaImage,
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
