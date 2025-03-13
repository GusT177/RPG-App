<script>
import  { RouterLink }  from 'vue-router';

export default {
  data() {
    return {
      isLogged: false,
      userInfo: {}
    }
  },

  mounted(){
    const logged = localStorage.getItem('isLogged');
    if (logged) {
      this.isLogged = true;
      this.userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
      console.log("User loaded: ", this.userInfo );
    }
  },

  methods: {
    logout(){
      localStorage.removeItem('isLogged');
      localStorage.removeItem('userInfo');

      this.isLogged = false;
      this.userInfo = null;

      this.$router.push('/login');
    }
  },


}


</script>

<template>
    <header>
        <h1><RouterLink to="/">D&D Makai <img src="../assets/d20icon.svg" alt="d20 dice icon"></RouterLink> </h1>

        <div v-if="isLogged">
            <nav>
                <ul>
                    <li><RouterLink to="/campaign">Campanhas</RouterLink></li>
                    <li><RouterLink to="/characters">Personagens</RouterLink></li>
                    <li><RouterLink to="/guide">Guia</RouterLink></li>
                    <li><RouterLink to="#">Sobre</RouterLink></li>
                    <li><RouterLink to="#" class="user-label"> Bomdia {{ userInfo.user }}</RouterLink></li>
                    <li><button class="logoutbtn" @click="logout">Sair</button></li>
                </ul>
            </nav>
        </div>
        <div v-else>
            <nav>
                <ul>
                    <li><RouterLink to="/guide">Guia</RouterLink></li>
                    <li><RouterLink to="/register">Registrar</RouterLink></li>
                    <li><RouterLink to="/login">Login</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: rgb(33, 33, 71);
    color: white;
}

h1{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

h1 a{
    display: flex;
    gap: 1rem;
    text-decoration: none;
    color: white;
}

 h1 img{
    width: 2rem;
    height: 2rem;
}

nav{
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 1.5rem;
    margin: 0.5rem;
}

ul li a{
    text-decoration: none;
    color: white;
    font-size: 20px;
}

.user-label{

}


.logoutbtn{
  display: flex;
  justify-content: center;
  background: none;
  padding: 0.5rem;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 10px;
  width: 3rem;
}



</style>
