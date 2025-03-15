<template>
  <v-container class="d-flex flex-column align-center justify-center min-vh-100">
    <v-card class="pa-5" width="800">

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
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.city }}</td>
            <td class="text-right">
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
</template>

<script>
export default {
  name: 'Tabela',
  data() {
    return {
      mostrarHome: true,
    };
  },
  methods: {
    excluir(index) {
    this.items.splice(index, 1);
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