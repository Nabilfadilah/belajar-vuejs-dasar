<!-- tugas 15
Membuat Component Container, dimana isinya memiliki title dan content. Content pada Container ini bisa diubah -->

<script setup>
import MyButton from "./MyButton.vue";
import Container from "./Container.vue";

function clickHandler() {
    alert("You click me");
}
</script>

<template>
  <Container title="Contoh Button">
    <!-- mengakses atribute dari slot -->
     <!-- nama atributenya "counter" -->
     <template #header="attributes">
      <h1>Button App {{ attributes.counter }}</h1>
    </template>
    <template v-slot:default="attributes">
      <MyButton
        class="button"
        @click="clickHandler"
        :name="attributes.counter"
      />
    </template>
    <template v-slot:footer>
      <p>Copyright 2024 @Nabil Fadilah</p>
    </template>

    <!-- Named slot -->
    <!-- pake template dan v-slot: namaSlot -->
    <!-- <template v-slot:header>
      <h1>Button App</h1>
    </template>
    <template v-slot:default>
      <MyButton
        class="button"
        :name="'Ilham'"
        @click="() => clickHandler('ilham')"
      />
      <MyButton class="button" @click="clickHandler" name="Qolba" />
    </template>
    <template v-slot:footer>
      <p>Copyright 2024 @Nabil Fadilah</p>
    </template> -->


    <!-- Component Slot -->
    <!-- <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, enim, maiores cupiditate animi odit adipisci nemo deleniti voluptas excepturi harum fugiat esse quod nobis possimus in. Doloremque repudiandae ea eligendi.</p>
            <MyButton class="button" @click="clickHandler" name='Gordon' contoh="Fadilah" />
            <MyButton class="button" @click="clickHandler" name='ilham' /> -->
    <!-- <MyButton class="button" :name="'Ilham'" @click="() => clickHandler('ilham')" /> -->
    <!-- <MyButton class="button" @click="() => clickHandler('ilham')" /> -->
    <!-- <MyButton class="button" @click="clickHandler" name='Qolba' /> -->
    <!-- </div> -->
  </Container>
</template>

<style scoped>
.button {
  background-color: skyblue;
  color: black;
  border: none;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
}
</style>
