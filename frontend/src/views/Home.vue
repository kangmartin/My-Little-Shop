<script>
    import ProductList from "../components/ProductList.vue";
    import HeaderComponent from "../components/HeaderComponent.vue";
    import SignupForm from "../components/SignupForm.vue";
    import LoginForm from "../components/LoginForm.vue";
    import CartComponent from "../components/CartComponent.vue";
    export default {
  components: {
    HeaderComponent,
    ProductList,
    SignupForm,
    LoginForm,
    CartComponent
  }
}
</script>
<template>
    
        <HeaderComponent />
        <ProductList />

</template>