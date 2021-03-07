//Playing with Array

var fruits = ['apple', 'watermelon', 'strawberry', 'banana','orange']
console.log(fruits.length);
var add = fruits.push('avocado');
console.log(fruits);

fruits.forEach(function (item, indice, array) {
	console.log(item, indice);
  });

  


//Divided by 3 = Fizz
//Divided by 5 = Buzz
//Divided by 3 and 5 = FizzBuzz
//Not divided neither by 3 nor 5 = number
//Not a number = 'not a number'

const result = fizzBuzz('meu nome');
console.log(result);

function fizzBuzz(num) {
    if (num % 3 ===0 && num % 5 === 0)
        return 'FizzBuzz';
    if (typeof num  !== 'number')
        return 'Not a number';
    if (num % 3 === 0)
        return 'Fizz';
    if (num % 5 === 0)
       return 'Buzz';
	return num;
	
}

    ///New code 
    
for (var i = 1; i <= 100; i++) {
	var isDividibleByThree = i % 3 === 0;
	var isDivisibleByFive = i % 5 === 0;

	if (isDividibleByThree && isDivisibleByFive) {
		console.log('FizzBuzz');
	}
	else if (isDividibleByThree) {
		console.log('Fizz');
	}
	else if (isDivisibleByFive) {
		console.log('Buzz');
	}
	else {
		console.log(i);
	}
}

//New code
//Speed Limit = 70 mph
//each 5mph over the limit get 1 point
//if points are > 12 -> license is suspended

verifySpeed(180);
function verifySpeed (speed) {
	const maxSpeed = 70;
	const mphPerPoint = 5;
	if (speed <= maxSpeed)
		console.log('Ok');
	else {
		const points = Math.floor((speed - maxSpeed) / mphPerPoint);
		if (points >= 12)
		console.log('License Suspended');
		else 
		console.log('points', points);
	}
}
//New code
//Even and odd numbers

showTypeOfNumber(25)
function showTypeOfNumber(num){
	for (let i = 0; i <=num; i++) {
		if (i % 2 === 0)
		   console.log(i,'EVEN')
		   else
		   	console.log(i,'ODD');
		   	 
	}
}

//New code
//Reading objects propriety

const film = {
	title: 'All About My Mother',
	year: 1999,
	director: 'Pedro Almodovar',
	mainPersonagem: 'Manuela Echevarria',
} 
showProprieties(film);
function showProprieties(obj) {
	for (prop in obj)
		if(typeof obj[prop] === 'string')
			console.log(prop,obj[prop])
}


//New code
//Print number that a sum of the numbers that are multiple of 3 and 5 

sum(20);
function sum(num) {
	let multipleOf3 = 0;
	let multipleOf5 = 0;
	for(i =0;i <= num; i++) {
		(i % 3 === 0)
		multipleOf3 += i;
		if(i % 5 === 0)
		multipleOf5 += i;
	}
	console.log(multipleOf3 + multipleOf5)

}

//New code
//Showing and  Couting  Asterisk 

showAsterisk(10);
function showAsterisk(lines) {
	let main = '';
	for(let line = 1; line <= lines; line++) {
		main += '*';
		console.log(main);
	}
}
