<!-- membuat halaman Todo List, dimana data Todo List akan kita simpan dalam array di JavaScript -->

<script setup>
const items = [
  {
    id: 1,
    text: "Learn Vue 3",
    done: true,
  },
  {
    id: 2,
    text: "Learn Vue Router",
    done: false,
  },
  {
    id: 3,
    text: "Learn Vuex",
    done: false,
  },
];
</script>

<template>
  <div>
    <div>
      <h1>List Rendering</h1>
      <ul>
        <!-- Gunakan :key yang unik untuk setiap elemen yang diulang dengan v-for -->
        <li v-for="item in items" :key="item.id">
          {{ item.text }}
        </li>
      </ul>
    </div>

    <div>
      <h1>List for Object</h1>
      <ul v-for="item in items" :key="item.id">
        <li v-for="(value, key) in item" :key="key">
          <!-- key = properti dari object -->
          {{ key }}: {{ value }}
        </li>
      </ul>
    </div>

    <div>
      <h1>List for Range</h1>
      <!-- <ul v-for="item in items" :key="item.id">
        <li v-for="(value, key) in item" :key="key">
          {{ key }}: {{ value }}
        </li>
      </ul> -->

      <div v-for="n in 10" :key="n">
        <h4>Hello ini List for range {{ n }}</h4>
      </div>
    </div>

    <div>
      <h1>List v-for dan v-if</h1>

      <!-- ini yang SALAH -->
      <!-- <ul v-for="item in items" :key="item.id" v-if="!item.done">
        <li v-for="(value, key) in item" :key="key">{{ key }}: {{ value }}</li>
      </ul> -->

      <!-- ini yang BENAR -->
      <template v-for="item in items">
        <ul :key="item.id" v-if="!item.done">
          <li v-for="(value, key) in item" :key="key">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </template>

      <div v-for="n in 10" :key="n">
        <h4>Hello ini List v-for dan v-if {{ n }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
