<template>
  <div class="home">
    <router-link to="/writer/create">
      <v-btn>Writer</v-btn>
    </router-link>

    <v-container>
      <v-row>
        <v-col cols="3" v-for="writer in writers" :key="writer.id">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>{{writer.nama_depan}}</v-card-title>
            </v-img>
            <v-card-text>{{writer.nama_belakang}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from "../../config/firebase";
const db = firebase.firestore();

export default {
  name: "Home",
  data() {
    return {
      writers: []
    };
  },
  methods: {
    async getData() {
      try {
        // melakukan await data
        let writerData = await db.collection("writer").get();
        // buat variable untuk menampung
        let allWriters = [];
        writerData.forEach(doc => {
          allWriters.push({
            id: doc.id,
            key: doc.id,
            ...doc.data()
          });
        });
        this.writers = allWriters;
      } catch (error) {
        console.warn(error);
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
