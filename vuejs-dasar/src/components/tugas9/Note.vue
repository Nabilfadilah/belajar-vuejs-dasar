 <!-- membuat halaman notes management  -->

<script setup>
import {onBeforeMount, onMounted, onUpdated, reactive, ref, useTemplateRef} from "vue";

const notes = reactive([]);
const note = ref("");
const noteInput = useTemplateRef("noteInput");
const notesList = useTemplateRef("notesList"); // list ref v-for

function addNote() {
  notes.push(note.value);
  note.value = "";
  noteInput.value.focus(); // untuk fokus ke form inputnya lagi

  // coba menambah ref pada v-for
  if(notesList.value) {
    notesList.value.forEach((li) => {
        console.info(li.textContent);
    })
  }
}

// lifeCycle hooks API
onBeforeMount(() => {
    console.info("onBeforeMount");
}) 

onMounted(() => {
    console.info("onMounted");
})

onUpdated(() => {
    console.info("onUpdated")
})

</script>

<template>
  <div>
    <h1>Buat Note</h1>
    <div class="container">
      <input
        ref="noteInput"
        type="text"
        v-model="note"
        placeholder="Tulis note disini"
      />
      <button @click="addNote" class="button">Tambah Note</button>
    </div>

    <h3>Daftar Note</h3>
    <ul class="list">
        <li v-for="note in notes" :key="note">
            {{ note }}
        </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  align-self: flex-end;
}

button:hover {
  background-color: #0056b3;
}


</style>
