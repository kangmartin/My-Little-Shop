<script setup>

</script>

<template>
  <div class="container">
    <a class="text-header" href="/">Home</a>
    <div class="right-container">
      <a class="text-header" href="register.html">Register</a>
      <div style="margin-left: 30px;"></div>
      <a class="text-header" href="login.html">Login</a>
    </div>
  </div>
</template>

<style scoped>

  .text-header {
    font-size: 25px;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  .text-header:hover {
    color: #1a73e8;
    text-decoration: underline;
  
  }
  .container{
    display: flex;
    justify-content: space-between;
    background-color: gray;
    padding: 10px;
    border: #1a73e8 2px solid;
  }
  .right-container {
    display: flex;
  }
</style>
