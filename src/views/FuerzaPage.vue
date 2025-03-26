<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/Tab1"></ion-back-button>
        </ion-buttons>
        <ion-title>ARISGYM - FUERZA</ion-title>
        <img src="../assets/image.png" alt="icono" class="toolbar-icon" />
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
     
      <div class="presentacion">
        <h1>¡Bienvenido a ARISGYM - FUERZA!</h1>
        <div class="divider"></div>
        <p>En esta sección encontrarás información sobre los músculos que puedes entrenar y los ejercicios recomendados para cada uno.</p>
        <div class="divider"></div>
      </div>

      <ion-card v-for="tipo in tiposDeEjercicio" :key="tipo.id" @click="goToDetail(tipo.id)">
        <img :alt="tipo.nombre" :src="tipo.imagen" class="card-image" />
        <ion-card-header>
          <ion-card-title>{{ tipo.nombre }}</ion-card-title>
          <ion-card-subtitle>Entrenamiento de fuerza</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ tipo.descripcion }}
        </ion-card-content>
      </ion-card>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButtons,
  IonBackButton
} from "@ionic/vue";
import { useRouter } from 'vue-router';
import TipodeAlimeno from "@/assets/data.json";

const router = useRouter();

// Cargar los tipos de ejercicio desde el archivo JSON
const tiposDeEjercicio = TipodeAlimeno.tiposDeEjercicio.map(ejercicio => ({
  ...ejercicio,
}));

// Función para redirigir a la página de detalles del ejercicio
const goToDetail = (id: number) => {
  router.push({ path: `/tabs/detallesfuerza/${id}` });
};
</script>

<style scoped>
.card-image {
  width: 100%;
  height: 238px;
  object-fit: cover;
}

.banner-image {
  width: 95%;
  height: auto;
  margin: 10px auto;
  display: block;
  border-radius: 10px;
  border: 1px solid #000;
}

.divider {
  height: 2px;
  background-color: #007aff;
  margin: 20px auto;
  border-radius: 1px;
  width: 30%;
}

.presentacion {
  text-align: center;
  margin: 20px 10%;
  font-size: 20px;
}

.toolbar-icon {
  align-items: right;
  width: 15%;
  height: 15%;
  object-fit: fill;
  margin-left: 85%;
}
</style>


