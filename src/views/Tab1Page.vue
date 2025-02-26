<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ARISGYM</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
     
      <ion-img src="/src/assets/Frame 1.jpg" alt="Rutina de ejercicio"></ion-img>
      <div class="ion-padding">
       
       <h1>¡Bienvenido a ARISGYM!</h1>
       

      
        <ion-list>
          <ion-item>
            <ion-icon :icon="barbell" slot="start"></ion-icon>
            <ion-label>Fuerza</ion-label>
          </ion-item>
          
          <ion-button @click="handleImageClick" fill="clear">
        <ion-img src="/src/assets/fuerza.png"></ion-img>
      </ion-button>  
         <ion-item>
            <ion-icon :icon="heart" slot="start"></ion-icon>
            <ion-label>Cardio</ion-label>
          </ion-item>
          <ion-button @click="handleImageClick" fill="clear">
        <ion-img src="/src/assets/cardio.png"></ion-img>
      </ion-button>
          <ion-item>
            <ion-icon :icon="body" slot="start"></ion-icon>
            <ion-label>Estiramiento</ion-label>
          </ion-item>
          <ion-button @click="handleImageClick" fill="clear">
        <ion-img src="/src/assets/estiramiento.png"></ion-img>
      </ion-button>
        </ion-list>
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
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonChip,
} from "@ionic/vue";
import { barbell, heart, body } from "ionicons/icons"; // Importar íconos
</script>

<style scoped>
/* Estilos personalizados */
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 1.5rem;
}

ion-chip {
  margin-bottom: 1.5rem;
}

ion-list {
  background: transparent;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  margin-bottom: 0.5rem;
}

ion-icon {
  color: var(--ion-color-primary);
  margin-right: 0.5rem;
}
</style>