const target = document.getElementsByClassName('target')[0];
const vl = document.getElementsByClassName('vl')[0];
const hr =document.getElementsByClassName('hr')[0];

document.addEventListener('mousemove', event =>{
	target.style.left = event.pageX+'px';
	target.style.top = event.pageY +'px';
	vl.style.left = event.pageX +'px';
	vl.style.height = document.height;
	hr.style.top = event.pageY +'px';
	console.log("pagex ",event.pageX,"pagey ",event.pageY);
});
