<script>
import Button from 'primevue/button';


export default {
  components: {
    Button
  },

}
</script>

<template>
  <section class="top-section">
     <h1>Campanhas</h1>
     <Button label="Criar Campanha" class="create-btn" />
  </section>

  <section>

  </section>


</template>


 <style scoped>

.top-section{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
}

.create-btn{
  display: flex;
  justify-content: center;
  outline: none;
  border: 1px solid white;
  background-color: rgb(33, 33, 71);
  position: absolute;
  margin-right: 2rem;
  right: 0;
}

.create-btn:hover{
  background-color: #313166 !important;
}


 </style>
