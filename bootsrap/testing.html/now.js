// let points = 100;
// let type = points >= 100? 'gold': 'silver';
// console.log(type);

// function square (number){
// return number * number ;
// }

// console.log(square(2));

// console.log( false && true);

//  let highIncome = true;
//  let goodCreditScore = true;
//  let eligibleForLoan = highIncome && goodCreditScore;
//  let applicationRefused = !eligibleForLoan;
//  console.log(applicationRefused);


//  let a = 'red';
//  let b = 'blue';

// b =  'red';
// a =  'blue';

//  console.log(a);
//  console.log(b);


//  hour = 13;

//  if (hour >= 6 && hour <= 12){
//      console.log("Good Morning!");
//  }
//  else if ( hour >= 12 && hour <= 18){
//      console.log("Good afternoon!");
//  }
//  else 
//  console.log("Good Evening!");
  

//  let hour = 12;
//  switch(true){
//      case (hour>=6 && hour<12):
//      console.log("Goodmorning");
//      break;

//      case (hour >=12 && hour<= 18 ):
//      console.log('good afternoon');
//      break;

//      default:
//      console.log('good evening');


  


//  }

// role = 'guest';


// if ( role === 'guest'){
//     console.log ('guest user');

// }
// else if ( role === 'moderator'){
//     console.log('moderator');

// }
// else  


// function fizzbuzz (input){
//     if (typeof input !== 'number'){
//         return ('not a number');


//     }
//  if ( input % 3 ===0){
//         return("fizz");
//     }
//     else if (input % 5 === 0){
//         return('buzz')
//     }
//     else ( input % 3===0 && input % 5=== 0)
//         return('fizzbuzz');

   


// }
// console.log(fizzbuzz(3))
// console.log('unknown user');


// for ( i =1; i<=5; i++){
//     if ( i%2 !== 0)
//     console.log(i);

// }
// // ite
//  function max(a,b){
//      if (a>b) ? a: b;
 


// function checkSpeed (speed){
    
    
    
    //     const speedLimit = 70;
//     const kmPoints = 5;

//     if (speed <= speedLimit)
//     console.log ('ok');



//   else{
 
//     let points = (Math.floor( speed - speedlimit ) / kmPoints);
//     if (points  >= 12)
 
//     console.log('license suspended');
//     else
//     console.log('point is', points)

//   }

 
    
// }
// checkSpeed(50);


// function showNumber (limit){
//     let i =0;
//     while (i <= limit ){
//         if (i % 2 !== 0)
//         console.log('odd', i)
//         else 
//         if (i % 2 == 0)
//         console.log('even', i)
//         i++;
//     }
// }
// showNumber(10)
   

// const array = [null, 0,undefined, 1, 2];

// console.log (countTruthy(array));

        
    
// const movie={
//      title: 'a',
//      releasedYear: 2018,
//      director: 'mosh',
//      rating: 4.5
//  };
// console.log(movie);


// function showProperties(obj){
//     for (let key of obj)
//     if (typeof obj[key] === 'string')
//      console.log(key, obj[key]);
// }
// showProperties(movie);






// function sum  (limit){
//     let sum = 0;
     
//     for (let i=0; i<=limit; i++)
//     if (i% 3 === 0 || i% 5 === 0)
//     sum  += i;
//     return sum;

// }

// console.log(sum(10));



// const marks = [ 80, 50, 50];
// function calculateAverage(array){
//     let sum =0;
//     for (let value of array) {
//         sum+= value;
//         //sum = sum + value
//     }
//  return   sum/ array.length;
// }
    



// function calculateGrade(){
//     const average= calculateAverage(marks);
//     if (average >= 0 && average <60)
//     return 'f';
//     if (average < 70)
//     return 'd';
//     if (average <80)
//     return 'c';
//     if (average < 90)
//     return 'b';
//     if (average < 100)
//     return 'A';
// }
// console.log(calculateGrade(marks));

// function Circle (radius){



//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');

//     }
// }    
// const another = new Circle(1);
// console.log(another);  //constructor function


// function circle(radius){
//     return{
//     radius,
//     draw: function() {
//         console.log('draw');
//     }
// };
// }
//  console.log(circle(1));
// Circle.call({}, 1);


//   const obj ={
//       name: 'mosh',
//       releasedYear: 2018,
//       title: 'jameson'

//   }
   
//   console.log(obj);

// function increase(obj){
//     obj.value++;
// }

// let obj = {value: 10};
// increase(obj);
// console.log(obj);


