//your JS code here. If required.
let a=document.querySelector("#colorSelect");
let b=document.querySelector("input");
b.addEventListener('click',()=>{
	let selected=a.options[a.selectedIndex];
	if(selected){
		a.removeChild(selected);
	}else{
		alert("no option selected");
	}
});