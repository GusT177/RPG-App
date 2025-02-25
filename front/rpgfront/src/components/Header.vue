<script>
import  { RouterLink }  from 'vue-router';
</script>

<template>
    <header>
        <h1><RouterLink to="/">D&D Makai</RouterLink></h1>
       
        <nav>
            <ul>
                <li><RouterLink to="/register">Registrar</RouterLink></li>
                <li><RouterLink to="/login">Login</RouterLink></li>
            </ul>
        </nav>

    </header>
</template>

<style>

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: rgb(33, 33, 71);
    color: white;
}

h1 a{
    display: flex;
    text-decoration: none;
    color: white;
}

nav{
    display: flex;
    align-items: center;
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 1rem;
    margin: 0.5rem;
}

ul li a{
    text-decoration: none;
    color: white;
    font-size: 20px;
}

</style>