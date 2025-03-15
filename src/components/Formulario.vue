<template>
  <v-container class="d-flex flex-column align-center justify-center min-vh-100">
    <v-row class="text-center">
      <v-card class="pa-5" width="500">
        <h1 class="text-overline">Cadastrar usuário</h1>
        <v-col cols="12" class="d-flex justify-center">
          <v-img :src="usuario" alt="Logo" max-width="200" class="mb-5" />
        </v-col>

        <v-text-field v-model="form.name" label="Nome" outlined dense></v-text-field>
        <v-text-field v-model.number="form.age" label="Idade" type="number" outlined dense></v-text-field>
        <v-text-field v-model="form.city" label="Cidade" outlined dense></v-text-field>

        <v-btn @click="submitForm" color="primary" block class="mt-4">
          Enviar
        </v-btn>
      </v-card>
    </v-row>
    <v-alert v-if="alertError" closable title="Campo não informado"
      text="Verifique se os campos foram preenchidos corretamente" type="warning"></v-alert>
  </v-container>

</template>

<script>
import { ref } from 'vue';
import usuario from '../assets/usuario.png';

export default {
  name: 'Formulario',
  emits: ['form-enviado'],
  setup(props, { emit }) {
    const form = ref({
      name: '',
      age: null,
      city: ''
    });

    const alertError = ref(false);

    const submitForm = () => {
      if (
        form.value.name === '' ||
        form.value.age === null ||
        form.value.city === ''
      ) {
        alertError.value = true;
      }
      else {
        alertError.value = false;
        emit('form-enviado', form.value);
        form.value = { name: '', age: null, city: '' };
      }
    };

    return {
      form,
      submitForm,
      usuario,
      alertError,
    };
  }
};
</script>