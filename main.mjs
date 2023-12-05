const { createApp } = Vue;

createApp({
  data() {
    return {
      list: null,
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((success) => (this.list = success.data.response));
    }
  },
}).mount("#app");
