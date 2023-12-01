<script>
    import ProductList from "../components/ProductList.vue";
    import HeaderGuest from "../components/HeaderGuest.vue";
    import SignupForm from "../components/SignupForm.vue";
    import LoginForm from "../components/LoginForm.vue";
    export default {
  components: {
    HeaderGuest,
    ProductList,
    SignupForm,
    LoginForm
  }
}
</script>
<template>
    
        <HeaderGuest />
        <ProductList />

</template>