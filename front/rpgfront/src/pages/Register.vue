<script>
import FormComponent from '../components/FormComponent.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';




export default {
   components: {FormComponent},
    data() {
        return {
            email: '',
            user: '',
            pass: '',
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

            localStorage.setItem('user', JSON.stringify({
                email: this.email,
                user: this.user,
                pass: this.pass
            }))
          this.$router.push('/login');

        }


    },


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
    gap: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
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
