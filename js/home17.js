function solution (arr) {
 	arr.reverse();
 	var arrEle = arr[0];
 	var result = [];
 	arr.map(function(item) {
 		if(arrEle<=item) {
 			arrEle = item;
 			result.push(arrEle);
 		}

 	})
 	return result.reverse().filter(function(element, index) {
 		return result.indexOf(element) == index;
 	})

 	return result;
 };
 console.log(solution([12, 10, 12, 8, 7, 6]));
 console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8]));
 console.log(solution([16, 17, 4, 3, 5, 2]));
 console.log(solution([1, 2, 3, 4, 5, 4]));






 function capitalize (str) {
	str = str.replace(/\-[a-z]/g, function(x){
		str = str.replace(/^./, str[0].toLowerCase(), /-/g, '');
		return x[1].toUpperCase();
	});
	return str;
}
console.log(capitalize("background-color"));
console.log(capitalize("margin-left"));
console.log(capitalize("flex-basis"));