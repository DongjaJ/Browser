const target = document.querySelector('.target');

document.addEventListener('mousemove', event =>{
	target.style.left = event.pageX+'px';
	target.style.top = event.pageY+'px';
});
