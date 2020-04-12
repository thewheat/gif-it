
function imageFilePickerCallback(filepicker, reader, callback){
	filepicker.on('change', function(e,b){
		if(e.target.files.count == 0) return;
		createReader(e.target.files[0], function(image) {
			callback(image);
		});
	});

}

function createReader(file, whenReadyCallback) {
	reader.onload = function(evt) {
		var image = new Image();
		image.onload = function(evt) {
			if (whenReadyCallback) whenReadyCallback(image);
		};
		image.src = evt.target.result;
	};
	reader.readAsDataURL(file);
}

function drawImageToCanvas(image, canvas, options){
	options = options || {};
	const scale = {
		x: options.scale_x || 2,
		y: options.scale_y || 1
	}
	const ctx = canvas.getContext('2d');
	canvas.width = image.width * scale.x;
	canvas.height = image.height * scale.y;
	ctx.setTransform(scale.x, 0, 0, scale.y, 0, 0);
	ctx.clearRect(0, 0, canvas.width * scale.x, canvas.height * scale.y);
	ctx.drawImage(image, 0, 0);
}
