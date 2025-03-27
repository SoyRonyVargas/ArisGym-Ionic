<script setup>
import { ref, onMounted } from 'vue';
import { loginUser } from '../database';
import { useRouter } from 'vue-router';
import { Preferences } from '@capacitor/preferences';
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText
} from '@ionic/vue';

const email = ref('');
const password = ref('');
const message = ref('');
const router = useRouter();

// Verificar sesión activa al cargar la página
onMounted(async () => {
  const { value: isLoggedIn } = await Preferences.get({ key: 'isLoggedIn' });
  if (isLoggedIn === 'true') {
    router.replace('/tabs/tab1'); // Redirige si ya está autenticado
  }
});

// Función para manejar el inicio de sesión
const login = async () => {
  if (!email.value || !password.value) {
    message.value = 'Todos los campos son obligatorios.';
    return;
  }

  const user = await loginUser(email.value, password.value);
  if (user) {
    // Guardar estado de login y timestamp en Preferences
    await Preferences.set({ key: 'isLoggedIn', value: 'true' });
    await Preferences.set({ key: 'loginTime', value: Date.now().toString() });

    message.value = `Bienvenido, ${user.name}`;
    setTimeout(() => router.push('/tabs/tab1'), 1000);
  } else {
    message.value = 'Email o contraseña incorrectos.';
  }
};
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding">
      <IonGrid class="ion-text-center">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" size-md="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Iniciar Sesión</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonInput v-model="email" type="email" placeholder="Correo electrónico" fill="outline" />
                <IonInput v-model="password" type="password" placeholder="Contraseña" fill="outline" class="ion-margin-top" />
                <IonButton expand="block" class="ion-margin-top" @click="login">Ingresar</IonButton>
                <IonText color="danger">{{ message }}</IonText>
              </IonCardContent>
            </IonCard>
            <IonText>
              ¿No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<style scoped>
.ion-card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.ion-button {
  background-color: #3880ff;
}
.ion-input {
  border-radius: 8px;
}
.ion-margin-top {
  margin-top: 16px;
}
</style>
