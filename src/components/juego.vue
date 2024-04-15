<template>
  <div class="juego">
    <div class="contenedor_alerta" v-if="alertaa">
      <h4>{{ alerta }}</h4>
    </div>
    <div class="imagen">
      <img v-if="imagen" :src="img" alt="pokemon" :class="{ oscuro: !adivinado }">
    </div>
    <div class="informacion">
      <div class="botonIniciar" v-if="inicio">
        <button class="iniciar" @click="iniciar()">Iniciar</button>
      </div>
      <div class="informacion2" v-if="informacion">
        <div class="tipo">
          <h2><b>Tipo: </b>{{ tipo }}</h2>
        </div>
        <div class="stats">
          <div class="hp">
            <h3><b>HP: </b>{{ hp }}</h3>
          </div>
          <div class="ataque">
            <h3><b>Ataque: </b>{{ ataque }}</h3>
          </div>
          <div class="defensa">
            <h3><b>Defensa: </b>{{ defensa }}</h3>
          </div>
        </div>
        <div class="contenedor">
          <input type="text" v-model="nombre2" placeholder="Nombre del pokemon">
        </div>
        <div class="contenedor2">
          <button @click="enviar()">Enviar</button>
        </div>
        <div class="botones">
          <div class="contenedor_rendirse">
            <button @click="rendirse()">Rendirse</button>
          </div>
          <div class="contenedor_nuevo">
            <button @click="nuevo()">Nuevo</button>
          </div>
          <div class="contenedor_salir">
            <router-link to="/">
              <button>Salir</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

let alerta = ref('')
let alertaa = ref(false)
let nombre2 = ref('')
let pokemones = ref({});
let nombre = ref('')
let tipo = ref('')
let img = ref('')
let hp = ref(0)
let ataque = ref(0)
let defensa = ref(0)
let imagen = ref(false)
let inicio = ref(true)
let informacion = ref(false)
let adivinado = ref(false)

const ocultarAlerta = () => {
  setTimeout(() => {
    alerta.value = '';
    alertaa.value = false
  }, 2500);
};

async function iniciar() {
  try {
    let random = parseInt(Math.random() * 500 + 1);
    let pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/" + random);
    pokemones.value = pokemon.data;
    nombre.value = pokemones.value.name;
    tipo.value = pokemones.value.types[0].type.name;
    img.value = pokemones.value.sprites.other.dream_world.front_default;
    hp.value = pokemones.value.stats[0].base_stat;
    ataque.value = pokemones.value.stats[1].base_stat;
    defensa.value = pokemones.value.stats[2].base_stat;
  } catch (error) {
    console.log(error);
  }
  console.log(nombre.value);
  inicio.value = false;
  informacion.value = true;
  imagen.value = true;
}

function enviar() {
  if (nombre2.value == nombre.value) {
    adivinado.value = true
    alerta.value = 'Correcto';
    ocultarAlerta()
    alertaa.value = true
  } else {
    alerta.value = 'Incorrecto';
    alertaa.value = true
    ocultarAlerta()
  }
}

function rendirse() {
  nombre2.value = nombre.value
  adivinado.value = true
  alerta.value = `El nombre era ${nombre.value}`;
  alertaa.value = true
  ocultarAlerta()
}

async function nuevo() {
  adivinado.value = false
  nombre2.value = ('')
  try {
    let random = parseInt(Math.random() * 500 + 1);
    let pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/" + random);
    pokemones.value = pokemon.data;
    nombre.value = pokemones.value.name;
    tipo.value = pokemones.value.types[0].type.name;
    img.value = pokemones.value.sprites.other.dream_world.front_default;
    hp.value = pokemones.value.stats[0].base_stat;
    ataque.value = pokemones.value.stats[1].base_stat;
    defensa.value = pokemones.value.stats[2].base_stat;
  } catch (error) {
    console.log(error);
  }
  console.log(nombre.value);
}

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Comic Sans MS', cursive;

}

.contenedor_alerta {
  background-color: #fff;
  position: absolute;
  z-index: 100;
  width: 30%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8PX;
}

.juego {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(40deg,
      orange 50%,
      orangered 55%,
      orange 55%);
  background-size: 2em 2em;
  background-repeat: round;
  background-color: orange;
}

.imagen,
.informacion {
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.oscuro {
  filter: brightness(0%);
}

.iniciar {
  transition: all 0.3s ease-in-out;
  font-family: "Dosis", sans-serif;
}

.iniciar {
  width: 150px;
  height: 60px;
  border-radius: 50px;
  background-image: linear-gradient(135deg, #feb692 0%, #ea5455 100%);
  box-shadow: 0 20px 30px -6px #ee676180;
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 24px;
  color: white;
}

.iniciar:hover {
  transform: translateY(3px);
  box-shadow: none;
}

.iniciar:active {
  opacity: 0.5;
}

.informacion2 {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tipo {
  height: 15vh;
  display: flex;
  align-items: center;
}

.stats {
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hp {
  margin-bottom: 10px;
}

.defensa {
  margin-top: 10px;
}

.contenedor {
  height: 15vh;
  display: flex;
  align-items: center;
}

.contenedor input {
  padding: 10px;
  border: 0;
  background: none;
  border-bottom: 3px solid #000000;
  font-size: 18px;
}

.contenedor input:focus {
  outline: 0;
}

.contenedor2 {
  height: 15vh;
  display: flex;
  align-items: center;
}

.contenedor2 button {
  appearance: none;
  background-color: transparent;
  border: 0.125em solid #1A1A1A;
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 3.75em;
  min-width: 0;
  outline: none;
  padding: 1em 2.3em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

.contenedor2 button:disabled {
  pointer-events: none;
}

.contenedor2 button:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.contenedor2 button:active {
  box-shadow: none;
  transform: translateY(0);
}

.botones {
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contenedor_rendirse,
.contenedor_nuevo,
.contenedor_salir {
  width: 30%;
  display: flex;
  justify-content: center;
}

.contenedor_rendirse button,
.contenedor_nuevo button,
.contenedor_salir button {
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 17px;
}

.contenedor_nuevo button {
  background-color: #f74040;
  color: #fff;
}

.contenedor_rendirse button:hover,
.contenedor_nuevo button:hover,
.contenedor_salir button:hover {
  transform: scale(1.1);
}
</style>