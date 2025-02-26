<script>
import FormComponent from '../components/FormComponent.vue';
import { RouterLink } from 'vue-router';

export default {
   components: {FormComponent},
    data() {
        return {
            formFields: [
                {name: "user", label: "Usuário:", type: "text", placeholder: "Usuário"},
                {name: "email", label: "Email:", type: "email", placeholder: "Email"},
                {name: "pass", label: "Senha:", type: "password", placeholder: "Senha"},  
            ]
        }
    },
    
    methods: {
        handleRegister(formData) {
            console.log("data send...", formData)
        }
    }
};

</script>

<template>
    <div class="wrapper">
        <h1>Registrar</h1>
        <FormComponent :fields="formFields" btnText="Registrar" @submit="handleRegister" />
        <span>Já possui uma conta?<RouterLink class="link" to="/login"> Entre</RouterLink></span> 
    </div>
</template>

<style>
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

h1{
    color: white;
}
span{
    color: white;
}

span .link{
    text-decoration: none;
    font-weight: bold;
    color: white;
}

</style>