<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
      <ion-back-button default-href="/tabs/Tab1"></ion-back-button>
    </ion-buttons>
    <ion-title>ARISGYM - Fuerza</ion-title>
    <img src="../assets/image.png" alt="icono" class="toolbar-icon" />
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
    
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Fuerza</ion-title>
          </ion-toolbar>
        </ion-header>
       
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
  
  
  