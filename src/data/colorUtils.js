let data = [
  "白色",
  "FFFFFF",
  "红色",
  "FF0000",
  "绿色",
  "00FF00",
  "蓝色",
  "0000FF",
  "洋红",
  "FF00FF",
  "墨绿",
  "00FFFF",
  "黄色",
  "FFFF00",
  "黑色",
  "000000",
  "爱丽丝兰",
  "F0F8FF",
  "碧绿",
  "70DB93",
  "巧克力色",
  "5C3317",
  "蓝紫色",
  "9F5F9F",
  "黄铜",
  "B5A642",
  "亮金",
  "D9D919",
  "褐色",
  "A62AA2",
];

export default {
  getColorList: () => {
    let results = [];
    for (let i = 0; i < data.length; i = i + 2) {
      results.push({
        text: data[i],
        value: "#" + data[i + 1],
      });
    }
    return results;
  },
};
