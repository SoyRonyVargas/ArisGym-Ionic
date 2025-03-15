<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ARISGYM</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
  
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Cardio</ion-title>
        </ion-toolbar>
      </ion-header>
      <div>
        <ion-card>
    <img alt="Silhouette of mountains" src="/Salto.png" />
    <ion-card-header>
      <ion-card-title>Salto de cuerda</ion-card-title>
      
    </ion-card-header>

    <ion-card-content>
      Párate con las piernas juntas y los pies firmemente plantados en el suelo.
      Extiende ambos brazos a los costados, asegurándote de que estén a la misma distancia del cuerpo.    </ion-card-content>
  </ion-card>
  <ion-card>
    <img alt="Silhouette of mountains" src="/saltodetijera.png" />
    <ion-card-header>
      <ion-card-title>Salto de cuerda</ion-card-title>
      
    </ion-card-header>

    <ion-card-content>
      Párate con las piernas juntas y los pies firmemente plantados en el suelo.
      Extiende ambos brazos a los costados, asegurándote de que estén a la misma distancia del cuerpo.    </ion-card-content>
  </ion-card>
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
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";

import * as data from "../static/data.json"
import { useRouter } from "vue-router";

const router = useRouter()

console.log(router.currentRoute.value.params.id);


</script>

