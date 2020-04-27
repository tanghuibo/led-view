<template>
  <div id="app">
    <text-set-from v-if="step === 1" @submit="showData" />
    <show-text-view v-show="step == 2" ref="showTextView" />
  </div>
</template>

<script>
import TextSetFrom from "./components/TextSetFrom";
import ShowTextView from "./components/ShowTextView";
export default {
  name: "App",
  components: {
    TextSetFrom,
    ShowTextView,
  },
  data() {
    return {
      step: 1,
    };
  },
  mounted() {

  },
  methods: {
    showData(data) {
      this.step = 2;
      this.$refs.showTextView.show(data);
    },
  },
};
</script>

<style>

</style>
