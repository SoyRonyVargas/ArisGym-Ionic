<template>
  <IonPage>
    <IonContent class="ion-padding">
      <IonGrid class="ion-text-center">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" size-md="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Crear Cuenta</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <!-- Campos del formulario -->
                <IonInput
                  v-model="name"
                  placeholder="Nombre"
                  fill="outline"
                  class="ion-margin-top"
                />
                <IonInput
                  v-model="email"
                  type="email"
                  placeholder="Correo electrónico"
                  fill="outline"
                  class="ion-margin-top"
                />
                <IonInput
                  v-model="password"
                  type="password"
                  placeholder="Contraseña"
                  fill="outline"
                  class="ion-margin-top"
                />
                <IonButton expand="block" class="ion-margin-top" @click="register">
                  Registrarse
                </IonButton>
                <IonText color="danger">{{ message }}</IonText>
              </IonCardContent>
            </IonCard>
            <IonText>
              ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión aquí</router-link>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<script setup>
import { ref } from 'vue';
import { registerUser } from '../database';
import { useRouter } from 'vue-router';
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonText
} from '@ionic/vue';

const name = ref('');
const email = ref('');
const password = ref('');
const message = ref('');
const router = useRouter();

const register = async () => {
  // Validación de campos vacíos
  if (!name.value || !email.value || !password.value) {
    message.value = 'Todos los campos son obligatorios.';
    return;
  }

  const success = await registerUser(name.value, email.value, password.value);
  if (success) {
    message.value = 'Registro exitoso. Ahora inicia sesión.';
    setTimeout(() => router.push('/login'), 2000);
  } else {
    message.value = 'Error en el registro.';
  }
};
</script>

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
