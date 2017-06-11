var fs = require('fs');
const imagesFolder = './Images/';
const images=[];

fs.readdir(imagesFolder, (err, files) => {
  if(err) throw err;
  files.forEach(file => {
    images.push(file);
  });
})

module.exports = {images:images};