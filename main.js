let userNumber = parseInt(prompt('Hello! Enter a number greater than 1, please!'));

while(userNumber <= 1){
    userNumber = parseInt(prompt("Enter a number greater than 1!"));
}

let result = true;
console.log(`Your number is ${userNumber}`);

for(let i = 2; i < userNumber; i++)
{
    if(userNumber % i === 0){
        result = false;
       break;
    }
}

if(result == false){
    console.log(`Number ${userNumber} isn't a prime number!`);
}else
{
    console.log(`Number ${userNumber} is a prime number!`);
}