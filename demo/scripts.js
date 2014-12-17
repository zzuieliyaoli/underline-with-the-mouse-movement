window.onload = function(){

	var liArray = document.getElementById("wrapper").getElementsByTagName("li"),
		liOffsetWidth = liArray[0].offsetWidth,
		line = document.getElementById("wrapper").querySelector("span.move"),
		nowNum = 0;
		line.style.width = parseInt(liOffsetWidth) + "px";


	$each(liArray,function(o,i){
		
		var endLeft = i * liOffsetWidth;
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
				line.style.left = nowNum * liOffsetWidth + "px";
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

