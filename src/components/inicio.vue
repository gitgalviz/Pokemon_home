<template>
    <div class="app">
        <div class="contenedor1"></div>
        <div class="contenedor2"></div>
        <div class="contenedor3">
            <div class="carta">
                <router-link to="/card">
                    <button>Carta de pokemon</button>
                </router-link>
            </div>
            <div class="juego">
                <router-link to="/juego">
                    <button>Juego de pokemon</button>
                </router-link>
            </div>
        </div>
    
    </div>
</template>
<script setup>
import { ref } from 'vue'
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app{
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: #f3f3f3;
}

.contenedor1{
    width: 50%;
    height: 100vh;
    background-color: #ff0000;
}

.contenedor2{
    width: 50%;
    height: 100vh;
    background-color: #ffffff;
}

.contenedor3{
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carta, .juego{
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carta button{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    color: #000000;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    padding: 5px 8px;
}

.juego button{
    width: 100%;
    height: 100%;
    background-color: #ff0000;
    color: #ffffff;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    padding: 5px 8px;
}

.carta button:hover, .juego button:hover{
    transform: scale(1.1);
}
</style>