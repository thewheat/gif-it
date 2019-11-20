const NAV = {
 "Combine": "combine.html",
 "Crop": "crop.html",
 "Flip": "flip.html",
 "Rotate": "rotate.html",
 "Resize": "resize.html",
 "GIF Viewer": "gifview.html",
 "GIF to Video": "giftovid.html",
 "Party": "party.html",
 "Deal with it": "dwi.html",
}

const nav_el = document.querySelector("nav");
for (var k in NAV){
	const a = document.createElement("a");
	a.innerText = k;
	a.href = NAV[k];
	nav_el.appendChild(a);
}