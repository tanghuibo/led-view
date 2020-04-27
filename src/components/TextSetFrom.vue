<template>
  <div>
    <cube-form
      :model="model"
      :schema="schema"
      :immediate-validate="false"
      :options="options"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>

<script>
import ColorSelect from "./ColorSelect";
export default {
  name: "TextSetFrom",
  components: {},
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        text: "让座请叫我",
        textColor: "#FF0000",
        backgroundColor: "#000000",
      },
      schema: {
        groups: [
          {
            legend: "内容设置",
            fields: [
              {
                type: "input",
                modelKey: "text",
                label: "显示内容",
                props: {
                  placeholder: "请输入",
                },
                rules: {
                  required: true,
                },
                // validating when blur
                trigger: "blur",
              },
              {
                component: ColorSelect,
                modelKey: "textColor",
                label: "文字颜色",
                rules: {
                  required: true,
                },
              },
              {
                component: ColorSelect,
                modelKey: "backgroundColor",
                label: "背景颜色",
                rules: {
                  required: true,
                },
              },
            ],
          },
          {
            fields: [
              {
                type: "submit",
                label: "提交",
              },
            ],
          },
        ],
      },
      options: {
        scrollToInvalidField: true,
        layout: "standard", // classic fresh
      },
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.$emit("submit", this.model);
    },
  },
};
</script>
