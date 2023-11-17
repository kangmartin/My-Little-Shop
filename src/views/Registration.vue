<script>
    import HeaderGuest from "../components/HeaderGuest.vue";
    export default {
  components: {
    HeaderGuest,
  }
}
</script>
<template>
    
        <HeaderGuest />
        <h1>Registration</h1>
        <form>
            <label for="name">Name</label><br>
            <input type="text" id="name" name="name" /><br>
            <label for="email">Email</label><br>
            <input type="email" id="email" name="email" /><br>
            <label for="password">Password</label><br>
            <input type="password" id="password" name="password" /><br>
            <label for="repassword">Re-enter Password</label><br>
            <input type="password" id="repassword" name="repassword" /><br>
            <button type="submit">Login</button> 
        </form>

</template>

<style scoped>
h1{
    color: white;
    text-align: center;
    font-weight: bold;
    }

    form{
        margin: 5% auto;
        border: #1a73e8 1px solid;
        max-width: 400px;
        width: 100%;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
    }

    label{
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        
    }

    input{
        width: 300px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #1a73e8;
        margin-bottom: 2%;
        margin-top: 10px;
    }

    button{
        
        height: 30px;
        border-radius: 4px;
        border: 1px solid #1a73e8;
        background-color: #1a73e8;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
    }




</style>