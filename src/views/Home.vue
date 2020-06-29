<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="3" v-for="book in books" :key="book.id">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>{{book.judul_buku}}</v-card-title>
            </v-img>
            <v-card-text>{{book.penerbit}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from "../config/firebase";
const db = firebase.firestore();

export default {
  name: "Home",
  data() {
    return {
      books: []
    };
  },
  methods: {
    getData() {
      db.collection("books").onSnapshot(snapshot => {
        const listItem = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        this.books = listItem;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
