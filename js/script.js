function revealMsg(){
	document.getElementById("hidden").style.display = 'block';
}

function countdownButton(){
	var currentVal = document.getElementById("countdownButton").innerHTML;
	if(newVal >= 1)
	var newVal = currentVal - 1;

	document.getElementById("countdownButton").innerHTML = newVal;
}