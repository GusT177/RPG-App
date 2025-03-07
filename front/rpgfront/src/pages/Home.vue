<script>
</script>

<template>
  <section class="hero">
    <h1>RPG Dungeons & Dragons</h1>
    <h3>Olhe as instruções abaixo.. </h3>
  </section>

  <section class="instructions">
    <div class="card">
        <ul class="card-list">
          <li>Crie uma conta ou entre na plataforma</li>
          <li>Crie a ficha do seu personagem</li>
          <li>Tenha um grupo de 4 ou mais jogadores</li>
          <li>Alguem para ser o mestre da campanha</li>
        </ul>
    </div>
  </section>
</template>

<style scoped>

.hero{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  color: white;
}

.instructions{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.card{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: whitesmoke;
  border-radius: 10px;
  width: 25rem;
  padding: 1rem;
}

.card-list{
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;
  gap: 2rem;
}



</style>