// const circle= {
//     radius: 1,
//     draw(){
//         console.log('draw');
//     }

// };

// for (let key in circle)
// console.log(key, circle[key]);


// for (let entry of Object.entries(circle))
// console.log(entry);  //  object display format

//  if ('radiu' in circle ){
//      console.log('yes');}
//      else 
// console.log('no');



// cloning an object
// const circle= {
//     radius: 1,
//     draw(){
//         console.log('draw');
//      }

//  };

// const another = {... circle};  // with the spread operator
// console.log(another);




// showing properties
//   let address ={
//       street: 'no 7 kayode oladejo street orogun ibadan',
//       city: 'ikeja',
//       zipCode: 1234
//   }
// function showAddress(address){
//     for (let key in address)
//     console.log(key, address[key]);

// }
// (showAddress(address));


 //factory function
// function address (street, city, zipCode){
//     return{
//         street,
//         city,
//         zipCode

        
//     };

// }

// const add = address('a','b','c');
// console.log(add);

//constructor function
// function Address(street,city, zipCode ){
//     this.street =  street;
//     this.city= city;
//     this.zipCode = zipCode 


// }
// const address = new Address ('a','b', 'c');


// console.log(address);



// let blogPost ={
//     title: 'mosh',
//     body: 'programming',
//     author: 'mayowa',
//     views: 100,
//     comments: [
//          {author: 'a', body: 'b'},
//         ],
//      islive: true
// };


// for( let key in blogPost){
//     console.log(key, blogPost[key]);
// }

// finding element with reference types
// const courses=[
//     {id: 1, name: 'a'},
//     {id: 1, name: 'b'},
// ];

// const course= courses.find(course=>course.name === 'a');




// console.log(course);



// for posivity check
// const array =[1,2,3,4]

// const allPositive = array.every(function(value){
//      return value >=0;
// });
// console.log(allPositive);


// emptying an array

// let array =[1,2,3,4];

// let another = array;

// array.length= 0;
// //or 
//  while(array.length> 0);
//  array.pop();
//  //or
//  array.splice(0, array.length);



// console.log(array);
// console.log(another);


//slicing an array
//  const array1= [1,2,3,4];
//  const array2 = [5,6,7,8];

// //  const combined = array1.concat(array2);
// // or 
// const combined = [...array1,'a','b', ...array2];

//  console.log(combined);




// for of 
// const rays= [1,2,3,4];

// //for (let ray of rays)
// rays.forEach(ray => console.log(ray));
// //console.log(ray);


// const array= [1,2,3,4,-1]
// // array filtering
// // const filtered = array.filter(n  => n>= 0 );

// // array mapping 
// // const item = filtered.map(n=>  ({value: n}));
// // console.log(item);


// // array filtering  + array mapping = array chaining

// const item=array.filter(n => n>=0). map(n=> ({value: n}));
// console.log(item);


// reduce method
// const array= [1,2,3,4,-1]
// const sum =array.reduce ((accumulator, currentValue)=> {
  
//     return accumulator+ currentValue;

// } , 0);
// console.log(sum);

// adding the value in a function even when the parameters are not complete
// function sum(){
//     let total =0;
//     for (let value of arguments) // seeing the arguments
//     total= total + value;
//     return total;

// }
// console.log(sum(1,3,3,3,2));


// rest operator for function with varying number of parameters
// reduce for adding sum of an array
function sum(discount,...prices){

const total= prices .reduce((a,b) => a+b);
return total *(1- discount);
}

console.log(sum(0.1,20,30,40));

// default parameters , as to be last
function interest (principal, rate = 3.5, years= 5){
    
    return principal*rate/100*years;
}
console.log(interest(1000,3.5, 5));

//Getters and setters
// getters so ull b able to change
const person ={
    firstName: 'mosh',
    lastName: 'hamedani',
    get fullName(){
      return  `${person.firstName}${person.lastName}` ;
    }, 
    
    
    set fullName(value){
        if (typeof value !== 'string')  // 2
        throw new Error('value is not a string.');


       const parts= value.split(' ');
       if (parts.length !== 2)
       throw new Error('enter first and last name');

       this.firstName = parts[0];
       this.lastName = parts [1];

    }


};
try {  //1
    person.fullName = null;
}
catch(e){    //3
console.log(e);
    
}
console.log(person);



const video={
    title: 'a',
    tags: ['a','b', 'c' ],
    showTags(){
        const self =this;


        this.tags.forEach(tag =>{
            console.log(self.title, tag);
        });
    }
};
video.showTags();
// aarow function