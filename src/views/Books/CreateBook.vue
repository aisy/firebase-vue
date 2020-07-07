<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Nama depan" v-model="nama_depan"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Nama belakang" v-model="nama_belakang"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn @click="submitApp()">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import firebase from "../../config/firebase";
const db = firebase.firestore();

export default {
  data() {
    return {
      nama_depan: "",
      nama_belakang: ""
    };
  },
  methods: {
    async submitApp() {
      let allData = {
        nama_depan: this.nama_depan,
        nama_belakang: this.nama_belakang
      };

      try {
        let insert = await db.collection("writer").add(allData);
        if (insert) {
          alert("Data berhasil di masukkan!");
        } else {
          console.warn("ada kesalahan");
        }
        console.log(allData);
      } catch (error) {
        console.warn(error);
      }
    }
  }
};
</script>