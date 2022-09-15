const target = document.getElementsByClassName('.target');

document.addEventListener('mousemove', event =>{
	target.style.left = event.pageX+'px';
	target.style.top = event.pageY+'px';
});
