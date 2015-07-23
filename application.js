	
function myFunction(){
	var oneNumber = document.getElementById("oneNumber"); 
	var largeNumber = document.getElementById("largeNumber");
	var counter = parseInt(oneNumber.value);
	var total = 0;
	while (counter <= largeNumber.value){
		total = total + counter; 
		counter++;	
	}
	alert (total); 
}
