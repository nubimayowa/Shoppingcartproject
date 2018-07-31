// // // // // // // // // // const movie = {
// // // // // // // // // //     title :'a',
// // // // // // // // // //     realasedYear : 1998,
// // // // // // // // // //     rating:4.5,
// // // // // // // // // //     director: 'b'

// // // // // // // // // // };
// // // // // // // // // // showProperties (movie)
// // // // // // // // // // function showProperties(obj){
// // // // // // // // // //     for (let key in obj)
// // // // // // // // // //     console.log(key);
// // // // // // // // // // }

// // // // // // // // // console.log(sum(10));

// // // // // // // // // function sum (limit){
// // // // // // // // //     let sum=0;
// // // // // // // // //     for (i =0; 1<= limit; i++)
// // // // // // // // //     if (i% 3 ===0 || i% 5===0)
// // // // // // // // //     sum +=i;
// // // // // // // // //     return sum;

// // // // // // // // // }



// // // // // // // // const  marks = [80, 70, 60];
// // // // // // // // console.log(calculateGrade (marks))
// // // // // // // // function calculateGrade(marks){
// // // // // // // //     let average=0;
    
// // // // // // // //     if (average  >= 0 && average <=59 )
// // // // // // // //     return "D";
// // // // // // // //     if (average >=70 && average <=80 )
// // // // // // // //     return "B";
// // // // // // // //     if (average <=100 && average < 80 )
// // // // // // // //     return "A";


// // // // // // // //     function calculateAverage(array){
// // // // // // // //     let sum= 0;
// // // // // // // //     for (let value of marks)
// // // // // // // //     sum += value;
// // // // // // // //     return sum/ array.length;
// // // // // // // //     }

    

    
 
// // // // // // // // }




// // // // // // // // for show star program
// // // // // // //  showStars = (5);
// // // // // // // function showStars (rows) {
// // // // // // //     for (let row= 1; row<= rows; row++){
// // // // // // //         let pattern = '';
// // // // // // //         for (let i =0; i< row; i++)
// // // // // // //         pattern += '+';
// // // // // // //         console.log(pattern);
// // // // // // //     }
// // // // // // // 
// // // // // // // }

// // // // // // showPrimes(20);
// // // // // // function showPrimes (limit){
// // // // // //     for (let number= 2; number <=limit; number++){
// // // // // //         if (isPrime(n)) console.log(number);
        
    
    

// // // // // //     }
// // // // // // }





// // // // // // function isPrime (number){
// // // // // //     let isPrime= true;
// // // // // //     for (let factor = 2; factor< number ; factor++){
// // // // // //         if (number%  factor ===0 ){
// // // // // //           return false;
// // // // // //             break;
// // // // // //         }
// // // // // //     }
// // // // // //     return true;
// // // // // // }

// // // // // // object oriented style of programming 
// // // // // //style of programming where objects talk together to perform some functionalites
// // // // // // function is part of an object = mthods
// // // // // const circle ={
// // // // //     radius: 1,
// // // // //     location:{
// // // // //         x : 1,
// // // // //         y : 1


// // // // //     },
// // // // //     isVisible: true,
// // // // //     draw: function() {
// // // // //         console.log('draw');
// // // // //     }
// // // // // };
// // // // // circle.draw(); // calling the draw method here


// // // // function Circle(radius){
// // // //     this.radius = radius;
// // // //     this.draw =function(){
// // // //         console.log('draw');
// // // //     }


// // // // }
// // // //  const circle = new Circle(1);

// // // const circle ={
// // //     radius: 1,


// // // };
// // //  circle.color = 'yellow';
// // //  circle.draw = function(){

// // //  }
// // //  delete circle.color;
// // //  delete circle.draw;
// // //  console.log(circle);


// // let x= {value: 10};
// // let y= x;
// // x.value= 20;
// // let sum =  x+y;

// // console.log(sum);




// const circle ={
//     radius: 1,
//     draw(){
//         console.log('draw');

//     }

// };
//  for (let key in circle)
//      console.log(key, circle[key]);
 
//   for (let key of Object.keys(circle))
//       console.log(key);
//  for (let entry of Object.entries(circle)) //PRINTS EACH ENTRY IN AN ARRAY
//         console.log(entry);
// if ('radi' in circle) // IF PROPERTIES ARE IN CIRCLE, RADIUS IN THE PROPERTY CIRCLE IS THE OBJECT
// console.log('yes');
// else{
//     console.log('no');
// }
  
// //copying the properties of an object into another
// const circle ={
//     radius:1,
//     draw(){
//         console.log('draw')
//     }
// };


// // const another ={};
// // for (let key in circle)
// // another[key]= circle[key];
// // console.log(another);

// //other way 
// const another =Object.assign({
//     color: '',
// }, circle)
// console.log(another)

// const another ={...circle};
// console.log(another);


// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');  
// const date2 = new Date(2018, 4, 11, 9) ;

// now.setFullYear(2017);

// const Address={
// street: 'No 7 kayode oladejo street orogun ibadan',
// city : 'ibadan',
// zip: '+234'
// } ;

// function ShowAdress(Address){
//     for (let key in Address)
//     console.log(key,Address[key]);
    
// }
// ShowAdress(Address);

// factory function 
// function Address ( street,zip,city){
//     return{
//         street,
//         zip,
//         city,

//     }
// };
//  const ShowAdress = Address('a','b','c');
//  console.log (ShowAdress);

 //constructor function + object equality
  


// const blogPost={

//     title: 'scvbby',
//     body: 'mayowa',
//     author: 'femi tayo',
//     views: 100,
//     comments:[   // array format
//         {author:'a', body:'b'},
//         {author:'c', body:'d'},
//     ],
//     isLive: true

