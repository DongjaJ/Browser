const target = document.getElementsByClassName('.target')[0];
const vl = document.getElementsByClassName('vl')[0];

document.addEventListener('mousemove', event =>{
	target.style.left = event.pageX+'px';
	target.style.top = event.pageY+'px';
	vl.style.left = event.pageX+'px';
	console.log("pagex ",event.pageX,"pagey ",event.pageY);
});
