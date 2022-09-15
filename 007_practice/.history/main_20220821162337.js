const target = document.getElementsByClassName('.target');
const vl = document.getElementsByClassName('vl');

document.addEventListener('mousemove', event =>{
	target.style.left = event.pageX+'px';
	target.style.top = event.pageY+'px';
	vl.style.left = event.pageX+'px';
});
