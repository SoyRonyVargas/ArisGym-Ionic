<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ARISGYM</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      
      <ion-img src="/Frame 1.jpg" alt="Rutina de ejercicio"></ion-img>

      <div class="ion-padding">
        <h1>¡Bienvenido a ARISGYM!</h1>

     
        <div v-for="item in data.categorias" :key="item.nombre" class="category-item">
        
          <div class="category-header">
            <ion-icon :icon="barbell" slot="start"></ion-icon>
            <ion-label>{{ item.nombre }}</ion-label>
          </div>

          <ion-button @click="handleImageClick" fill="clear" class="category-button">
            <ion-img :src="item.imagen" alt="Imagen de categoría"></ion-img>
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonLabel,
  IonIcon,
  IonButton,
} from "@ionic/vue";
import { barbell } from "ionicons/icons"; 
import data from "../static/data.json"; 

console.log(data);


const handleImageClick = () => {
  console.log("¡Botón clickeado!");
};
</script>

<style scoped>

h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.category-header ion-icon {
  margin-right: 0.5rem;
  color: var(--ion-color-primary);
}

.category-button {
  width: 100%;
  text-align: left;
  --padding-start: 0;
  --padding-end: 0;
}

.category-button ion-img {
  width: 120%;
  max-width: 400px; 
  height: auto;
  border-radius: 8px; 
}
</style>