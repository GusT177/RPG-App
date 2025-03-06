<script>
import FormComponent from '../components/FormComponent.vue';
import { RouterLink } from 'vue-router';

export default{
    components:{ FormComponent },
    data(){
        return{
            formFields: [
                { name: "email", label: "Email:", type: "email", placeholder: "Email" },
                { name: "pass", label: "Senha", type: "password", placeholder: "Senha" }
            ]
        }
    },  
    methods:{
        handleSubmit(formData){
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