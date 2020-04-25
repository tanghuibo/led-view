<template>
  <div>
    <div
      v-if="showView"
      :style="{ color: this.textColor, backgroundColor: this.backgroundColor }"
      class="textView"
    >
      <div class="textViewContainer">
        <marquee scrollamount="30" class="marqueeView">
          {{ this.text }}
        </marquee>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showView: false,
      text: "",
      textColor: "red",
      backgroundColor: "black",
    };
  },
  methods: {
    show(data) {
      this.showView = true;
      this.text = data.text;
      this.textColor = data.textColor;
      this.backgroundColor = data.backgroundColor;
      console.log(data);
    },
  },
};
</script>

<style>
.textView {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
.textViewContainer {
  position: absolute;
  top: -100vw;
}
.marqueeView {
  height: 100vw;
  width: 100vh;
  font-size: 100vw;
  transform: rotate(90deg);
  transform-origin: bottom left;
}
</style>
