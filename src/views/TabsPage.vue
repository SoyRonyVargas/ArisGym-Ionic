<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="homeSharp" />
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">

          <ion-icon aria-hidden="true" :icon="nutritionSharp" />

        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="calculatorSharp" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { calculatorSharp, ellipse, homeOutline, homeSharp, nutritionOutline, nutritionSharp, square, triangle } from 'ionicons/icons';

</script>
