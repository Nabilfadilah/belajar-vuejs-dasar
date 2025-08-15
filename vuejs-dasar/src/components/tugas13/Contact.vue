<!-- Tugas 13, Sekarang kita akan modifikasi untuk halaman contact.html. Kita akan buat form untuk contact kedalam component baru yaitu ContactForm. 
Selanjutnya kita akan buat model dalam ContactForm tersebut -->

<script setup>
import ContactForm from "./ContactForm.vue";
import ContactList from "./ContactList.vue";
import {reactive} from "vue";

// reactive fungsi bawaan dari Composition API yang digunakan untuk membuat objek reaktif, yaitu objek yang otomatis terdeteksi perubahannya oleh Vue.
// dan karena object, sebaiknya pakai reactive
const contact = reactive({
  name: "",
  email: "",
  age: 0,
  type: "Regular",
  complain: false,
  message: "",
});
</script>

<template>
  <div class="form-container">
    <!-- component model bisa menambahkan model untuk memanggil semua data form inputnya -->
    <ContactForm v-model="contact" />

    <h1>Preview</h1>
    <div>
      <p>
        Name: <b>{{ contact.name }}</b>
      </p>
      <p>
        Email: <b>{{ contact.email }}</b>
      </p>
      <p>
        Age: <b>{{ contact.age }}</b>
      </p>
      <p>
        Type: <b>{{ contact.type }}</b>
      </p>
      <p>
        Complain: <b>{{ contact.complain }}</b>
      </p>
      <p>
        Message: <b>{{ contact.message }}</b>
      </p>
    </div>

    <!-- contactList ketika di panggil menggunakan derective model tambah juga derective argumentnya -->
    <!-- <ContactList 
        v-model:name="contact.name"
        v-model:email="contact.email"
        v-model:age="contact.age"
        v-model:type="contact.type"
        v-model:complain="contact.complain"
        v-model:message="contact.message"
     /> -->
  </div>
</template>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
