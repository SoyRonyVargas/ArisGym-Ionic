<template>
     <ion-page>
          <ion-header>
               <ion-toolbar>
                    <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/Tab2"></ion-back-button>
        </ion-buttons>
                    <img src="../assets/image.png" alt="icono" class="toolbar-icon" />
                    <ion-title>Calorias - {{ typeDeAlimento[0]?.nombre }}</ion-title>
               </ion-toolbar>
          </ion-header>
          <ion-content :fullscreen="true">
               <ion-grid>
                    <div class="presentacion">
                         <h1>¡Aqui podras observar cuantas calorias tienen tus alimentos!</h1>
                         <div class="divider2"></div>
                         <p>Recuerda agregar las calorias que has consumido a nuestro contador de calorias, ahi podras ver tus macros diarias!!</p>
                         <div class="divider2" style="margin-bottom: 10%;"></div>

                    </div>
                    <ion-row v-for="(alim, index) in alimento" :key="alim.id">
                         <ion-col size="6">
                              <p>{{ alim.nombre }}</p>
                         </ion-col>
                         <ion-col size="6" class="ion-text-right">
                              <p>{{ alim.calorias }} calorías</p>
                         </ion-col>
                         <div  v-if="index < alimento.length - 1" class="divider"></div>
                    </ion-row>
               </ion-grid>
          </ion-content>
     </ion-page>
</template>

<script setup lang="ts">
import router from "@/router";
import {
     IonPage,
     IonHeader,
     IonToolbar,
     IonTitle,
     IonContent,
     IonGrid,
     IonRow,
     IonCol,
     IonButtons,
     IonBackButton

} from "@ionic/vue";
import { useRoute } from 'vue-router';
import Tipodealimento from "@/assets/data.json";


const route = useRoute();
const alimentoId = parseInt(route.params.id as string, 10);

// Filtrar los alimentos y tipos de alimentos directamente desde los datos importados
const alimento = Tipodealimento.alimentos.filter(item => item.tipoId === alimentoId);
const typeDeAlimento = Tipodealimento.tiposDeAlimento.filter(it => it.id === alimentoId);
</script>

<style scoped>
.detail-image {
     width: 100%;
     height: auto;
     object-fit: cover;
}

.toolbar-icon {
     align-items: right;
     width: 15%;
     height: 15%;
     object-fit: fill;
     margin-left: 85%;
}
.divider {
  height: 1px;
  background-color: #007aff;
  margin: 2% 4% 2% 2%;
  width: 100%;
}
.divider2 {
     height: 2px;
  background-color: #007aff;
  margin: 20px auto; 
  border-radius: 1px;
  width: 30%;  
}
.presentacion {
     text-align: center;
     margin: 20% 10% 20% 10%;
}
</style>