// };

// console.log(blogPost);

// for arrays
// let numbers = [3,4];
// numbers.push(6,7);
// numbers.unshift(1,2)
// numbers.splice(2,0,'a', 'c')
// console.log(numbers);

// let number =[3,4,5,6,3,7];

// console.log(number.indexOf('a') );
// console.log(number.lastIndexOf(3));
// console.log(number.indexOf(3) !== -1);
// console.log(number.includes(1));

// reference types
// const courses=[
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ];

// const course= courses.find(course => course.name);

// console.log(course);


// const array = [ 1,2,3,4];
// const time = array.splice(2,2);
// console.log(time);

// emptying an array
// let array =[1,2,3,5];
// let another = array;


// array.length= 0;
// console.log(array);
// console.log(another);



// concatenating an array/ combining

// let another = [{id:1}];
// let max =[5,6,7,8];

//  let combined = another.concat(max);
//  console.log(combined);

 // using a spread operator


// let first = [1,2,3,4];
// let second = [5,6,7,8];
// let  total = [...first,"and" ,...second]
// let copy =[...total];
// console.log(copy);


// aray iteration
//  let numbers =[ 1,2,3,4];
//  for (let number of numbers)
//  console.log(number );

 // testing the element in an array for positivity
//  const number =[1, -1,2,3];
//  const allPositive =number.every(value =>
//  value >= 0);

// console.log(allPositive);

// filtering an array and mapping 
//  const numbers =[1,2,3,4];
//   const items= numbers
//   .filter( n => n>= 0)
  
//   .map(n =>({value: n}))
//   .filter(obj => obj.value> 1)



//  console.log(items);
 // joing arrays to string

//  const html =items.join('');
//  console.log(html);


// reducing an array
// let numbers =[ 1,2,3,4];
// let sum =0;
// for (let n of numbers)
//  sum+= n;
//  console.log(sum);
//  const sum= numbers.reduce((accumulator, currentvalue) => accumulator+currentvalue); // reduce ,  no of times a search occurs
//  console.log(sum);

// range
// function arrayFromRange (min, max){
//     const output=[];
//     for ( let i = min; i<= max; i++)
//     output.push(i);
//     return output;

// }
// const numbers= arrayFromRange(1, 3);
// console.log(numbers);


// 

//exclude
//off set
// move from one place to another
// function move(array, index, offset){
//     const position = index+ offset
//     if (position >= array.length || position <0){ 
//         console.error('invalid offset');
//     }
    
//  const output =[...array];
// const element = output.splice(index, 1)[0];
//  output.splice(position, 0, element);
// return output;

 
// }

// const numbers= [1,2,3,4];
// const output= move(numbers, 0, 3);
// console.log(output);


// //reduce method to get the biggest number
// const numbers= [1,2,3,4]
// const max = getMax([2,3]);
//  console.log(max);
// function getMax (array){
// if (array.length===0)
// return undefined;
// array.reduce((a,b) => (a>b) ? a:b);
// };



// functions


// let run =  function walk(){
//     console.log('run');
// };
// let move = run;

// run();
// move();

// function for sum with rest operator

// function sum(){
//    let total= 0;
//    for (let value of arguments)
//    total+= value;
//    return total;
// };
// console.log(sum(1,2));


// function sum (discount,...prices){
//   let total =prices.reduce((a,b) => a+b);
// return total*(1-discount);


// }
// console.log(sum(0.1,20,30));    ]

// function sumOfAnArgument ( ){
//     title: 'sum';
//     let total= 0;
//     for (let value of arguments)
//     total+= value;
//     return total;

// };

    

// console.log('sum=',sumOfAnArgument(1,2,3,4));


// function simpleInterest ( principal, rate, year){
//    let simpleInterest = principal * rate* time/ 50;

//    return simpleInterest;

// }
// console.log(simpleInterest(10,10,))



// let person={
//     lastName: 'Mayowa',
//     SecondName: 'Tosin',
//     get fullName(){
//         return `${person.lastName} ${person.SecondName}`


//     },
//     set fullName(value){
//         if (typeof value !== 'string') 
//         throw new Error('value is not a string');
//         const parts=value.split(' ');
//         if (parts.length !==2)
//         throw new Error('enter lastname or SecondName');
      
        
//         this.lastName =parts[0];
//         this.SecondName = parts[1];

//     }

  
// };
// try{
//     person.fullName='';
// }
// catch (e){
//     alert(e);
// }
// // person.fullName = 'lamide omisore';
// console.log(person);
// pssing objects with title 
// const video= {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags(){
//         this.tags.forEach(tag=> {
//             console.log(this.title, tag);
//         });
//     }
// }

// video.showTags();



// addition of array

// function sumOfAnArgument(...items){
//     console.log(items);
//     return items.reduce((a,b) => a+b);
// };
// console.log(sumOfAnArgument(1,2,3,4));


// function area (radius,pie= 3.142,  ){
   
//     let area= (pie* (radius*radius));
//     return area;

// };
// console.log(area(5));



// const CIRCLE ={
//     radius: 1,
//     get area(){
//         return Math.PI* this.radius *this.radius;
//     }

// };
// console.log(CIRCLE.area);


// number of times a search occured
// const numbers= [1,2,1,,4,4,4,3,4,4]
// const  count = countOccurences(numbers,1)
// console.log(count);

// function countOccurences (array, searchElement){
//     return array.reduce((accumulator, current) =>{
//         const occurence = (current === searchElement) ? 2: 0;
//         return accumulator + occurence;

//     }, 0);
// };

// getting started with oop




