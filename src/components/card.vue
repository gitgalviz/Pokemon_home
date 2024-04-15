<template>
    <div>
      <div class="div_padre">
        <h1>Bienvenido a Pokeapi</h1>
        <h2>mi nombre es "{{ name }}" y mi id es "{{ id }}"</h2>
        <div class="button_dates">
          <q-btn @click="traer()" round color="black" icon="my_location" /> <span class="q-ma-md">Traer Datos</span>
        </div>
        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img :src="img" :ratio="16 / 9" />
            </div>
  
            <div class="col-4">
              <q-img :src="img" alt="" :ratio="1" />
            </div>
  
            <div class="col-4">
              <q-img :src="img" :ratio="4 / 3" />
            </div>
          </div>
        </div>
        <div class="lineas">
          <div class="q-pa-md">
            <p><q-icon name="warning" /> VIDA "{{ hp }}"</p>
            <q-linear-progress size="10px" :value="hp2" color="red" />
            <p><q-icon name="warning" /> ATAQUE "{{ ataque }}"</p>
            <q-linear-progress size="10px" :value="ataque2" color="blue" />
            <p><q-icon name="warning" /> DEFENSA "{{ defensa }}"</p>
            <q-linear-progress size="10px" :value="defensa2" color="purple" />
            <p><q-icon name="warning" /> ATAQUE-ESPECIAL "{{ ataque_especial }}"</p>
            <q-linear-progress size="10px" :value="ataque_especial2" color="green" />
            <p><q-icon name="warning" /> VELOCIDAD "{{ velocidad }}"</p>
            <q-linear-progress size="10px" :value="velocidad2" color="black" />
            <p><q-icon name="warning" /> DEFENSA-ESPECIAL "{{ defensa_especial }}"</p>
            <q-linear-progress size="10px" :value="defensa_especial2" color="pink" />
          </div>
        </div>
      </div>
      <footer>Esneyder Galviz Reyes@Copy2024</footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  
  let pokemon = ref({})
  let name = ref('')
  let hp = ref(0)
  let hp2 = ref(0)
  let ataque = ref(0)
  let ataque2 = ref(0)
  let defensa = ref(0)
  let defensa2 = ref(0)
  let ataque_especial = ref(0)
  let ataque_especial2 = ref(0)
  let defensa_especial = ref(0)
  let defensa_especial2 = ref(0)
  let velocidad = ref(0)
  let velocidad2 = ref(0)
  let id = ref(0)
  
  let img = ref('')
  
  
  async function traer() {
    try {
      let random = parseInt(Math.random() * 700 + 1);
      let r = await axios.get("https://pokeapi.co/api/v2/pokemon/" + random)
      pokemon.value = r.data
      console.log(random);
      hp.value = pokemon.value.stats[0].base_stat
      name.value = pokemon.value.name
      id.value = pokemon.value.id
      hp2.value = hp.value / 100
  
      ataque.value = pokemon.value.stats[1].base_stat
      ataque2.value = ataque.value / 100
  
      defensa.value = pokemon.value.stats[2].base_stat
      defensa2.value = pokemon.value.stats[2].base_stat/ 100
  
      ataque_especial.value = pokemon.value.stats[3].base_stat
      ataque_especial2.value = pokemon.value.stats[3].base_stat/ 100
  
      defensa_especial.value = pokemon.value.stats[4].base_stat
      defensa_especial2.value = pokemon.value.stats[4].base_stat/ 100
  
      velocidad.value =pokemon.value.stats[5].base_stat
      velocidad2.value =pokemon.value.stats[5].base_stat/ 100
  
      img.value = pokemon.value.sprites.other.dream_world.front_default
    } catch (error) {
      console.log(error);
    }
  }
  
  </script>
  
  <style scoped>
  .button_dates {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
  }
  
  p {
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    line-height: 1.2;
  
  }
  
  h1 {
    text-align: center;
    padding: 10px;
    background-color: #ffcc00;
    color: #333;
    font-size: 30px;
    margin: 0;
    letter-spacing: 2px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    line-height: 1.2;
  }
  
  h2 {
    text-align: center;
    padding: 10px;
    background-color: #ffcc00;
    color: #333;
    font-size: 30px;
    margin: 0;
    letter-spacing: 2px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    line-height: 1.2;
  
  }
  
  footer {
    text-align: center;
    padding: 10px;
    background-color: #ffcc00;
    color: #333;
    font-size: 30px;
    margin: 0;
    letter-spacing: 2px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    line-height: 1.2;
  }
  
  span {
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    line-height: 1.2;
  }
  
  .lineas {
    margin-bottom: 30px;
  
  }
  </style>