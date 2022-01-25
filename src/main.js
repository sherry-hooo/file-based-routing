import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "./plugins";
// import router from "./plugins/vue-router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
