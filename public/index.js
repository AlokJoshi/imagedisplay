var fs = require('fs');
const imagesFolder = './images/';
const images=[];

fs.readdir(imagesFolder, (err, files) => {
  if(err) throw err;
  files.forEach(file => {
    images.push(file);
  });
})

module.exports = {images:images};