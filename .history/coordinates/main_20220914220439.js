const target = document.getElementsByClassName('target')[0];
// const vl = document.getElementsByClassName('vl')[0];
const hr =document.getElementsByClassName('hr')[0];
const coor = document.querySelector('#coor');
const vl = document.getElementById('vr');

document.addEventListener('mousemove', event =>{
	target.style.left = event.clientX - target.scrollWidth/2 +'px';
	target.style.top =  event.clientY -target.scrollHeight/2+'px';
	vl.style.left = event.clientX +'px';
	console.log(vl.style.left);
	// vl.style.height = document.height;
	coor.innerHTML=`${event.clientX}px, ${event.clientY}px`;
	console.log("pagex ",event.pageX,"pagey ",event.pageY);
});
