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