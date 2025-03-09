<script>
import FormComponent from '../components/FormComponent.vue';
import { RouterLink } from 'vue-router';

export default{
    components:{ FormComponent },
    data(){
        return{
            email: '',
            user: '',
            pass: '',
            formFields: [
                { name: "email", label: "Email:", type: "email", placeholder: "Email" },
                { name: "pass", label: "Senha", type: "password", placeholder: "Senha" }
            ]
        }
    },
    methods:{
        handleSubmit(formData){
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.email === this.email && storedUser.pass === this.pass ) {
              localStorage.setItem('isLogged', true);
              localStorage.setItem('userInfo', JSON.stringify(storedUser));

              this.$router.push('/');

            } else {
              alert('Credenciais inválidas');
            }


            console.log(formData)
        }


    }
}

</script>

<template>
    <div class="wrapper">
        <h1>Entrar</h1>
        <FormComponent :fields="formFields" btnText="Entrar" @submit="handleSubmit" />
        <span>Não possui conta? <RouterLink to="/register"><b>Criar conta</b></RouterLink></span>
    </div>
</template>

<style>



    span a b {
        text-decoration: none;
        color: white;
    }
</style>

