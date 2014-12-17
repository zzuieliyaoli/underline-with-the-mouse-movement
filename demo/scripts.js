window.onload = function(){

	var liArray = document.getElementById("wrapper").getElementsByTagName("li"),
		line = document.getElementById("wrapper").querySelector("span.move"),
		nowNum = 0;

	// beginLeft 怎样记录
	$each(liArray,function(o,i){
		// var num = i;
		// console.log(num)
		// IE9 事件处理程序  P373 mouseover mouseout
		// var beginLeft = ??????
		var endLeft = i * 154;
		o.addEventListener("click", function(){
			nowNum = i;
		}, false);

		o.addEventListener("mouseover", function(event){
			clearTimeout(tId);
			var tId = setTimeout(function(){
				line.style.left = endLeft + "px";
				// leftMove(o,beginLeft,endLeft);
			},20);
		}, false);

		o.addEventListener("mouseout", function(event){
			clearTimeout(ttId);
			var ttId = setTimeout(function(){
				line.style.left = nowNum * 154 + "px";
			},20);
		}, false);
	});

	// 动画效果

	// 移入移出

	// 点击链接，跳转后，被选定

	function $each(arr, callback, thisp){
		if (arr.forEach) {
			arr.forEach(callback,thisp);
		}else {
			for (var i = 0, len = arr.length; i < len; i++){
				callback.call(thisp, arr[i], i, arr);
			}
		}
	}

	function leftMove(elem, begin, end){
		var elemLeft = begin;
		console.log(begin);
		var tId = setTimeout(function(){

			if (elemLeft >= end) {
				clearTimeout(tId);
				elem.style.left = end + "px";
			}else{
				elemLeft = (begin + (elemLeft / 6 )) + "px";
				elem.style.left = elemLeft;
				// console.log("moveLeft");
				// console.log(elemLeft);
				setTimeout(arguments.callee, 20);
			}
			
		},20);
	}



};

// css3动画