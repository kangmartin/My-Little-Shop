<template>
  <div>
    <HeaderComponent />
    <h2 class="user">Users</h2>
    <div class="form-manage-container">
      <ManageMembers/>
    </div>
    
  </div>
</template>

<script>
  import HeaderComponent from "../components/HeaderComponent.vue";
  import ManageMembers from "../components/ManageMembers.vue";


  export default {
    components: {
      HeaderComponent,
      ManageMembers
    },
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

.user {
 font-size: 1.5rem;
 color: white;
 text-decoration: underline;
 margin-bottom: 20px;
 text-align: center;
}


@media (max-width: 768px) {
  .form-manage-container {
    flex-direction: column;
  }
}
</style>

