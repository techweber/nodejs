const sharp = require('sharp');

// original image
let originalImage = 'original-image.jpg';

// file name of the cropped image
let outputImage = 'cropped-image.jpg';

sharp(originalImage).extract({width: 1600,height:900,left:60,top:40}).toFile(outputImage)
.then(function(new_file_info){
	console.log('Image cropped and saved');
})
.catch(function(err){
	console.log('An error occurred');
});