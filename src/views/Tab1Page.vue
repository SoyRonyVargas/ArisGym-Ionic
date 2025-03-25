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

        <ion-list>
          <ion-item>
            <ion-icon :icon="barbell" slot="start"></ion-icon>
            <ion-label>Fuerza</ion-label>
          </ion-item>
          <ion-button @click="handleImageClick('Fuerza')" fill="clear">
            <ion-img src="/fuerza.png"></ion-img>
          </ion-button>

          <ion-item>
            <ion-icon :icon="heart" slot="start"></ion-icon>
            <ion-label>Cardio</ion-label>
          </ion-item>
          <ion-button @click="handleImageClick('Cardio')" fill="clear">
            <ion-img src="/cardio.png"></ion-img>
          </ion-button>

          <ion-item>
            <ion-icon :icon="body" slot="start"></ion-icon>
            <ion-label>Estiramiento</ion-label>
          </ion-item>
          <ion-button @click="handleImageClick('Estiramiento')" fill="clear">
            <ion-img src="/estiramiento.png"></ion-img>
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
  IonButton,
} from "@ionic/vue";
import { barbell, heart, body } from "ionicons/icons"; 
import { useRouter } from "vue-router"; 

const router = useRouter(); 
const handleImageClick = (categoria: 'Fuerza' | 'Cardio' | 'Estiramiento') => {
  const rutas: { [key in 'Fuerza' | 'Cardio' | 'Estiramiento']: string } = {
    "Fuerza": "/tabs/fuerza",
    "Cardio": "/tabs/cardio",
    "Estiramiento": "/tabs/estiramiento",
  };

  if (rutas[categoria]) {
    router.push(rutas[categoria]); // Redirigir según la categoría
  } else {
    console.log("Categoría no encontrada:", categoria);
  }
};
{
  const goToDetail = (id: string) => {
    router.push({path: '/tabs/CardioPage/${id}'});
  }
};


</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
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
