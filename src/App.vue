<template>
  <v-app>
    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-overline">Gerenciamento de Usuários</v-app-bar-title>
    </v-app-bar>
        <v-navigation-drawer v-model="isDrawerOpen" width="300">
          <v-list>
            <v-list-subheader class="text-overline">Menu</v-list-subheader>
            <v-list-item prepend-icon="mdi-home" class="text-overline" @click="botaoHomeClicado">Home</v-list-item>
            <v-list-group>
              <template #activator="{props}">
                <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-circle"
                class="text-overline"
                >Usuários</v-list-item>
              </template>
              <v-list-item prepend-icon="mdi-account-plus-outline" @click="botaoCadastrarClicado">Cadastrar Usuarios</v-list-item>
              <v-list-item prepend-icon="mdi-account-details" @click="botaoListarClicado">Lista de Usuarios</v-list-item>
            </v-list-group>
            <v-list-item prepend-icon="mdi-information-outline" class="text-overline" @click="botaoHomeClicado">Sobre</v-list-item>

          </v-list>
        </v-navigation-drawer>

    <v-main>
      <Home v-if="mostrarHome" />
      <Formulario v-if="mostrarFormulario" @form-enviado="adicionarItem" />
      <Tabela v-if="mostrarTabela" :items="items" />
    </v-main>
  </v-app>
</template>

<script>

import Home from './components/Home.vue'
import Formulario from './components/Formulario.vue'
import Tabela from './components/Tabela.vue'

export default {
  name: 'App',
  
  components: {
    Home, Formulario, Tabela
  },
  
  data() {
    return {
      mostrarHome: true,
      mostrarFormulario: false,
      mostrarTabela: false, 
      isDrawerOpen: false, 
      items: []
    };
  },
  methods: {
    adicionarItem(novoItem) {
      this.items.push(novoItem);
      this.mostrarTabela = true;
    },
    botaoHomeClicado(){
      this.mostrarHome = true;
      this.mostrarTabela = false;
      this.mostrarFormulario = false;
    },
    botaoListarClicado(){
      this.mostrarHome = false;
      this.mostrarTabela = true;
      this.mostrarFormulario = false;
    },
    botaoCadastrarClicado(){
      this.mostrarHome = false;
      this.mostrarTabela = false;
      this.mostrarFormulario = true;
    }
  }
};
</script>
