<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/Fuerza"></ion-back-button>
        </ion-buttons>
        <img src="../assets/image.png" alt="icono" class="toolbar-icon" />
        <ion-title>Ejercicios - {{ tipoEjercicio[0]?.nombre }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <div class="presentacion">
          <h1>¡Ejercicios para {{ tipoEjercicio[0]?.nombre }}!</h1>
          <div class="divider2"></div>
          <p>Estos son unos de los ejercicios que puedes realizar para mejorar tu fuerza!</p>
          <div class="divider2" style="margin-bottom: 10%;"></div>
        </div>
        <ion-card v-for="(ejercicio, index) in ejercicios" :key="ejercicio.id">
          <img :src="ejercicio.imagen" :alt="ejercicio.nombre" class="card-image" />
          <ion-card-header>
            <ion-card-title>{{ ejercicio.nombre }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            {{ ejercicio.descripcion }}
          </ion-card-content>
        </ion-card>
      </ion-grid>
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
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonBackButton
} from "@ionic/vue";
import { useRoute } from 'vue-router';
import data from "@/assets/data.json";

const route = useRoute();
const tipoEjercicioId = parseInt(route.params.id as string, 10);

// Filtrar los ejercicios y tipos de ejercicios directamente desde los datos importados
const ejercicios = data.ejercicios.filter(ejercicio => ejercicio.tipoEjercicioId === tipoEjercicioId);
const tipoEjercicio = data.tiposDeEjercicio.filter(tipo => tipo.id === tipoEjercicioId);
</script>

<style scoped>
.card-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;
  background-color: white;
}

.toolbar-icon {
  align-items: right;
  width: 15%;
  height: 15%;
  object-fit: fill;
  margin-left: 85%;
}

.divider {
  height: 1px;
  background-color: #007aff;
  margin: 2% 4% 2% 2%;
  width: 100%;
}

.divider2 {
  height: 2px;
  background-color: #007aff;
  margin: 20px auto;
  border-radius: 1px;
  width: 30%;
}

.presentacion {
  text-align: center;
  margin: 10% 10% 20% 10%;
}
</style>