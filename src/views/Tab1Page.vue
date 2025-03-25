<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
       
        <img src="/logo.png" alt="icono" class="toolbar-icon" />
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <img src="/Frame 1.jpg" alt="Rutina de ejercicio"></img>
      <div class="ion-padding">
        <h1>¡Bienvenido a ARISGYM!</h1>

        <div class="exercise-container">
          <!-- Fuerza -->
          <div class="exercise-card" @click="handleImageClick('Fuerza')">
            <div class="exercise-header">
              <ion-icon :icon="barbell" class="exercise-icon"></ion-icon>
              <ion-label class="exercise-label">Fuerza</ion-label>
            </div>
            <ion-img src="/fuerza.png" class="exercise-image"></ion-img>
          </div>

          <!-- Cardio -->
          <div class="exercise-card" @click="handleImageClick('Cardio')">
            <div class="exercise-header">
              <ion-icon :icon="heart" class="exercise-icon"></ion-icon>
              <ion-label class="exercise-label">Cardio</ion-label>
            </div>
            <ion-img src="/cardio.png" class="exercise-image"></ion-img>
          </div>

          <!-- Estiramiento -->
          <div class="exercise-card" @click="handleImageClick('Estiramiento')">
            <div class="exercise-header">
              <ion-icon :icon="body" class="exercise-icon"></ion-icon>
              <ion-label class="exercise-label">Estiramiento</ion-label>
            </div>
            <ion-img src="/estiramiento.png" class="exercise-image"></ion-img>
          </div>
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
} from "@ionic/vue";
import { barbell, heart, body } from "ionicons/icons"; 
import { useRouter } from "vue-router"; 

const router = useRouter(); 
const handleImageClick = (categoria: string) => {
  const rutas: Record<string, string> = {
    "Fuerza": "/tabs/fuerza",
    "Cardio": "/tabs/cardio",
    "Estiramiento": "/tabs/estiramiento",
  };
  router.push(rutas[categoria]);
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}
.toolbar-icon {
     align-items: right;
     width: 15%;
     height: 15%;
     object-fit: center;
     margin-left: 42.5%;
}

.exercise-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.exercise-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.exercise-icon {
  font-size: 1.5rem;
  color: var(--ion-color-primary);
}

.exercise-label {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
}

.exercise-image {
  width: 100%;
  height: 120px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
 
}
</style>