/* Variables */
var maxclassname = "maximum-image-size-toobig";

/* We find images bigger than the viewport */

function findBiggerImages() {
	var images = document.querySelectorAll('img');
	// console.log("findBiggerImages launched", "images found", Date.now());
	var viewport = getViewportSize();
	// console.log("findBiggerImages launched", "viewport", viewport);
	images.forEach(function (item) {
		item.classList.remove(maxclassname);
		// console.log("forEach before", item);
		if (
			parseInt(window.getComputedStyle(item).getPropertyValue('width'),10) > viewport.w ||
			parseInt(window.getComputedStyle(item).getPropertyValue('height'),10) > viewport.h
		) {
			item.classList.add(maxclassname);
		}
		// console.log("forEach after", item, window.getComputedStyle(item).getPropertyValue('width'), window.getComputedStyle(item).getPropertyValue('height'));
	});
}

function getViewportSize() {
	var viewport = {};
	viewport.w = document.documentElement.clientWidth;
	viewport.h = document.documentElement.clientHeight;
	return viewport;
}

// taken from http://underscorejs.org/#debounce
function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}


// if(console) console.log('maximum-image-size loaded');
findBiggerImages();
window.addEventListener('resize',debounce( findBiggerImages, 500 ) );