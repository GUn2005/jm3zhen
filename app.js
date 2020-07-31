const texts = [
  "你好像很得空酱",
  "哇佬你们可以笑吗",
  "玩玩啊你以为",
  "你懂我在讲什么吗?",
  "我在讲'什么'啦",
  "你的鱼圆面来了吗?",
  "丝毫不慌"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
