<template>
  <div>
    <div
      v-if="showView"
      :style="{ color: this.textColor, backgroundColor: this.backgroundColor }"
      class="textView"
    >
      <div class="textViewContainer">
        <marquee :scrollamount="speed" class="marqueeView">
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
      speed: 30
    };
  },
  methods: {
    show(data) {
      this.showView = true;
      this.text = data.text;
      this.textColor = data.textColor;
      this.backgroundColor = data.backgroundColor;
      this.speed = data.speed;
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
