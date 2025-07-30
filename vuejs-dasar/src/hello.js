import { createApp } from "vue";
import HelloVue from "./components/HelloVue.vue";
import TextInterpolation from "./components/TextInterpolation.vue";

// untuk menampilkan component
createApp(HelloVue).mount("#app");
createApp(TextInterpolation).mount("#app");