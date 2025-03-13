<script>
import DropDown from '../components/DropDown.vue';

export default {
  components: {
    DropDown
  }
}
</script>


<template>
  <section class="top-section">
    <h1>Bem-vindo ao Mundo de Dungeons & Dragons!</h1>
    <h2>Prepare-se para viver aventuras épicas, explorar mundos mágicos e desafiar criaturas lendárias!</h2>
  </section>

  <section class="steps-section">
      <span>Aqui você encontrará tudo o que precisa para começar sua jornada, desde a criação de um
      personagem até as regras essenciais do jogo.</span>
      <ul>
        <li> Crie uma conta ou entre na plataforma</li>
        <li> Monte a ficha do seu personagem</li>
        <li> Reúna um grupo de aventureiros</li>
        <li> Encontre um Mestre da Campanha</li>
        <li> Entenda as mecânicas do jogo</li>
        <li> Jogue!</li>
      </ul>
  </section>

  <section class="drops-section">
    <h2 class="title">Fundamentos de D&D</h2>
    <DropDown class="dropdown" title="O que é D&D">
      <p>Dungeons & Dragons é um jogo de interpretação de papéis (RPG) no qual os jogadores assumem
        os papéis de personagens em um mundo de fantasia. </p>
      <ul>
        <li>Um dos jogadores será o Mestre da Campanha (Dungeon Master - DM), que cria e narra a história.</li>
        <li>Os outros jogadores serão Aventureiros, explorando, lutando e tomando decisões que influenciam o mundo.</li>
        <li>As ações são resolvidas com dados de 20 lados (d20) e baseadas nas regras do jogo.</li>
      </ul>
    </DropDown>
    <DropDown class="dropdown" title="Atributos"></DropDown>

  </section>

</template>

<style scoped>

.top-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
}

.dropdown{
  display: flex;
  flex-direction: column;
  justify-content: center;
  positon: absolute;
  align-items: center;
  width: 100%;
  height: 3rem;
  color: white;
  outline: none;
  cursor: pointer;
}

.steps-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
}

.drops-section{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

}

.title{
  display: flex;
  justify-content: center;
  align-items: center;
  positon: absolute;
  margin: 0.5rem;
}


ul{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
}

</style>
