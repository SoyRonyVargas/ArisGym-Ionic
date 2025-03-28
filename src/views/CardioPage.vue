<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
      <ion-back-button default-href="tabs/Tab1"></ion-back-button>
      
    </ion-buttons>
    <ion-title>ARISGYM - Cardio</ion-title>
    <img src="/image.png" alt="icono" class="toolbar-icon" />
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

 
  <ion-card>
    <img alt="Silhouette of mountains" src="/saltosdes.png" />
    <ion-card-header>
      <ion-card-title>Saltos con desplante</ion-card-title>
      
    </ion-card-header>

    <ion-card-content>
      Comienza en posición de desplante con una pierna adelante y la otra atrás, formando un ángulo de 90°. Activa el torso y salta, cambiando de pierna en el aire. Aterriza en la postura opuesta y repite sin descanso. Para modificarlo, reduce el salto o elimínalo y haz solo el desplante.    </ion-card-content>
  </ion-card>

  <ion-card>
    <img alt="Silhouette of mountains" src="/deslateral.png" />
    <ion-card-header>
      <ion-card-title>Desplazamiento lateral</ion-card-title>
      
    </ion-card-header>

    <ion-card-content>
      Párate con los pies al ancho de la cadera, flexiona ligeramente las rodillas y mantén el pecho erguido. Da cuatro pasos rápidos a un lado, detente y regresa al punto de partida. Repite el movimiento de un lado a otro.    </ion-card-content>
  </ion-card>

  <ion-card>
    <img alt="Silhouette of mountains" src="/plancha.png" />
    <ion-card-header>
      <ion-card-title>Planchas con toque de hombros</ion-card-title>
      
    </ion-card-header>

    <ion-card-content>
      Adopta una posición de plancha alta con el torso firme y la columna neutra. Toca el hombro opuesto con una mano, regresa al suelo y repite con la otra, evitando que las caderas se muevan.
  </ion-card-content>
  </ion-card>

  <ion-card>
    <img alt="Silhouette of mountains" src="/montaña.png" />
    <ion-card-header>
      <ion-card-title>Escaladoras de montaña</ion-card-title>
      
    </ion-card-header>

    <ion-card-content>
      Colócate en plancha alta con los hombros alineados sobre las muñecas y la columna neutra. Lleva la rodilla derecha al pecho y regresa. Luego, repite con la pierna izquierda. Acelera el ritmo y sigue alternando.  </ion-card-content>
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

