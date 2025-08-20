<script>
import ProductListTable from "../components/ProductListTable.vue";
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
  name: 'ProductsListView',
  components: {
    HeaderComponent,
    ProductListTable,
  }
}
</script>

<template>
  <HeaderComponent />
  <div class="products-list-view">
    <h1 class="page-title">Products List</h1>
    <ProductListTable />
  </div>
</template>

<style scoped>
.products-list-view {
  min-height: calc(100vh - 100px);
}

.page-title {
  text-align: center;
  color: white;
  font-size: 2.5em;
  margin: 30px 0;
  font-weight: bold;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2em;
    margin: 20px 0;
  }
}
</style>