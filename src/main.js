import Vue from "vue";
import OneSignal from "onesignal-vue";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(OneSignal);

new Vue({
  render: h => h(App),
  beforeMount() {
    this.$OneSignal.init({
      appId: "<You OneSignal application identifier",
      allowLocalhostAsSecureOrigin: true,
    });
  },
}).$mount("#app");
