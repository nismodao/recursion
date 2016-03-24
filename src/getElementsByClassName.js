// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//document.body
//firstChild
//nextElementSibling to traverse the DOM
//className gets you the names will be a string
//match( new RegExp(className, 'g' ))

var getElementsByClassName = function(className,source,result){
  // your code here
result = result || [];
source = source || document.body;
if (source.className.match(new RegExp(className, 'g'))) result.push(source);
source = source.firstElementChild;
while (source) {
	getElementsByClassName(className,source,result);
	source = source.nextElementSibling;
	}
return result;		
};

//With helper function
// var getElementsByClassName = function(className){
//   // your code here


// function helper (className,source,result) {

// result = result || [];
// source = source || document.body;

// if (source.className.match(new RegExp(className, 'g'))) result.push(source);
// source = source.firstElementChild;

// while (source) {
// 	helper(className,source,result);
// 	source = source.nextElementSibling;
// 	}
// 	return result;		


// 	}
// 	//getElementsByClassName(className);
// };
//iterative approach
// var result = [];

// if (document.body.className.match( new RegExp(className, 'g' ) )) result.push(document.body);

// source = document.body.firstElementChild;


// while (source) {


   
//     if (source.className !== undefined && source.className.match( new RegExp(className, 'g' ))) {
//       result.push(source);
    
//     } 

//     source = source.nextElementSibling || source.firstElementChild;


	
// 	}
// 	return result;

// };

