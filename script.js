function calculateMinCost() {
  //your code here
	var inputValue = document.getElementById("rope-lenghts").value;
	var arr = inputValue.split(",");
	arr.sort(function (a,b) {
		return a-b;
	})
	var cost=0;
	while(arr.length>1){
		var res = Number(arr[0] + arr[1]);
		arr.push(res);
		 cost += res;
		arr.shift();
		arr.shift();
		arr.sort(function (a,b){return a-b;})
	}  
	document.getElementById("result").textContent = cost;
  
  
}  
