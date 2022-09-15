const target = document.querySelector('.target');

document.addEventListener('mousemove', event =>{
	target.style.left = event.pageX;
	target.style.top = event.pageY;
})
