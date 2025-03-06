<script>
defineProps(['user'])

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
};

</script>

<template>
    <header>
        <h1><RouterLink to="/">D&D Makai <img src="../assets/d20icon.svg" alt="d20 dice icon"></RouterLink> </h1>

        <nav>
            <ul>
                <li><RouterLink to="#">Campanhas</RouterLink></li>
                <li><RouterLink to="#">Sobre</RouterLink></li>
                <li><RouterLink to="#"> {{ user }}</RouterLink></li>
                <li><button @click="logout">Sair</button></li>
            </ul>
        </nav>
    </header>
</template>

<style>

</style>
