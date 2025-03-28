<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/Tab1"></ion-back-button>
        </ion-buttons>
        <ion-title>ARISGYM - ALIMENTOS</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      
      <img src="/Frame 3.png" alt="promocional" class="banner-image">
      
      <div class="presentacion">
        <h1>¡Bienvenido a ARISFOOD!</h1>
        <div class="divider"></div>
        <p>En esta sección encontrarás información sobre los alimentos saludables que puedes consumir para mejorar tu rendimiento en el gimnasio.</p>
        <div class="divider"></div>
      </div>

      <ion-card v-for="tipo in typeDeAlimento" :key="tipo.id" @click="goToDetail(tipo.id)">
        <img :alt="tipo.nombre" :src="tipo.imagen" class="card-image" />
        <ion-card-header>
          <ion-card-title>{{ tipo.nombre }}</ion-card-title>
          <ion-card-subtitle>Alimento saludable</ion-card-subtitle>
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


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import TipodeAlimeno from "@/assets/data.json";



const router = useRouter();


const typeDeAlimento = TipodeAlimeno.tiposDeAlimento.map(alimento => ({
  ...alimento,
}));

const goToDetail = (id : number) => {
  router.push({ path: `/tabs/detallescomida/${id}` });
};
</script>

<style scoped>
.card-image {
  width: 100%;
  height: 238px;
  object-fit: cover;
}

.banner-image {
  width: 100%;
  height: 30%;

  display: block;

  object-fit: cover;
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
</style>