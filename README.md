# led-view

用于生成类似 led 滚动效果的屏幕。

## 体验地址

github: http://tanghuibo.github.io/led-view/

码云: https://tanghuibo.gitee.io/led-view/

请用配合手机`竖屏`使用。

## 制作

使用框架: `vue3.0` + `cube ui`

### 竖屏变横屏

横屏通过css对显示内容进行旋转

```css
.marqueeView {
  height: 100vw;
  width: 100vh;
  font-size: 100vw;
  transform: rotate(90deg);
  transform-origin: bottom left;
}
```

最外层限制显示区域大小

```css
.textView {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
```

### 滚动字幕

```html
<marquee :scrollamount="speed" class="marqueeView">
    {{ this.text }}
</marquee>
```