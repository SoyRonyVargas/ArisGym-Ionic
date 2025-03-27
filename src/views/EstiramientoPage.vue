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
          <img alt="Estiramiento de espalda" src="/estespalda.png" />
          <ion-card-header>
            <ion-card-title>Estiramiento de Espalda</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Siéntate en el suelo con las piernas extendidas. Cruza una pierna sobre la otra y gira el torso hacia el lado de la pierna cruzada. Mantén 20 segundos y repite al otro lado.
          </ion-card-content>
        </ion-card>

        
        <ion-card>
          <img alt="Estiramiento de hombros" src="/esthombro.png" />
          <ion-card-header>
            <ion-card-title>Estiramiento de Hombros</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Lleva un brazo sobre el pecho y con el otro brazo presiónalo suavemente hacia tu cuerpo. Mantén 15-20 segundos y repite con el otro brazo.
          </ion-card-content>
        </ion-card>

       
        <ion-card>
          <img alt="Estiramiento de piernas" src="/estpierna.png" />
          <ion-card-header>
            <ion-card-title>Estiramiento de Piernas</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            De pie, lleva un talón hacia el glúteo sujetándolo con la mano. Mantén la postura 20 segundos por cada pierna.
          </ion-card-content>
        </ion-card>

       
        <ion-card>
          <img alt="Estiramiento de cuello" src="/estcuello.png" />
          <ion-card-header>
            <ion-card-title>Estiramiento de Cuello</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Inclina la cabeza hacia un lado suavemente, ayudándote con la mano. Mantén 10 segundos y repite hacia el otro lado.
          </ion-card-content>
        </ion-card>

       
        <ion-card>
          <img alt="Estiramiento de brazos" src="/estbrazo.png" />
          <ion-card-header>
            <ion-card-title>Estiramiento de Brazos</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Extiende un brazo frente a ti y con la otra mano empuja los dedos hacia atrás suavemente. Mantén 15 segundos por brazo.
          </ion-card-content>
        </ion-card>

        
        <ion-card>
          <img alt="Estiramiento de torso" src="/esttorso.png" />
          <ion-card-header>
            <ion-card-title>Estiramiento de Torso</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            De pie con las piernas separadas, levanta un brazo y estíralo hacia el lado opuesto. Mantén 15 segundos por lado.
          </ion-card-content>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons
} from "@ionic/vue";
</script>

<style scoped>
.toolbar-icon {
  width: 15%;
  height: 15%;
  object-fit: fill;
  margin-left: 85%;
}

ion-card {
  margin: 16px;
}

ion-card img {
  width: 100%;
  height: auto;
}
</style>