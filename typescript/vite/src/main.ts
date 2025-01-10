import Clipboard from "clipboard";

const button = new Clipboard("button");

function handleCopy() {
  console.log("copiou");
}

button.on("success", handleCopy);
