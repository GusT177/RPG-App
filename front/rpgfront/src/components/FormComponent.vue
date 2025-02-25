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
    }
    
}

</script>

<template>
    <form @submit.prevent="handleSubmit"> 
        <div v-for="(field, index) in fields" :key="index">
            <label :for="field.name">{{ field.label }}</label>
            <input :type="field.type" :id="field.id" :name="field.name" v-model="formData[field.name]" :placeholder="field.placeholder" />
        </div>
        <button type="submit">{{ btnText }}</button>
    </form>
</template>


<style>

</style>