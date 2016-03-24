// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
var result = "";
// primatives 
if (typeof obj === 'number' || typeof obj === 'boolean') {
	return obj.toString();
} 
if (obj === null) {
	return String(null);
}
if (typeof obj === 'string') {
	return '"' + obj + '"';

}

//Array

if (Array.isArray(obj)) {
  var str="";

  // if (obj.length === 0) str = '[]';

  for (var i = 0; i<obj.length; i++) {
    if (obj[i].length === 0) str = '[]';
   
   if (obj.length === 1 && typeof obj[i] !== 'object') {
    if (typeof obj[i] === 'string') {
     str += '"' + obj[i] + '"' + ",";
    } else {
    str += obj[i] + ",";
    }
   }

   if (typeof obj[i] === 'string' && obj.length > 1) {
     str += '"' + obj[i] + '"' + ",";
   
   }

   if (typeof obj[i] !== 'string' && obj.length > 1 && i < obj.length -1 &&
    obj[i].toString() !== "[object Object]") {
    str += obj[i]+ ",";
   }

   if (typeof obj[i] !== 'string' && obj.length > 1 && i === obj.length-1 &&
    !Array.isArray(obj[i]) && obj[i].toString() !== "[object Object]") {
    str += obj[i] + ",";

   }

   if (Array.isArray(obj[i]) && obj[i].length !== 0) {

       str += stringifyJSON(obj[i]) + ",";
   }

   for (var key in obj[i]) {
    if (typeof obj[i][key] === 'string') {
      result += "{" + '"' + key + '":' + '"' + obj[i][key] + '"' + "}" + ",";
    } else if (typeof obj[i][key] === 'number' || typeof obj[i][key] === 'boolean' ||
      obj[i][key] === null){
      result +='"' + key + '":' + obj[i][key] + ",";
    } else if (typeof obj[i][key] === 'object') {
      result +='"' + key + '":' + stringifyJSON(obj[key]) + "}";
    }
  }


  }
   return str !== "" ? "[" + str.slice(0,-1) + "]" : "[" + result.slice(0,-1) + "]";
} 

if (Object.keys(obj).length === 0) return '{}';

  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      result = '"' + key + '":' + '"' + obj[key] + '"' + ",";
    } else if (typeof obj[key] === 'number' || typeof obj[key] === 'boolean' ||
      obj[key] === null) {
      result +='"' + key + '":' + obj[key] + ",";
    } else if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
      result ='"' + key + '":' + stringifyJSON(obj[key]) + "}";
    } else if (typeof obj[key] === 'object' && obj[key].length === 0) {
      result +='"' + key + '":' + '[]' + ",";
    }
    else if (typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0) {
      result +='"' + key + '":' + '{}' + ",";
    }
  }

    return "{" + result.slice(0,-1) + "}";
  
};
