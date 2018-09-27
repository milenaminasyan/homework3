 const someSet = function( g, b, c) {
 	return g + b - c;
 };
 	someSet(6, 8, 1);


 
 const returnSmt = function(){
 	return 1;
 };


const takes = function(a, b){
	console.log(0);
};

 
const strings = function(a, b, c){
	if (a.length > b.length && a.length > c.length){
		return(a);
	} else if (b.length > a.length && b.length > c.length){
		return(b);
	} else if(c.length > b.length && c.length > a.length){
		return (c);
	}
}; strings('hello', 'no', 'bye');



const numbers = function(a, b){
  	if(a === b){
     	return 0;
	} else if(a > b){
     	return 1;
    } else if(b > a) {
     	return -1;
    }

};
	numbers(5, 6);


const multiplication = function (g, d){
	return g * d;
};
	multiplication(4, 6);



const division = function(a, c) {
	const b = a / c;
		return b;
};	division(6, 3);



const triangleArea = function (base, height){
	const a = multiplication(base,height); 
    const m = division(a, 2);
		return m;	
};
	triangleArea(10, 15);




const numLength = function(a){
	return a.length;
}; 
	numLength("34");



const twoStrings = function(a, b, c){
	if ((a.length + b.length) > c ) {
		return 1;
	} else 
		return -1;
}; 
	twoStrings('to', 'bee', 2 );




const runStuff = function(x, c, v){
	if (v === 'triangle'){
		const f = x * c / 2;
			return f;
	} else if (v === 'rectangle'){
		const g = x * c;
			return g;
	} else 
			return -1;

}; runStuff(10, 5, 'good');



console.log(5 + 6);




