<script>
import { ref } from 'vue'

export default {
  props: {
    title: String,
    icon: String,
    content: String,
    className: String
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    ToggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  }

}


</script>

<template>
  <div :class="['dropdown-container', className]">
    <button class="dropdown-button" @click="ToggleDropdown">
      <span v-if="icon"> {{ icon }} </span>
      <span class="dropdown-title"> {{ title }} </span>
      <span class="arrow">{{ isOpen ? '▲' : '▼' }}</span>
    </button>
    <div v-show="isOpen" class="dropdown-content">
      <slot />
    </div>
  </div>
</template>

<style>
  .dropdown-container {
    display: flex;
    width: 100%;
  }

  .dropdown-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: rgb(33, 33, 71);
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-button {
    display: flex;
    width: 100%;
    background-color: rgb(33, 33, 71);
    border: 1px solid white;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    outline: none;
    font-size: 20px;
  }

  .dropdown-title {
    display: flex;
    justify-content: center;
    text-align: center;
  }

</style>

