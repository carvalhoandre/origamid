const Jimp = require("jimp");
const fs = require("fs");

const images = fs.readdirSync("./images/");

images.forEach(function (file) {
  Jimp.read("./images/" + file)
    .then(function (img) {
      img
        .cover(1000, 400)
        .greyscale()
        .write("otimizadas/" + file);
    })
    .catch(function (error) {
      console.error(error);
    });
});
