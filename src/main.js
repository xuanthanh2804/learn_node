import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
createApp(App).use(router).mount("#app");
