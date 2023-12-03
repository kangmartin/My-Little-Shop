<template>
    <div>
      <HeaderComponent />
      <div class="form-manage-container">
        <AddProductForm @product-added="handleProductAdded" />
        <ManageProducts ref="manageProductsComponent" />
     
      </div>
    </div>
  </template>
  
  <script>
    import HeaderComponent from "../components/HeaderComponent.vue";
    import AddProductForm from "../components/AddProductForm.vue";
    import ManageProducts from "../components/ManageProducts.vue";
  
  
    export default {
      components: {
        HeaderComponent,
        AddProductForm,
        ManageProducts,
  
      },
      methods: {
      handleProductAdded() {
        this.$refs.manageProductsComponent.fetchProducts();
      }
    }
    }
  </script>
  
  <style>
    .form-manage-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 30px;
    }
  
    @media (max-width: 768px) {
      .form-manage-container {
        flex-direction: column;
      }
    }
  </style>
  