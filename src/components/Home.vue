<template>
    <v-container class="d-flex align-center justify-center fill-height">
        <v-card class="pa-5" width="100%" height="100%">
            <v-row class="d-flex align-center justify-center fill-height">
                <p class="text-overline text-subtitle-2 text-center"> Bem vindo(a)</p>
                <v-col cols="12" class="d-flex align-center justify-center">
                    <v-img :src="loader" alt="Logo" max-width="250" class="mb-5" />
                </v-col>
                
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
import loader from '../assets/load-blue.gif';

export default {
    name: 'Home',
    setup() {
        return {
            loader
        };
    }
};
</script>