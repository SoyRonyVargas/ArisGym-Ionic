<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Calculadora de Calorías</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="resetAll">Reiniciar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-item>
        <ion-input v-model="foodName" placeholder="Nombre del alimento"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model.number="calories" type="number" placeholder="Calorías"></ion-input>
      </ion-item>
      <ion-button expand="block" @click="addEntry">Agregar</ion-button>

      <ion-list v-if="history.length > 0">
       
        <ion-item v-for="(entry, index) in history" :key="index">
          <ion-label>{{ entry.food }}</ion-label>
          <ion-label>{{ entry.calories }} kcal</ion-label>
          <ion-button color="danger" @click="removeEntry(index)">Eliminar</ion-button>
        </ion-item>
      </ion-list>

      <ion-item>
        <ion-label><strong>Total:</strong> {{ totalCalories }} kcal</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

---

## **⚙️ Script Funcional**
```ts
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonList,
  IonButtons,
} from "@ionic/vue";

const router = useRouter();
const foodName = ref("");
const calories = ref("");
const history = ref([]);
const totalCalories = ref(0);
const user = ref(null);

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const loadFromStorage = () => {
  user.value = getUser();
  if (!user.value) {
    history.value = [];
    totalCalories.value = 0;
    return;
  }

  const userKey = `caloriesHistory_${user.value.email}`;
  const savedHistory = JSON.parse(localStorage.getItem(userKey)) || [];
  history.value = savedHistory;
  totalCalories.value = savedHistory.reduce((sum, entry) => sum + entry.calories, 0);
};

const saveToStorage = () => {
  if (user.value) {
    const userKey = `caloriesHistory_${user.value.email}`;
    localStorage.setItem(userKey, JSON.stringify(history.value));
  }
};

const addEntry = () => {
  if (!foodName.value || !calories.value) return;
  if (!user.value) {
    alert("Debes iniciar sesión para guardar datos.");
    return;
  }

  const newEntry = { food: foodName.value, calories: Number(calories.value) };
  history.value.push(newEntry);
  totalCalories.value += newEntry.calories;

  saveToStorage();

  foodName.value = "";
  calories.value = "";
};

const removeEntry = (index) => {
  totalCalories.value -= history.value[index].calories;
  history.value.splice(index, 1);
  saveToStorage();
};

const resetAll = () => {
  history.value = [];
  totalCalories.value = 0;
  if (user.value) {
    const userKey = `caloriesHistory_${user.value.email}`;
    localStorage.removeItem(userKey);
  }
};

const logout = () => {
  localStorage.removeItem("user");
  history.value = [];
  totalCalories.value = 0;
  router.push("/login");
};

watch(user, () => {
  loadFromStorage();
});

onMounted(loadFromStorage);
</script>
<style scoped>
.ion-padding {
  padding: 16px;
}

ion-list {
  margin-top: 20px;
}

ion-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}

ion-label {
  text-align: center;
  flex: 1;
}
</style>
