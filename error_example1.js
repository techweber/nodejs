// Throw a Reference error because b is undefined.

try {
	const a = 1;
	const c = a + b;
} catch(err){
	console.log(err);
}