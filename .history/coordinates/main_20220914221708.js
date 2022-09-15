const target = document.getElementsByClassName('target')[0];
// const vl = document.getElementsByClassName('vl')[0];
const hl =document.getElementById('hr');
const coor = document.getElementById('coor');
const vl = document.getElementById('vl');


document.addEventListener('mousemove', event =>{
	target.style.left = event.clientX - target.scrollWidth/2 +'px';
	target.style.top =  event.clientY - target.scrollHeight/2+'px';
	vl.style.left = event.clientX +'px';
	hl.style.top = event.clientY +'px';

	console.log(vl.style.left);
	vl.style.height = document.height;
	coor.innerHTML=`${event.clientX}px, ${event.clientY}px`;
	coor.style.left = event.clientX + target.scrollWidth/2 +'px';
	coor.style.top =  event.clientY + target.scrollHeight/2+'px';
	console.log("pagex ",event.pageX,"pagey ",event.pageY);
});
