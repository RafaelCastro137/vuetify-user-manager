<template>
  <v-container class="d-flex flex-column align-center justify-center min-vh-100">
    <v-card class="pa-5" width="800">
      <v-alert v-if="alert" closable title="Usuários salvo" class="mb-5" width="500"
      text="As alterações foram salvas com sucesso." type="success" variant="tonal"></v-alert>
      <v-alert v-if="alertDelete" closable title="Usuário excluído" class="mb-5" width="500"
      text="Usuário foi excluído com sucesso." type="info" variant="tonal"></v-alert>
      <h1 class="text-overline">Lista de Usuário</h1>
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left font-weight-black">
              Nome
            </th>
            <th class="text-left font-weight-black">
              Idade
            </th>
            <th class="text-left font-weight-black">
              Cidade
            </th>
            <th class="text-left font-weight-black">
              Cargo
            </th>
            <th class="text-left font-weight-black">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.position }}</td>
            <td class="text-right">
              <v-btn @click="editar(item, index)" class="ma-2" color="green">
                Editar
                <v-icon icon="mdi-pencil" end></v-icon>
              </v-btn>
              <v-btn @click="excluir(index)" class="ma-2" color="red">
                Excluir
                <v-icon icon="mdi-delete" end></v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
      <p v-if="items.length === 0" class="text-center mt-6 pt-5 mb-5"> Não há usuários cadastrados</p>
    </v-card>
  </v-container>

  <div class="text-center pa-4">
    <v-dialog v-model="dialog" max-width="600">
      <v-card prepend-icon="mdi-account" title="User Profile">
        <v-card-text>
          <v-text-field v-model="usuarioSelecionado.name"  variant="underlined" label="Nome" required></v-text-field>
          <v-text-field v-model="usuarioSelecionado.age"  variant="underlined" label="Idade"></v-text-field>
          <v-text-field v-model="usuarioSelecionado.city"  variant="underlined" label="Cidade" required></v-text-field>
          <v-select  v-model="usuarioSelecionado.position" variant="underlined" label="Cargo" :items="['Convidado', 'Admin', 'Gerente']"></v-select>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text="Fechar" variant="tonal" @click="dialog = false"></v-btn>
          <v-btn color="success" text="Salvar" variant="tonal" @click="salvar"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <div class="text-center pa-4">
    <v-dialog v-model="dialogExcluir" max-width="600" persistent>
      <v-card
        prepend-icon="mdi-delete"
        text="Tem certeza que deseja excluir permanentemente o usuário?"
        title="Excluir usuário"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="dialogExcluir = false"> Cancelar </v-btn>

          <v-btn @click="confirmarExclusao" color="red"> Sim, excluir </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Tabela',
  data() {
    return {
      dialog: ref(false),
      dialogExcluir: ref(false),
      mostrarHome: true,
      alert: false,
      alertDelete: false,
      usuarioSelecionado: ref({ name: "", age: "", city: "", position: "" }),
      indexSelecionado: null, 
    };
  },
  methods: {
    excluir(index) {
      this.indexSelecionado = index; 
      this.dialogExcluir = true;
      this.alert = false;
    },
    confirmarExclusao() {
      this.alertDelete = true;
      this.dialogExcluir = false;
      this.items.splice(this.indexSelecionado, 1);
    },
    editar(item, index) {
      this.alert = false;
      this.usuarioSelecionado = { ...item }; 
      this.indexSelecionado = index; 
      this.dialog = true;
    },
    salvar() {
      if (this.indexSelecionado !== null) {
        this.items[this.indexSelecionado] = { ...this.usuarioSelecionado }; 
        this.indexSelecionado = null;
      }
      this.alert = true;
      this.dialog = false; 
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>