<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registro de Calorías</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="ion-padding">
        <!-- Formulario -->
        <ion-item>
          <ion-input
            v-model="newCalories"
            type="number"
            label="Calorías"
            placeholder="Ej: 300"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            v-model="newDate"
            type="date"
            label="Fecha"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            v-model="newTime"
            type="time"
            label="Hora"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            v-model="newDescription"
            label="Descripción"
            placeholder="Ej: Almuerzo"
          ></ion-input>
        </ion-item>

        <ion-button 
          expand="block" 
          @click="addEntry"
          class="ion-margin-top"
        >
          Agregar
        </ion-button>

        <!-- Gráfica -->
        <div class="chart-container">
          <canvas id="myChart"></canvas>
        </div>

        <!-- Tabla de registros -->
        <ion-list class="ion-margin-top">
          <ion-list-header>
            <ion-label>Historial</ion-label>
          </ion-list-header>

          <ion-item-sliding v-for="entry in entries" :key="entry.id">
            <ion-item>
              <ion-label>
                <h2>{{ formatDateTime(entry.date, entry.time) }}</h2>
                <p>{{ entry.description }}</p>
              </ion-label>
              <ion-note slot="end" color="primary">
                {{ entry.calories }} kcal
              </ion-note>
            </ion-item>

            <ion-item-options side="end">
              <ion-item-option color="danger" @click="removeEntry(entry.id)">
                Eliminar
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>

          <ion-item v-if="entries.length === 0">
            <ion-label class="ion-text-center">
              No hay registros aún
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonInput, IonButton, IonList, IonListHeader,
  IonLabel, IonNote, IonItemSliding, IonItemOptions, IonItemOption 
} from '@ionic/vue';
import { Chart, type ChartOptions } from 'chart.js/auto';

type CalorieEntry = {
  id: number;
  calories: number;
  date: string;
  time: string;
  description: string;
};

const newCalories = ref<number | null>(null);
const newDate = ref(new Date().toISOString().split('T')[0]);
const newTime = ref(new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
const newDescription = ref('');

const entries = ref<CalorieEntry[]>([]);
let chart: Chart | null = null;

// Cargar datos
onMounted(() => {
  const savedEntries = localStorage.getItem('calorieEntries');
  if (savedEntries) entries.value = JSON.parse(savedEntries);
  initChart();
});

// Añadir entrada
const addEntry = () => {
  if (!newCalories.value) return;

  entries.value.push({
    id: Date.now(),
    calories: newCalories.value,
    date: newDate.value,
    time: newTime.value,
    description: newDescription.value,
  });

  saveToLocalStorage();
  resetForm();
};

// Eliminar entrada
const removeEntry = (id: number) => {
  entries.value = entries.value.filter(entry => entry.id !== id);
  saveToLocalStorage();
};

// Guardar en localStorage
const saveToLocalStorage = () => {
  localStorage.setItem('calorieEntries', JSON.stringify(entries.value));
};

// Formatear fecha
const formatDateTime = (date: string, time: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return `${new Date(date).toLocaleDateString('es-ES', options)} - ${time}`;
};

// Reiniciar formulario
const resetForm = () => {
  newCalories.value = null;
  newDate.value = new Date().toISOString().split('T')[0];
  newTime.value = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  newDescription.value = '';
};

// Inicializar gráfica
const initChart = () => {
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  if (!ctx) return;

  if (chart) chart.destroy();

  // Procesar datos
  const groupedData = entries.value.reduce((acc, entry) => {
    acc[entry.date] = (acc[entry.date] || 0) + entry.calories;
    return acc;
  }, {} as Record<string, number>);

  const sortedDates = Object.keys(groupedData).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  // Configuración del Chart
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: sortedDates,
      datasets: [{
        label: 'Calorías Diarias',
        data: sortedDates.map(date => groupedData[date]),
        borderColor: '#3880ff',
        backgroundColor: 'rgba(56, 128, 255, 0.2)',
        borderWidth: 2,
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: { mode: 'index' }
      },
      scales: {
        x: { title: { display: true, text: 'Fecha' } },
        y: { 
          title: { display: true, text: 'Calorías' },
          beginAtZero: true,
          ticks: { precision: 0 }
        }
      }
    } as ChartOptions
  });
};

// Actualizar gráfica al cambiar datos
watch(entries, () => {
  initChart();
}, { deep: true });
</script>

<style scoped>
.chart-container {
  margin: 2rem 0;
  height: 300px;
  width: 100%;
  position: relative;
}

#myChart {
  width: 100% !important;
  height: 100% !important;
}

ion-item-sliding {
  margin-bottom: 8px;
}

ion-item {
  --background: var(--ion-color-light);
  border-radius: 8px;
  --padding-start: 12px;
  --padding-end: 12px;
}

ion-note {
  font-weight: 500;
  font-size: 1rem;
}
</style>