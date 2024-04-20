var span = document.getElementsByTagName('span')[0];
// ++ -> code ajilah bolgond negeer nemegduuleh code
// -- -> code ajilah bolgond negeer bagasgah code
var count=0;
function nemeh(){
	count++;
	span.innerText=count;
	span.style.color="green";
}
function hasah(){
	count--;
	span.innerText=count;
	span.style.color="red";
}
function reset1(){
	count=0;
	span.innerText=0;
}