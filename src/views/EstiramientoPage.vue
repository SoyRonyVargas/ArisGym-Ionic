<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="#"></ion-back-button>
      
    </ion-buttons>
    <ion-title>ARISGYM - Estiramiento</ion-title>
    <img src="/image.png" alt="icono" class="toolbar-icon" />
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
    
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Estiramiento</ion-title>
          </ion-toolbar>
        </ion-header>
        <div>
          <ion-card>
      <img alt="Silhouette of mountains" src="/Salto.png" />
      <ion-card-header>
        <ion-card-title>Salto de cuerda</ion-card-title>
        
      </ion-card-header>
  
      <ion-card-content>
        nnnnnn    </ion-card-content>
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
    IonBackButton,
  } from "@ionic/vue";
  import ExploreContainer from "@/components/ExploreContainer.vue";
  import "./CardioPage.vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter()
  
  console.log(router.currentRoute.value.params.id);
  
  
  </script>

  <style scoped>
 .toolbar-icon {
     align-items: right;
     width: 15%;
     height: 15%;
     object-fit: fill;
     margin-left: 85%;
}
    
</style>
  
  