window.onload = function(){

	var liArray = document.getElementById("wrapper").getElementsByTagName("li"),
		line = document.getElementById("wrapper").querySelector("span.move"),
		nowNum = 0;

	$each(liArray,function(o,i){
		
		var endLeft = i * 154;
		o.addEventListener("click", function(){
			nowNum = i;
		}, false);

		o.addEventListener("mouseover", function(event){
			clearTimeout(tId);
			var tId = setTimeout(function(){
				line.style.left = endLeft + "px";
			},20);
		}, false);

		o.addEventListener("mouseout", function(event){
			clearTimeout(ttId);
			var ttId = setTimeout(function(){
				line.style.left = nowNum * 154 + "px";
			},20);
		}, false);
	});

	function $each(arr, callback, thisp){
		if (arr.forEach) {
			arr.forEach(callback,thisp);
		}else {
			for (var i = 0, len = arr.length; i < len; i++){
				callback.call(thisp, arr[i], i, arr);
			}
		}
	}

	



};

