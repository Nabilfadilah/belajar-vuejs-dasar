import { createApp } from "vue";
import HelloVue from "./components/HelloVue.vue";
import TextInterpolation from "./components/TextInterpolation.vue";
import RawHtml from "./components/RawHtml.vue";
import AttributeBinding from "./components/AttributeBinding.vue";
import BooleanAtribute from "./components/BooleanAtribute.vue";
import MultipleAttibute from "./components/MultipleAttibute.vue";

// untuk menampilkan component
// createApp(HelloVue).mount("#app");
// createApp(TextInterpolation).mount("#app");
// createApp(RawHtml).mount("#app");
// createApp(AttributeBinding).mount("#app");
// createApp(BooleanAtribute).mount("#app");
createApp(MultipleAttibute).mount("#app");