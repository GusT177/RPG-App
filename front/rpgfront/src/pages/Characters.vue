<script setup>

</script>

<template>
  <section class="top-section">
    <h1>Seus Personagens</h1>
    <Button class="btncreate" asChild v-slot="slotProps">
      <RouterLink :class="slotProps.class" class="link" to="/ficha">Criar Ficha</RouterLink>
    </Button>
  </section>
</template>


<style scoped>

.top-section{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.btncreate{
  display: flex;
}

.link{
  display: flex;
  justify-content: center;
  position: absolute;
  border: 1px solid white;
  color: white;
  right: 0;
  margin-right: 2rem;
  text-decoration: none;
  background-color: rgb(33, 33, 71);
}

.link:hover{
  color: white !important;
  background-color: #313166 !important;
}



</style>
