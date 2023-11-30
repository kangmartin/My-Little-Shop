<script>
    import ProductList from "../components/ProductList.vue";
    import HeaderGuest from "../components/HeaderGuest.vue";
    import Form from "../components/AddProductForm.vue";
    export default {
  components: {
    HeaderGuest,
    ProductList,
    Form
  }
}
</script>
<template>
    
        <HeaderGuest />
        <ProductList />
        <Form />

</template>