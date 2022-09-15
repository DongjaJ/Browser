const target = document.getElementsByClassName('target')[0];
const vl = document.getElementsByClassName('vl')[0];
const hr =document.getElementsByClassName('hr')[0];

document.addEventListener('mousemove', event =>{
	target.style.left = event.clientX - target.scrollWidth/2 +'px';
	target.style.top =  event.clientY -target.scrollHeight/2+'px';
	vl.style.left = event.pageX +'px';
	vl.style.height = document.height;
	hr.style.top = event.pageY +'px';
	console.log("pagex ",event.pageX,"pagey ",event.pageY);
});
