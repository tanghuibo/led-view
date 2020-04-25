import colorUtils from "@/data/colorUtils";
const colorList = colorUtils.getColorList();
export default {
  render(h) {
      console.log(this);
    return h(
      "cube-select",
      {
        style: {
          color:
            this.$attrs.value == null || this.$attrs.value == "#FFFFFF"
              ? "black"
              : this.$attrs.value,
        },
        attrs: {
          ...this.$attrs
          
        },

        props: {
            options: colorList
        },
        on: {
          ...this.$listeners,
        },
      },
      this.$slots.default
    );
  },
};
