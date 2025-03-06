<script>



export default {
    props: {
        fields: {
            type: Array,
            required: true
        }, 
        btnText: {
            type: String,
            default: "Enviar"
        }
    },
    data() {
        return {
            formData: {}
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('submit', this.formData)
        }
    }
    
}

</script>

<template>
    <form @submit.prevent="handleSubmit"> 
        <div v-for="(field, index) in fields" :key="index">
            <label :for="field.name">{{ field.label }}</label>
            <input class="field" :type="field.type" :id="field.id" :name="field.name" v-model="formData[field.name]" :placeholder="field.placeholder" />
        </div>
        <button type="submit">{{ btnText }}</button>
    </form>
</template>


<style>
form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 20px;
    background-color: rgba(243, 243, 243, 0.952);
}

.field{
    display: flex;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
}

div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
}

button{
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: rgb(33, 33, 71);
    color: white;
    cursor: pointer;
}

</style>