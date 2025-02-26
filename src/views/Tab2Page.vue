<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
      <ion-back-button default-href="/tabs/Tab1"></ion-back-button>
    </ion-buttons>
        <ion-title>ARISGYM - ALIMENTOS
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      

      <ion-card v-for="tipo in typeDeAlimento" :key="tipo.id">
        <img :alt="tipo.nombre" :src="tipo.imagen" class="card-image"/>
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
  IonImg,
  IonBackButton

} from "@ionic/vue";
import { ref, onMounted } from 'vue';

const alimentos = ref([]);

interface TipoDeAlimento {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const typeDeAlimento = ref<TipoDeAlimento[]>([]);

onMounted(async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  alimentos.value = data.alimentos;
  typeDeAlimento.value = data.tiposDeAlimento;
  
});
</script>


<style scoped>
.card-image {
  width: 358px;
  height: 238px;
  object-fit: cover; /* Ajusta la imagen para que cubra el área sin distorsionarse */
  }
</style>